"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineData = [
    {
        year: "2024 - Günümüz",
        title: "Yazılım Uzmanı",
        organization: "Özen Grup",
        description: "SAP ERP & CRM süreçleri, IT altyapısı yönetimi ve otomasyon çözümleri geliştirme.",
        type: "work"
    },
    {
        year: "2023 - 2024",
        title: "Full Stack .NET Core Bootcamp",
        organization: "M&Y Yazılım Eğitim Akademi",
        description: "250+ saatlik yoğun eğitim ile 16 gerçek hayat projesi geliştirme. N-Tier, Onion Architecture, Microservices.",
        type: "education"
    },
    {
        year: "2023 - 2024",
        title: "GDG Konya Team Member",
        organization: "Google Developer Groups",
        description: "Teknoloji etkinlikleri organizasyonu ve topluluk yönetimi.",
        type: "community"
    },
    {
        year: "2023",
        title: "Asistan Öğrenci",
        organization: "Selçuk Üniversitesi",
        description: "Üniversite bünyesinde IT desteği ve öğrenci asistanlığı.",
        type: "work"
    },
    {
        year: "2020 - 2024",
        title: "Yönetim Bilişim Sistemleri (Lisans)",
        organization: "Selçuk Üniversitesi",
        description: "3.22 GPA. YBS Topluluğu Başkanlığı (50+ etkinlik).",
        type: "education"
    },
    {
        year: "2021 - 2023",
        title: "Bilgisayar Programcılığı (Ön Lisans)",
        organization: "Anadolu Üniversitesi",
        description: "Temel programlama ve veritabanı eğitimi.",
        type: "education"
    }
];

export default function Timeline() {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight">Deneyim & Eğitim</h3>
            <div className="relative border-l border-border ml-3 space-y-8 pb-8">
                {timelineData.map((item, index) => (
                    <div key={index} className="ml-8 relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                            <div className="text-primary font-medium text-sm">{item.organization}</div>
                            <p className="text-muted-foreground text-sm max-w-2xl">
                                {item.description}
                            </p>
                            <Badge variant="outline" className="w-fit mt-1 text-xs">
                                {item.type === "work" ? "İş Deneyimi" : item.type === "education" ? "Eğitim" : "Topluluk"}
                            </Badge>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
