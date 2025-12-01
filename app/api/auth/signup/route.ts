import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { hashPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const {email, password, username } = await request.json();

        if (!email || !password || !username) {
            return NextResponse.json(
                { error: 'Missing required fields'},
                { status: 400 }
            )
        }

        if (password.length < 6) {
            return NextResponse.json(
                {error: 'Password must be at least 6 characters'},
                { status: 400 }
            )
        }

        const client = await clientPromise
        const db = client.db('dashstack');
        const users = db.collection('users');

        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists'},
                { status: 400 }
            )
        }

        const hashedPassword = await hashPassword(password)

        const result = await users.insertOne({
            email,
            password: hashedPassword,
            username,
            cteatedAt: new Date(),
            updatedAt: new Date(),
        })

        return NextResponse.json(
            {
                message: 'User created successfully',
                userId: result.insertedId,
            },
            { status: 201 }
        )
    } catch (error) { 
        console.error('Sign Up error:', error);
        return NextResponse.json(
            {error: 'Internal server error'},
            { status: 500 }
        )
    }
}