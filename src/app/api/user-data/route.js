import { db } from "@/db/db";
import UserData from "@/models/UserData";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await db();

        const { name, mobile, address, dob, bloodgrp, email, gender } = await req.json()
        // console.log(req.json());
        const  userDoc = await UserData.create({
            name, mobile, address, dob, bloodgrp, email, gender
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