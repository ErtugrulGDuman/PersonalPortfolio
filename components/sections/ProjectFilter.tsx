"use client";

import { useState, useMemo } from "react";
import { GithubRepo } from "@/lib/github";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Star, GitFork, Search } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectFilterProps {
    repos: GithubRepo[];
}

export default function ProjectFilter({ repos }: ProjectFilterProps) {
    const [search, setSearch] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Extract all unique languages/topics for filter
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        repos.forEach(repo => {
            if (repo.language) tags.add(repo.language);
            repo.topics?.forEach(topic => tags.add(topic));
        });
        return Array.from(tags).sort();
    }, [repos]);

    const filteredRepos = useMemo(() => {
        return repos.filter(repo => {
            const matchesSearch = repo.name.toLowerCase().includes(search.toLowerCase()) ||
                (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()));
            const matchesTag = selectedTag
                ? (repo.language === selectedTag || (repo.topics && repo.topics.includes(selectedTag)))
                : true;
            return matchesSearch && matchesTag;
        });
    }, [repos, search, selectedTag]);

    return (
        <div className="space-y-8">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-xl border shadow-sm">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Proje ara..."
                        className="pl-10"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    <Button
                        variant={selectedTag === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTag(null)}
                    >
                        Tümü
                    </Button>
                    {allTags.slice(0, 5).map(tag => (
                        <Button
                            key={tag}
                            variant={selectedTag === tag ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        >
                            {tag}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredRepos.map((repo) => (
                        <motion.div
                            key={repo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-lg truncate" title={repo.name}>{repo.name}</CardTitle>
                                        <div className="flex gap-2 text-muted-foreground text-xs shrink-0">
                                            <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {repo.stargazers_count}</span>
                                            <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {repo.forks_count}</span>
                                        </div>
                                    </div>
                                    <CardDescription className="line-clamp-3 mt-2 min-h-[3rem]">
                                        {repo.description || "Açıklama bulunmuyor."}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {repo.language && (
                                            <Badge variant="secondary" className="text-xs font-normal">
                                                {repo.language}
                                            </Badge>
                                        )}
                                        {repo.topics?.slice(0, 3).map(topic => (
                                            <Badge key={topic} variant="outline" className="text-xs font-normal">
                                                {topic}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2 pt-0">
                                    <Button asChild variant="outline" size="sm" className="w-full gap-2">
                                        <Link href={repo.html_url} target="_blank">
                                            <Github className="h-4 w-4" /> GitHub
                                        </Link>
                                    </Button>
                                    {repo.homepage && (
                                        <Button asChild size="sm" className="w-full gap-2">
                                            <Link href={repo.homepage} target="_blank">
                                                <ExternalLink className="h-4 w-4" /> Demo
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredRepos.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    Aradığınız kriterlere uygun proje bulunamadı.
                </div>
            )}
        </div>
    );
}
