const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const { items } = req.body;
console.log("Received items:", JSON.stringify(items, null, 2));
    
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        error: "Cart is empty"
      });
    }

    const line_items = items.map((item) => ({
      price: item.priceId,
      quantity: 1
    }));

    const session = await stripe.checkout.sessions.create({

      mode: "payment",

      line_items: line_items,

      success_url:
        `${req.headers.origin}/thankyou.html?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url:
        `${req.headers.origin}/`

    });

    return res.status(200).json({
      url: session.url
    });

  } catch (error) {

    console.error("Stripe checkout error:", error);

    return res.status(500).json({
    error: error.message
});

  }

};
