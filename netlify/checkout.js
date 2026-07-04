/* ============================================================
   TheBestBundle – netlify/functions/create-checkout-session.js
   Creates a Stripe Checkout Session and returns the session ID.
   
   SETUP:
   1. Install stripe: npm install stripe  (in project root)
   2. Set environment variable STRIPE_SECRET_KEY in Netlify dashboard
      Site Settings → Environment Variables → Add variable
   ============================================================ */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/* ---------- Product Definitions ---------- */
const PRODUCTS = {
  // Individual Ebooks - $27 each
  'book1': {
    name: 'Decouvre ta niche parfaite',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,   // in cents ($27.00)
    type: 'ebook'
  },
  'book2': {
    name: 'ton plan d’action en business',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book3': {
    name: 'Comment Être Financé Rapidement',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book4': {
    name: 'Protège ton Entreprise Légalement',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book5': {
    name: 'Crée une presence en ligne',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book6': {
    name: 'traffic leads ventes Le système',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book7': {
    name: 'Discipline Financière',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book8': {
    name: 'l’art de vendre en 2026',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book9': {
    name: 'De salariés à Mentalité d’entrepreneur',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },
  'book10': {
    name: 'Automatise Ton Business en 30 Jours',
    description: 'Individual ebook from TheBestBundle',
    amount: 2700,
    type: 'ebook'
  },

  // Packs - Updated Prices
  'starter': {
    name: 'Starter Pack',
    description: 'Choose 2 ebooks from our entire collection of 10 books.',
    amount: 3700,   // $37.00
    type: 'pack',
    quantity: 2
  },
  'creator': {
    name: 'Creator Pack',
    description: 'Choose 3 ebooks from our entire collection of 10 books.',
    amount: 5700,   // $57.00
    type: 'pack',
    quantity: 3
  },
  'pro': {
    name: 'Pro Pack',
    description: 'Choose 5 ebooks from our entire collection of 10 books.',
    amount: 8700,   // $87.00
    type: 'pack',
    quantity: 5
  },
  'vault': {
    name: 'Vault Pack',
    description: 'Get all 10 ebooks from our entire collection.',
    amount: 15700,  // $157.00
    type: 'pack',
    quantity: 10
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

  let productId;
  try {
    const body = JSON.parse(event.body || '{}');
    productId = body.productId || body.packId; // support both keys
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid request body.' })
    };
  }

  const product = PRODUCTS[productId];
  if (!product) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid product ID: ' + productId })
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
      ],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
              images: [siteUrl + '/og-image.png']
            },
            unit_amount: product.amount
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: siteUrl + '/thank-you.html?session_id={CHECKOUT_SESSION_ID}&sku=' + encodeURIComponent(product.name),
      cancel_url: siteUrl + '/#packs',
      metadata: {
        productId: productId,
        productName: product.name,
        productType: product.type,
        productQuantity: String(product.quantity || 1)
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
