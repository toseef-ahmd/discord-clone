import {auth} from "@clerk/nextjs"

import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
 
const handleAuth = async () => {
    const {userId} = await auth();
    // console.log("userId: ", userId);
    if (!userId) throw new Error("Unauthorized");
    return {userId: userId};
}
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  serverImage : f({image: {maxFileSize: "4MB", maxFileCount: 1}})
  .middleware(() => handleAuth())
  .onUploadComplete(()=> {
    console.log("serverImage upload complete");
  }),

  messageFile: f(["image", "pdf", "video"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;