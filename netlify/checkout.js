/* ============================================================
   TheBestBundle – netlify/functions/create-checkout-session.js
   Creates a Stripe Checkout Session and returns the session ID.
   
   SETUP:
   1. Install stripe: npm install stripe  (in project root)
   2. Set environment variable STRIPE_SECRET_KEY in Netlify dashboard
      Site Settings → Environment Variables → Add variable
   ============================================================ */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/* ---------- Pack Definitions ---------- */
const PACKS = {
  pack2: {
    name: 'Starter Pack',
    description: 'Choose 2 ebooks or templates from our entire collection.',
    amount: 3700,   // in cents ($37.00)
    quantity: 2
  },
  pack3: {
    name: 'Creator Pack',
    description: 'Choose 3 ebooks or templates from our entire collection.',
    amount: 4700,   // in cents ($47.00)
    quantity: 3
  },
  pack5: {
    name: 'Pro Pack',
    description: 'Choose 5 ebooks or templates from our entire collection.',
    amount: 6700,   // in cents ($67.00)
    quantity: 5
  },
  pack10: {
    name: 'Complete Vault',
    description: 'Get all ebooks and all templates from our entire collection.',
    amount: 9700,   // in cents ($97.00)
    quantity: 'all'
  }
};

/* ---------- Handler ---------- */
exports.handler = async function (event, context) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  let packId;
  try {
    const body = JSON.parse(event.body || '{}');
    packId = body.packId;
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid request body.' })
    };
  }

  const pack = PACKS[packId];
  if (!pack) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid pack ID: ' + packId })
    };
  }

  // Determine site URL for success/cancel redirects
  const siteUrl = process.env.URL || 'https://thebestbundle.com';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        'card',
        'us_bank_account',
        'klarna',
        'link'
        // Apple Pay and Google Pay are enabled automatically for 'card' when
        // the customer's browser/device supports them — no extra config needed.
      ],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: pack.name,
              description: pack.description,
              images: [siteUrl + '/og-image.png']  // optional: add your product image
            },
            unit_amount: pack.amount
          },
          quantity: 1
        }
      ],
      mode: 'payment',
     success_url: siteUrl + '/thank-you.html?session_id={CHECKOUT_SESSION_ID}&sku=' + encodeURIComponent(pack.name) ,
      cancel_url: siteUrl + '/#packs',
      metadata: {
        packId: packId,
        packName: pack.name,
        productQuantity: String(pack.quantity)
      },
      billing_address_collection: 'auto',
      allow_promotion_codes: true
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ sessionId: session.id })
    };

  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Internal server error.' })
    };
  }
};
