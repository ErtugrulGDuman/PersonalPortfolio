"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileCode, Database, Server, Layers } from "lucide-react";
import Link from "next/link";
import EGDLogo3D from "@/components/ui/EGDLogo3D";

export default function HeroSection() {
    return (
        <section className="min-h-[90vh] flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 text-accent-foreground w-fit text-sm font-medium border border-accent">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Open to Work
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Merhaba, ben <br />
                        <span className="text-primary">Ertuğrul Gökay Duman</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                        Junior .NET & Full Stack Developer
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                        ASP.NET Core, Microservices ve modern web teknolojileri ile ölçeklenebilir, performanslı ve kullanıcı dostu uygulamalar geliştiriyorum.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/projects">
                                Projelerim <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="gap-2">
                            <Link href="/resume">
                                CV'mi Gör <Download className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-96 h-96">
                        {/* Abstract floating icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-0 right-10 p-4 bg-card rounded-2xl shadow-xl border border-border/50"
                        >
                            <FileCode className="h-8 w-8 text-blue-500" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-0 p-4 bg-card rounded-2xl shadow-xl border border-border/50"
                        >
                            <Database className="h-8 w-8 text-orange-500" />
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-1/2 -right-4 p-4 bg-card rounded-2xl shadow-xl border border-border/50"
                        >
                            <Server className="h-8 w-8 text-purple-500" />
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
                            className="absolute top-20 -left-4 p-4 bg-card rounded-2xl shadow-xl border border-border/50"
                        >
                            <Layers className="h-8 w-8 text-green-500" />
                        </motion.div>

                        {/* Main Avatar Placeholder or Illustration */}
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 backdrop-blur-3xl flex items-center justify-center border border-white/10 overflow-hidden relative">
                            {/* 3D Background */}
                            <div className="absolute inset-0 w-full h-full">
                                <EGDLogo3D />
                            </div>

                            {/* Static Text Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                <span className="text-6xl font-bold text-white drop-shadow-lg tracking-wider">EGD</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
