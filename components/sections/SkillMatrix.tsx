"use client";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Need to create Table component
import { CheckCircle2 } from "lucide-react";

// Since I can't create the Table component from shadcn easily without multiple files, I'll use a simple grid layout for now or create a basic Table component.
// I'll create a basic Table component in components/ui/table.tsx first.

const skills = [
    { category: "Backend", name: "ASP.NET Core", level: "Advanced", description: "N-Tier / Onion Architecture, Middleware, Filter yapısı" },
    { category: "Backend", name: "Entity Framework Core", level: "Advanced", description: "Code First, DB First, LINQ, Performance Tuning" },
    { category: "Architecture", name: "CQRS & MediatR", level: "Intermediate", description: "Command/Query separation, Pipeline behaviors" },
    { category: "Real-time", name: "SignalR", level: "Intermediate", description: "WebSocket iletişimi, Hub yönetimi, Client entegrasyonu" },
    { category: "Database", name: "SQL Server", level: "Advanced", description: "T-SQL, Stored Procedures, Triggers, Indexing" },
    { category: "DevOps", name: "Docker", level: "Intermediate", description: "Containerization, Docker Compose, Multi-stage builds" },
    { category: "Frontend", name: "React & Next.js", level: "Intermediate", description: "Component yapısı, Hooks, SSR/CSR, Tailwind CSS" },
];

export default function SkillMatrix() {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">Yetenek Matrisi</h3>
            <div className="rounded-md border">
                <div className="w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Kategori</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Teknoloji</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Seviye</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Detay</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {skills.map((skill) => (
                                <tr key={skill.name} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle font-medium">{skill.category}</td>
                                    <td className="p-4 align-middle">{skill.name}</td>
                                    <td className="p-4 align-middle">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                            {skill.level}
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle text-muted-foreground">{skill.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
