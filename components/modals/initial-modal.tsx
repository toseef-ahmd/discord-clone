'use client';

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogDescription
} 
from "@/components/ui/dialog"
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormField,
    FormMessage
}
from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    name: z.string().min(1, 
        { message: "Please enter a server name." }),
    imageUrl: z.string().min(1, 
        { message: "Please enter a valid image URL." }),
});

export const InitialModal = () => { 
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            imageUrl: "",
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (data: z.infer<typeof schema>) => {
        console.log(data);
    }
    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="p-5">
                    <DialogTitle className="text-2xl font-bold text-center">
                        Customize Your Server
                    </DialogTitle>
                    <DialogDescription>
                        Give your server a name and upload an image to make it your own.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col p-5 space-y-4"
                    >
                        
                    </form>
                </Form>
                    <DialogFooter className="flex justify-end">
                        <Button type="submit" className="ml-4" loading={isLoading}>
                            Create Server
                        </Button>
                    </DialogFooter>
            </DialogContent>
            <DialogFooter>
                <button>Continue</button>
            </DialogFooter>
        </Dialog>
    );
}