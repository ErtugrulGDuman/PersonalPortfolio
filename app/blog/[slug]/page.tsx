import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc"; // Using RSC version for simplicity in App Router
import { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getBlogPost(params.slug);
    if (!post) return { title: "Not Found" };
    return {
        title: `${post.title} | Ertuğrul Gökay Duman`,
        description: post.description,
    };
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    const post = getBlogPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-24 max-w-3xl">
            <Button asChild variant="ghost" className="mb-8 pl-0 gap-2 hover:bg-transparent hover:text-primary">
                <Link href="/blog">
                    <ArrowLeft className="h-4 w-4" /> Blog'a Dön
                </Link>
            </Button>

            <article className="prose dark:prose-invert prose-lg max-w-none">
                <div className="mb-8 not-prose">
                    <div className="flex gap-2 mb-4">
                        {post.tags.map(tag => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">{post.title}</h1>
                    <div className="flex items-center gap-6 text-muted-foreground text-sm">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" /> {post.readTime}
                        </span>
                        {post.mediumUrl && (
                            <Button asChild variant="outline" size="sm" className="gap-2 ml-auto">
                                <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                                    Read on Medium <ExternalLink className="h-3 w-3" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="mt-8 border-t pt-8">
                    {/* Note: In a real app, you might need a more complex MDX setup with components */}
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </div>
    );
}
