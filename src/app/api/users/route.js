import { NextResponse } from "next/server"


export async function GET() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return NextResponse.json(data);
}

export async function POST(req) {
    const {name, lastaname} = await req.json();
    console.log(name, lastaname);
    return NextResponse.json({ message: "creando datos" })
}

export function PUT() {
    //query database
    // extract params
    // communicate with other services

    return NextResponse.json({ message: "actualizando datos" })
}

export function DELETE() {
    //query database
    // extract params
    // communicate with other services

    return NextResponse.json({ message: "eliminando datos" })
}