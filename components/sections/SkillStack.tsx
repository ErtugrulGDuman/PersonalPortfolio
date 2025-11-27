"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Backend & Web",
        icon: Server,
        skills: ["ASP.NET Core", "MVC", "Web API", "RESTful API", "Microservices", "SignalR", "Identity", "JWT"],
    },
    {
        title: "Database",
        icon: Database,
        skills: ["SQL Server", "T-SQL", "Entity Framework Core", "LINQ", "ADO.NET", "NoSQL"],
    },
    {
        title: "Frontend",
        icon: Layout,
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
        title: "DevOps & Tools",
        icon: Terminal,
        skills: ["Git", "GitHub", "Docker", "CI/CD", "Swagger", "Postman", "Azure"],
    },
    {
        title: "Other",
        icon: Wrench,
        skills: ["SAP ERP & CRM", "Excel VBA", "Clean Code", "SOLID", "Design Patterns", "N-Tier Arch"],
    },
];

export default function SkillStack() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4 mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Teknoloji Stack'im</h2>
                    <p className="text-muted-foreground">Kullandığım teknolojiler ve uzmanlık alanlarım.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
