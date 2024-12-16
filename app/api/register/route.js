'use server';
import { cookies } from 'next/headers';
import { connectToDB } from '@/utils/database';
import User from '@/models/usersinfo';

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const {
      country,
      city,
      countrytravellingto,
      firstname,
      lastname,
      dateofbirth,
      nationality,
      gender,
      martialstatus,
      passportnumber,
      confirmpassportnumber,
      passportissuedate,
      passportissueplace,
      passportexpirydate,
      visatype,
      email,
      phone,
      nationalid,
      postappliedfor,
      other,
      paymentstatus,
    } = body;

    // Validate required fields
    if (!city) {
      return new Response(JSON.stringify({ error: 'City is required' }), { status: 400 });
    }

    // Connect to the database
    await connectToDB();

    // Create a new user
    const user = new User({
      country,
      city,
      countrytravellingto,
      firstname,
      lastname,
      dateofbirth,
      nationality,
      gender,
      martialstatus,
      passportnumber,
      confirmpassportnumber,
      passportissuedate,
      passportissueplace,
      passportexpirydate,
      visatype,
      email,
      phone,
      nationalid,
      postappliedfor,
      other,
      paymentstatus,
    });

    // Save the user
    await user.save();

    // Set cookies
    cookies().set('id', JSON.stringify(user._id));
    cookies().set('firstname', firstname);
    cookies().set('email', email);
    cookies().set('passportno', passportnumber);
    cookies().set('amount', 1300);

    // Return the response
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error(error.message);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
