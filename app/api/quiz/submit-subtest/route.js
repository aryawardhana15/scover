import { NextResponse } from 'next/server';
import { 
  getSession, 
  getAnswers, 
  saveScore, 
  saveAnswer,
  updateSession 
} from '../../../../lib/db';
// Import questions data
// Note: In production, load from database
import { questionsData } from '../../../quiz/test/questions-data';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { sessionId, subtestId } = await request.json();

    if (!sessionId || !subtestId) {
      return NextResponse.json(
        { error: 'Session ID and Subtest ID are required' },
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

    // Get all answers for this subtest
    const answers = await getAnswers(sessionId, subtestId);
    
    // Get questions for this subtest
    const questions = questionsData[subtestId] || [];
    
    // Calculate score
    let correctCount = 0;
    const totalCount = questions.length;

    // Update answers with isCorrect and count correct
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const questionNumber = i + 1;
      const answer = answers.find(a => a.questionId === questionNumber);
      
      if (answer) {
        const isCorrect = answer.answer === question.correctAnswer;
        
        // Update answer with isCorrect
        await saveAnswer(
          sessionId, 
          subtestId, 
          questionNumber, 
          answer.answer, 
          isCorrect
        );
        
        if (isCorrect) {
          correctCount++;
        }
      }
    }

    // Determine if passed (more than 6 correct = at least 7)
    const passed = correctCount > 6;

    // Save score
    const score = await saveScore(sessionId, subtestId, correctCount, totalCount, passed);

    return NextResponse.json({
      success: true,
      score: {
        correct: correctCount,
        total: totalCount,
        passed,
      },
    });
  } catch (error) {
    console.error('Submit subtest error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

