import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { verifyPassword, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Missing email or password'},
                { status: 400 }
            )
        }

        const client = await clientPromise;
        const db = client.db('dashstack');
        const users = db.collection('users');

        const user = await users.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        const isValid = await verifyPassword(password, user.password);
        if(!isValid) {
            return NextResponse.json(
                { error: 'Invalid credentials'},
                { status: 401 }
            )
        }

        const token = generateToken(user._id.toString());

        const response = NextResponse.json(
            {
                message: 'Login successful',
                user: {
                    id: user._id,
                    email: user.email,
                    // username: user.username,
                }
            }, { status: 200 }
        )

        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
        })

        return response;

    } catch (error) {
        console. error('Login error:', error );
        return NextResponse.json(
            { error: 'Internal server error'},
            { status: 500 }
        )
    }
}