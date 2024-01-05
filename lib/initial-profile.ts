import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";


export const initialProfile = async () => {
    const user = await currentUser();
    if (!user) return redirectToSignIn();

    return await db.profile.findUnique({ where: { userId: user.id } }) 
        ?? await db.profile.create({
            data: {
                userId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: `${user.firstName} ${user.lastName}`,
                imageUrl: user.imageUrl
            }
        });
};
