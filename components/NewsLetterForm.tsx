"use client"
import { createNewsletter } from "@/lib/actions/newsletter";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "sonner";

export default function NewsLetterForm() {
    const [state, formAction, isPending] = useActionState(createNewsletter, null)

    //   const router = useRouter()

    useEffect(() => {
        if (state !== null && state?.fieldErrors === undefined) {

            if (state?.success) {
                toast.success("Thank you for subscribing")
            } else {
                toast.error(state?.error)
            }
        }
    }, [state]);

    return (
        <div>
            <form action={formAction} className="mt-2 max-w-[400px]">
                <input type="email" name="email" placeholder="Email" className="w-full border-b border-b-white/50 p-2 " required />
                {state?.fieldErrors?.email && <p className="text-xs mt-2 md:max-w-[250px] text-red-400">{state.fieldErrors.email}</p>}

                <button className="flex gap-1 justify-center items-center w-full mt-2 p-3 rounded-md bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer text-black/80 text-center font-semibold">Send {isPending ? <Loader2 className="animate-spin" /> : <FaPaperPlane />} </button>
            </form>
        </div>
    )
}
