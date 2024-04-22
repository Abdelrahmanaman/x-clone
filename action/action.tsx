import { PrismaClient } from "@prisma/client"

export const addComment = (formData: FormData) => {
    const prisma = new PrismaClient();
    await  prisma.comment.create({ data: { text: formData.get("text"), post: { connect: { id: Number(formData.get("postId"))} }}})
    await prisma.reply.create({data: {content: formData.get("comment")}})
}