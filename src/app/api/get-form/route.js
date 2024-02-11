import { db } from "@/db/db";
import Form from "@/models/Form";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await db();

        const { id } = await req.json()
        // console.log(req.json());
        const formDoc = await Form.find({
            id: id
        })

        return NextResponse.json(
            {
                formDoc: formDoc
            },
            { status: 200 }
        )
    }
    catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 },
            { error: e }
        )
    }
}