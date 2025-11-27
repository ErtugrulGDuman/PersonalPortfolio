import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import Timeline from "@/components/sections/Timeline";
import SkillMatrix from "@/components/sections/SkillMatrix";
import Certificates from "@/components/sections/Certificates";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Özgeçmiş | Ertuğrul Gökay Duman",
    description: "Profesyonel iş deneyimi, eğitim ve yeteneklerim.",
};

export default function ResumePage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b pb-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Ertuğrul Gökay Duman</h1>
                    <p className="text-xl text-muted-foreground">Junior .NET & Full Stack Developer</p>
                </div>
                <Button size="lg" className="gap-2">
                    <Download className="h-4 w-4" /> PDF İndir
                </Button>
            </div>

            <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    1+ yıl .NET deneyimi, ASP.NET Core, EF Core, SQL Server, Microservices, Docker ve SignalR konularında yetkinlik.
                    SAP ERP & CRM süreçlerinde pratik deneyim ve kurumsal otomasyon çözümleri geliştirme tecrübesi.
                </p>
            </div>

            <Timeline />

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-12">
                    <SkillMatrix />
                </div>
                <div className="space-y-12">
                    <Certificates />
                </div>
            </div>
        </div>
    );
}
