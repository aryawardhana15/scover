import { NextResponse } from 'next/server';
import { verifyPassword } from '../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validasi input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Verify password
    const user = await verifyPassword(email, password);
    
    if (!user) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Email atau password salah' 
        },
        { status: 401 } // Unauthorized
      );
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
      { 
        success: false,
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

