import Razorpay from 'razorpay';

export async function POST(req) {
  const { amount, currency } = await req.json();

  try {
    const razorpay = new Razorpay({
      key_id: process.env.key_id,
      key_secret: process.env.key_secret,
    });

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency,
      receipt: `receipt_order_${Math.random().toString(36).substr(2, 9)}`,
    };

    const order = await razorpay.orders.create(options);

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create order' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
