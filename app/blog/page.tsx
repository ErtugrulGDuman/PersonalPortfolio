import { getBlogPosts } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Ertuğrul Gökay Duman",
    description: "Yazılım geliştirme, .NET ekosistemi ve teknoloji üzerine yazılarım.",
};

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="container mx-auto px-4 py-24 space-y-12">
            <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
                <p className="text-muted-foreground text-lg">
                    Yazılım dünyasındaki deneyimlerimi ve öğrendiklerimi paylaştığım alan.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Card key={post.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex gap-2 mb-3 flex-wrap">
                                {post.tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <CardTitle className="text-xl hover:text-primary transition-colors">
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
                            <CardDescription className="line-clamp-3 text-sm">
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
    );
}
