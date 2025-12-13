import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '../../../../lib/db';

// Force dynamic rendering untuk API route
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    // Validasi input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Validasi password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    
    if (existingUser) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Email already registered. Please login instead.' 
        },
        { status: 409 } // Conflict
      );
    }

    // Create new user (password akan di-hash di createUser)
    const user = await createUser(name, email, password);

    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    console.error('Error stack:', error.stack);
    console.error('Error message:', error.message);
    
    // Handle duplicate email error
    if (error.message && (error.message.includes('duplicate') || error.message.includes('unique') || error.message.includes('Duplicate entry'))) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Email already registered. Please login instead.' 
        },
        { status: 409 }
      );
    }
    
    // Return error message untuk debugging
    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

