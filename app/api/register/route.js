// pages/api/register.js
import {connectToDB} from '@/utils/database';
import User from '@/models/usersinfo';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      country, city, countrytravellingto, firstname, lastname,
      dateofbirth, nationality, gender, martialstatus, passportnumber, confirmpassportnumber,
      passportissuedate, passportissueplace, passportexpirydate, visatype, email, phone,
      nationalid, postappliedfor, other
    } = await req.json();

    await connectToDB();

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
    });

    console.log("This is the userin PAI page"+user)
    let log = await user.save()
    await user.save();
    console.log("This is the log++++++++++++++++++++++++++++++++"+log)

    return new Response(JSON.stringify(user), {status: 201})
  } catch (error) {
    console.log(error.message)
    return new Response("Failed to create a new prompt",{status: 500})
    // res.status(500).json({ message: 'Internal server error: ' + error.message });
  }
}

export const POST = handler;
