import { NextResponse } from 'next/server';
import { getScores, getSession } from '../../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    const { sessionId } = params;

    // Validate session
    const session = await getSession(sessionId);
    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    const scores = await getScores(sessionId);

    return NextResponse.json({
      success: true,
      scores,
    });
  } catch (error) {
    console.error('Get scores error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

