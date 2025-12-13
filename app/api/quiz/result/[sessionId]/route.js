import { NextResponse } from 'next/server';
import { getSession, getScores, getUser, updateSession } from '../../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    const { sessionId } = params;

    // Get session
    const session = await getSession(sessionId);
    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Get user
    const user = await getUser(session.userId);
    
    // Get scores
    const scores = await getScores(sessionId);
    
    // Calculate total passed
    const totalPassed = Object.values(scores).filter(score => score.passed).length;
    
    // Determine overall status
    let overallStatus = 'Belum Lulus';
    if (totalPassed >= 5) {
      overallStatus = 'Lulus Total';
    } else if (totalPassed >= 3) {
      overallStatus = 'Cukup';
    }

    // Mark session as completed if not already
    if (session.status === 'in_progress') {
      await updateSession(sessionId, {
        status: 'completed',
        endTime: new Date(), // Will be formatted by updateSession
      });
    }

    return NextResponse.json({
      success: true,
      result: {
        sessionId: session.id,
        user: user ? {
          name: user.name,
          email: user.email,
        } : null,
        startTime: session.startTime,
        endTime: session.endTime || new Date().toISOString(),
        scores,
        totalPassed,
        overallStatus,
      },
    });
  } catch (error) {
    console.error('Get result error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

