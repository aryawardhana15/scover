import { NextResponse } from 'next/server';
import { saveAnswer, getSession } from '../../../../lib/db';

export async function POST(request) {
  try {
    const { sessionId, subtestId, questionId, answer } = await request.json();

    // Validasi
    if (!sessionId || !subtestId || !questionId || !answer) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate session
    const session = await getSession(sessionId);
    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Save answer (isCorrect akan dihitung saat submit subtest)
    const answerData = await saveAnswer(sessionId, subtestId, questionId, answer);

    return NextResponse.json({
      success: true,
      answer: answerData,
    });
  } catch (error) {
    console.error('Save answer error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

