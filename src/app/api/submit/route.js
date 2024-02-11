import { db } from "@/db/db";
import Response from "@/models/Response";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await db();

        const { id, title, user_data } = await req.json()
        // console.log(req.json());
        const  userDoc = await Response.create({
            id,
            title,
            user_data
        })

        return NextResponse.json(
            {
                userDoc
            },
            { status: 200 }
        )
    }
    catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 },
            {error: e}
        )
    }
}