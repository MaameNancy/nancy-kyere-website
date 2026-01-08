import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Here you would typically save the email to a database or send to an email service
    console.log('New subscription:', email);

    return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ message: 'Subscription failed' }, { status: 500 });
  }
}
