'use server';

import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  try {
    console.log('Clearing cookies');

    // Clear cookies by setting their expiry date in the past
    const headers = new Headers();
    headers.append('Set-Cookie', serialize('id', '', { maxAge: -1, path: '/' }));
    headers.append('Set-Cookie', serialize('firstname', '', { maxAge: -1, path: '/' }));
    headers.append('Set-Cookie', serialize('email', '', { maxAge: -1, path: '/' }));
    headers.append('Set-Cookie', serialize('passportno', '', { maxAge: -1, path: '/' }));
    headers.append('Set-Cookie', serialize('amount', '', { maxAge: -1, path: '/' }));

    console.log('Cookies cleared successfully');
    return new NextResponse(JSON.stringify({ message: 'Cookies cleared' }), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error clearing cookies:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal server error', error: error.message }), {
      status: 500,
    });
  }
}
