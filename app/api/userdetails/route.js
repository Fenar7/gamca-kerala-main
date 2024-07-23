import { cookies } from 'next/headers';

export const GET = async (request) => {
  try {
    const cookieStore = cookies();

    let name = cookieStore.get('firstname')?.value;
    let email = cookieStore.get('email')?.value;
    let passportno = cookieStore.get('passportno')?.value;
    let amount = cookieStore.get('amount')?.value;
    let id = cookieStore.get('id')?.value

    console.log(name, email, passportno, amount);

    return new Response(JSON.stringify({ name, email, passportno, amount, id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response("Failed to fetch the data", { status: 500 });
  }
};
