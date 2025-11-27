"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Need to create Badge
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Mock data for featured projects based on user request
const featuredProjects = [
    {
        name: "CarBook",
        description: "Araç Kiralama Platformu. ASP.NET Core 8.0, Onion Architecture, CQRS & MediatR, JWT bazlı kimlik doğrulama ve SignalR ile gerçek zamanlı dashboard.",
        tags: ["ASP.NET Core 8", "Onion Arch", "CQRS", "SignalR"],
        githubUrl: "https://github.com/ErtugrulGDuman/CarBook",
        demoUrl: null,
        stars: 12,
        forks: 4,
    },
    {
        name: "Traversal",
        description: "Tatil Rezervasyon Sitesi. ASP.NET Core 6, N-Tier Architecture. Admin, Üye, Vitrin panelli, SignalR bildirimli.",
        tags: ["ASP.NET Core 6", "N-Tier", "SignalR", "MSSQL"],
        githubUrl: "https://github.com/ErtugrulGDuman/Traversal",
        demoUrl: null,
        stars: 8,
        forks: 2,
    },
    {
        name: "Taste Food It",
        description: "Restoran Otomasyon Sitesi. Modern arayüz ve yönetim paneli ile restoran süreçlerinin dijitalleşmesi.",
        tags: ["ASP.NET Core", "Entity Framework", "Bootstrap"],
        githubUrl: "https://github.com/ErtugrulGDuman/TasteFoodIt",
        demoUrl: null,
        stars: 5,
        forks: 1,
    },
];

export default function FeaturedProjects() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4 mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Öne Çıkan Projeler</h2>
                    <p className="text-muted-foreground">GitHub üzerindeki seçilmiş açık kaynak projelerim.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl">{project.name}</CardTitle>
                                        <div className="flex gap-2 text-muted-foreground text-xs">
                                            <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {project.stars}</span>
                                            <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {project.forks}</span>
                                        </div>
                                    </div>
                                    <CardDescription className="line-clamp-3 mt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2 pt-0">
                                    <Button asChild variant="outline" size="sm" className="w-full gap-2">
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github className="h-4 w-4" /> Kodları Gör
                                        </Link>
                                    </Button>
                                    {project.demoUrl && (
                                        <Button asChild size="sm" className="w-full gap-2">
                                            <Link href={project.demoUrl} target="_blank">
                                                <ExternalLink className="h-4 w-4" /> Canlı Demo
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg">
                        <Link href="/projects">Tüm Projeleri Gör</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
