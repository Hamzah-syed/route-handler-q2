import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = request.nextUrl
    const hasName = url.searchParams.has("name")
    if (hasName) {
        const name = url.searchParams.get("name");
        return NextResponse.json({
            message: `Hello ${name}`,
            status: true
        })

    }
    else {
        return NextResponse.json({
            status: false,
            message: "Please provide required search params"
        }, {
            status: 400
        }
        )
    }
}


export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body);
    return NextResponse.json({ message: "I am POST" })
}

export async function PUT(request: NextRequest) {
    const body = await request.json()
    console.log(body);
    return NextResponse.json({ message: "I am PUT" })
}

export async function DELETE(request: NextRequest) {
    const body = await request.json()
    console.log(body);
    return NextResponse.json({ message: "I am DELETE" })
}