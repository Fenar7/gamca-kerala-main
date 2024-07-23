// pages/api/register.js
'use server';
import { connectToDB } from '@/utils/database';
import User from '@/models/usersinfo';
const { ObjectId } = require('mongodb');
import { cookies } from 'next/headers';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userData, response } = await req.json();

    console.log(userData);
    console.log(response);

    // Validate the user ID
    const userId = userData.id.replace(/^"|"$/g, '');
    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    await connectToDB();

    const existingUser = await User.findById(new ObjectId(userId));
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Before update:', existingUser);

    existingUser.paymentstatus = true;
    await existingUser.save();

    // Fetch the updated user to confirm the change
    const updatedUser = await User.findById(new ObjectId(userId));

    console.log('After update:', updatedUser);

    return res.status(200).json(updatedUser);

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
}

export const POST = handler;
