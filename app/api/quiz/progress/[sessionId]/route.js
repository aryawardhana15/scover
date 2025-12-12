import { NextResponse } from 'next/server';
import { getProgress, saveProgress, getSession } from '../../../../../lib/db';

export async function GET(request, { params }) {
  try {
    const { sessionId } = params;

    const progress = await getProgress(sessionId);
    
    if (!progress) {
      return NextResponse.json(
        { error: 'Progress not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      progress,
    });
  } catch (error) {
    console.error('Get progress error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  try {
    const { sessionId } = params;
    const progressData = await request.json();

    // Validate session exists
    const session = await getSession(sessionId);
    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Save progress
    const updated = await saveProgress(sessionId, progressData);

    return NextResponse.json({
      success: true,
      progress: updated.progress,
    });
  } catch (error) {
    console.error('Save progress error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

