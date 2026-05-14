'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

export default function FAQSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -350px 0px' })
    const shouldReduceMotion = useReducedMotion()

    const faqItems = [
        {
            id: 'item-1',
            question: 'What is localized cryotherapy?',
            answer: 'Localized cryotherapy delivers focused cold therapy to specific areas of the body, providing targeted relief for pain, inflammation, and muscle recovery. Unlike whole-body cryotherapy, it treats precise areas for more concentrated results.',
        },
        {
            id: 'item-2',
            question: 'How does Atmos equipment differ from other cryotherapy systems?',
            answer: 'Atmos equipment is designed for precision, safety, and ease of use. Our systems feature advanced temperature control, ergonomic designs for practitioner comfort, and comprehensive training programs to ensure optimal treatment outcomes.',
        },
        {
            id: 'item-3',
            question: 'What training and support do you provide?',
            answer: 'We provide comprehensive onboarding training, ongoing educational resources, and dedicated customer support. Our team helps you master equipment operation, treatment protocols, and best practices for integrating cryotherapy into your practice.',
        },
        {
            id: 'item-4',
            question: 'Do you offer financing options?',
            answer: 'Yes, we offer flexible financing solutions to help you acquire Atmos equipment. Contact our sales team to discuss payment plans, leasing options, and packages that fit your business needs and budget.',
        },
        {
            id: 'item-5',
            question: 'What is your warranty and maintenance policy?',
            answer: 'All Atmos equipment comes with a comprehensive warranty covering parts and labor. We also offer preventive maintenance plans and priority service options to keep your equipment running smoothly and minimize downtime.',
        },
    ]

    return (
        <section
            ref={sectionRef}
            id="faq"
            className="w-full bg-[var(--atmos-page)] px-6 py-24 sm:px-8 md:py-32">
            <div className="mx-auto max-w-[1180px]">
                <div className="mb-10 max-w-3xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-medium leading-[1.08] text-[var(--atmos-ink)] md:text-5xl"
                        initial={shouldReduceMotion ? false : { opacity: 0, transform: 'translateY(16px)' }}
                        animate={isInView ? { opacity: 1, transform: 'translateY(0px)' } : undefined}
                        transition={{ duration: 0.5, ease: EASE_OUT }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="mt-5 text-lg leading-8 text-[var(--atmos-secondary)] md:text-xl"
                        initial={shouldReduceMotion ? false : { opacity: 0, transform: 'translateY(12px)' }}
                        animate={isInView ? { opacity: 1, transform: 'translateY(0px)' } : undefined}
                        transition={{ duration: 0.5, delay: 0.12, ease: EASE_OUT }}
                    >
                        Find answers to common questions about our cryotherapy equipment, training programs, and support services.
                    </motion.p>
                </div>

                <motion.div
                    className="mx-auto mt-12 max-w-3xl"
                    initial={shouldReduceMotion ? false : { opacity: 0, transform: 'translateY(24px)' }}
                    animate={isInView ? { opacity: 1, transform: 'translateY(0px)' } : undefined}
                    transition={{ duration: 0.55, delay: 0.18, ease: EASE_OUT }}
                >
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] px-8 py-3 shadow-none">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className={index === faqItems.length - 1 ? '!border-0' : 'border-dashed'}>
                                <AccordionTrigger className="cursor-pointer text-base font-medium text-[var(--atmos-ink)] hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base text-[var(--atmos-secondary)]">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="mt-6 px-8 text-center text-[var(--atmos-secondary)]">
                        Can&apos;t find what you&apos;re looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="font-medium text-[var(--atmos-blue)] hover:underline">
                            support team
                        </Link>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
