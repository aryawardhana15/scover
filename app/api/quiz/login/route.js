import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '../../../../lib/db';

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    // Validasi input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    let user = await getUserByEmail(email);
    
    if (!user) {
      // Create new user
      user = await createUser(name, email);
    } else {
      // Update name if different
      if (user.name !== name) {
        user = { ...user, name };
      }
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

