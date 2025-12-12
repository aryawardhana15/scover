import { NextResponse } from 'next/server';
import { createSession, getSessionsByUser } from '../../../../lib/db';

export async function POST(request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Check if user has active session
    const existingSessions = await getSessionsByUser(userId);
    const activeSession = existingSessions.find(
      (s) => s.status === 'in_progress'
    );

    if (activeSession) {
      return NextResponse.json({
        success: true,
        session: activeSession,
        isNew: false,
      });
    }

    // Create new session
    const session = await createSession(userId);

    return NextResponse.json({
      success: true,
      session,
      isNew: true,
    });
  } catch (error) {
    console.error('Create session error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

