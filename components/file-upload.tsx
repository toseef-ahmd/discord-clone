'use client';

import React from "react";
import { X } from "lucide-react";
import Image  from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps { 
    endpoint: "messageFile" | "serverImage";
    value: string;
    onChange: (url?: string) => void;
}
export const FileUpload : React.FC<FileUploadProps> = ({endpoint, value, onChange} : FileUploadProps) => {
   
   const fileType = value?.split(".").pop();
//    console.log("fileType: ",value)
   if(fileType && fileType!== "pdf") {
         return (
              <div className="relative w-20 h-20">
                <Image 
                    fill
                    sizes="(min-width: 600px) 50vw, 100vw"
                    src={value}
                    alt="Server Image"
                    className="rounded-full"
                />
                <button 
                    onClick={() => onChange("")}
                    className="bg-rose-500 text-white rounded-full absolute top-0 right-0 w-6 h-6 flex items-center justify-center shadow-sm"
                    >
                     <X />
                </button>
              </div>
         )
   }
    return ( 
        <div className="flex">
            <UploadDropzone 
                endpoint= {endpoint}
                onClientUploadComplete= {(res) => {
                    // console.log("res: ",res)
                    onChange(res?.[0].url)
                }}
                onUploadError={(err : Error) => {
                    console.error(err)
                }
            }
            />
        </div>
    );
}
 
// export const FileUpload;