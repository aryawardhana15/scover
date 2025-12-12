import { NextResponse } from 'next/server';
import { getAllResults } from '../../../../lib/db';

export async function GET(request) {
  try {
    // TODO: Add authentication/authorization check
    // For now, allow anyone to access (add auth later)
    
    const results = await getAllResults();

    return NextResponse.json({
      success: true,
      results,
      count: results.length,
    });
  } catch (error) {
    console.error('Get all results error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

