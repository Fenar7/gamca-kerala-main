// pages/api/register.js
import {connectToDB} from '@/utils/database';
import User from '@/models/usersinfo';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log(req.body);

  try {
    const {
      country, city, countrytravellingto, firstname, lastname,
      dateofbirth, nationality, gender, martialstatus, passportnumber, confirmpassportnumber,
      passportissuedate, passportissueplace, passportexpirydate, visatype, email, phone,
      nationalid, postappliedfor, other
    } = req.body;

    await connectToDB();

    const user = new User({
      country,
      city,
      countrytravellingto,
      firstname,
      lastname,
      dateofbirth: new Date(dateofbirth),
      nationality,
      gender,
      martialstatus,
      passportnumber,
      confirmpassportnumber,
      passportissuedate: new Date(passportissuedate),
      passportissueplace,
      passportexpirydate: new Date(passportexpirydate),
      visatype,
      email,
      phone,
      nationalid,
      postappliedfor,
      other,
    });

    console.log(user)
    let log = await user.save()
    // await user.save();
    console.log("This is the log++++++++++++++++++++++++++++++++"+log)

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error.message)
    // res.status(500).json({ message: 'Internal server error: ' + error.message });
  }
}

export const POST = handler;
