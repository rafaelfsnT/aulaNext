import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    
    console.log('Olá galerinha de S.I')
    return NextResponse.json({message: "Hello World backend"})
}