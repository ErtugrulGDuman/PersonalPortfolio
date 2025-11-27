"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

// Mock data for blog preview
const recentPosts = [
    {
        slug: "aspnet-core-middleware",
        title: "ASP.NET Core Middleware Yapısı ve Kullanımı",
        description: "ASP.NET Core request pipeline'ını anlamak ve custom middleware yazmak üzerine detaylı bir rehber.",
        date: "2024-03-15",
        readTime: "5 dk",
        tags: [".NET Core", "Middleware"],
    },
    {
        slug: "cqrs-pattern-mediatr",
        title: "CQRS Pattern ve MediatR Kütüphanesi",
        description: "Command Query Responsibility Segregation deseninin MediatR ile implementasyonu ve avantajları.",
        date: "2024-02-28",
        readTime: "8 dk",
        tags: ["Architecture", "CQRS"],
    },
    {
        slug: "docker-mssql-setup",
        title: "Docker ile SQL Server Kurulumu ve Yönetimi",
        description: "Geliştirme ortamında Docker container üzerinde SQL Server çalıştırmak ve yönetmek.",
        date: "2024-02-10",
        readTime: "4 dk",
        tags: ["Docker", "SQL Server"],
    },
];

export default function BlogPreview() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold tracking-tight">Son Yazılarım</h2>
                        <p className="text-muted-foreground">Yazılım geliştirme üzerine aldığım notlar ve tecrübelerim.</p>
                    </div>
                    <Button asChild variant="ghost" className="gap-2">
                        <Link href="/blog">
                            Tüm Yazılar <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {recentPosts.map((post) => (
                        <Card key={post.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex gap-2 mb-3">
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="outline" className="text-xs font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {post.readTime}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3">
                                    {post.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="mt-auto pt-0">
                                <Button asChild variant="link" className="px-0 text-primary gap-1">
                                    <Link href={`/blog/${post.slug}`}>
                                        Devamını Oku <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
