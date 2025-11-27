import { getGithubRepos, GithubRepo } from "@/lib/github";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork, Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ProjectFilter from "@/components/sections/ProjectFilter"; // Client component for filtering

export const metadata: Metadata = {
    title: "Projelerim | Ertuğrul Gökay Duman",
    description: "Geliştirdiğim açık kaynak projeler ve uygulamalar.",
};

export default async function ProjectsPage() {
    const repos = await getGithubRepos();

    return (
        <div className="container mx-auto px-4 py-24 space-y-12">
            <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">Projelerim</h1>
                <p className="text-muted-foreground text-lg">
                    GitHub üzerindeki açık kaynak projelerim ve geliştirdiğim uygulamalar.
                </p>
            </div>

            <ProjectFilter repos={repos} />
        </div>
    );
}
