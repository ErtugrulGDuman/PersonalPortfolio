"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto flex flex-col gap-6 items-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Birlikte çalışalım mı?
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Projelerinizde yer almamı isterseniz veya sadece tanışmak isterseniz, benimle iletişime geçmekten çekinmeyin.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <Button asChild size="lg" variant="secondary" className="gap-2 text-primary font-semibold">
                            <Link href="/contact">
                                İletişime Geç <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground">
                            <Link href="mailto:ertugrulgokayduman@gmail.com">
                                <Mail className="h-4 w-4" /> E-posta Gönder
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
