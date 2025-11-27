"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center flex flex-col gap-8"
                >
                    <h2 className="text-3xl font-bold tracking-tight">Hakkımda</h2>

                    <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
                        <p>
                            ASP.NET Core ile N-Tier ve Onion Architecture tabanlı web uygulamaları geliştiren,
                            SAP ERP & CRM süreçlerinde pratik deneyime sahip bir yazılım geliştiricisiyim.
                        </p>
                        <p>
                            Selçuk Üniversitesi YBS Topluluğu Başkanlığı ve GDG Konya gibi topluluklarda aktif rol alarak,
                            hem teknik hem de sosyal becerilerimi sürekli geliştirmeye odaklanıyorum.
                        </p>
                    </div>

                    <div>
                        <Button asChild variant="secondary" className="gap-2">
                            <Link href="/about">
                                Daha Fazla <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
