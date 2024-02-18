import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import {z} from 'zod'

const testison=z.object({
    title: z.string().min(1).max(255),
    body: z.string().min(1)
})
export async function POST(request: NextRequest){
    const body =await request.json();
    const validation=testison.safeParse(body)
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }
    const newPost = await prisma.post.create({
        data:{title:body.title, body:body.body}
    })

    return NextResponse.json(newPost,{status:201 })
}

