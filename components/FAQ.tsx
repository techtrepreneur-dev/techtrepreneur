import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { QAndA } from "@/lib/data"

export function FAQ() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full text-white reboto-regular relative z-[2]"
            defaultValue="item-1"
        >
            {QAndA.map((item, index) => (
                <AccordionItem key={index} value={item.id}>
                    <AccordionTrigger className="font-semibold text-base md:text-lg">{item.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-sm md:text-base text-balance text-white/80">
                        <p>
                            {item.answer}
                        </p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
