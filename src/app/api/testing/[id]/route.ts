import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: any) {
    console.log(params.id);
    return NextResponse.json({
        message: "I am DYNAMIC GET",
        id: params.id
    })
}
