import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const certificates = [
    {
        name: "Full Stack .NET Core Developer",
        issuer: "M&Y Yazılım Eğitim Akademi",
        date: "2024",
        description: "250+ saatlik kapsamlı .NET eğitimi ve proje geliştirme süreci."
    },
    {
        name: "Canva Kariyer Zirvesi 2024",
        issuer: "Canva",
        date: "Nis 2024",
        description: "Kariyer gelişimi ve tasarım odaklı zirve katılımı."
    },
    {
        name: "Sorgularla Adım Adım SQL Veri Tabanı Programlama",
        issuer: "Udemy",
        date: "Eki 2023",
        description: "SQL sorgulama, veritabanı tasarımı ve yönetimi."
    },
    {
        name: "Yeni Başlayanlar İçin C# ve SQL 101 Eğitimi",
        issuer: "Udemy",
        date: "Eki 2023",
        description: "C# programlama dili ve SQL temelleri."
    },
    {
        name: "Adobe XD ile UI-UX Tasarımı",
        issuer: "BTK Akademi",
        date: "Eyl 2023",
        description: "Kullanıcı arayüzü ve deneyimi tasarımı prensipleri."
    },
    {
        name: "Asp.Net MVC ile Sıfırdan Blog Sitesi Geliştirme Kursu",
        issuer: "Udemy",
        date: "Ağu 2023",
        description: "ASP.NET MVC mimarisi ile uçtan uca proje geliştirme."
    },
    {
        name: "C# İLE OOP TEMELLERİ: ADIM ADIM KATMANLI MİMARİ",
        issuer: "Udemy",
        date: "Ağu 2023",
        description: "Nesne yönelimli programlama ve katmanlı mimari yapısı."
    },
    {
        name: "ChatGPT Sıfırdan Zirveye: Kazanç ve Verimliliğinizi Artırın",
        issuer: "Udemy",
        date: "Ağu 2023",
        description: "Yapay zeka araçlarının etkin kullanımı."
    },
    {
        name: "Sıfırdan C# ile Windows Application Öğrenin",
        issuer: "Udemy",
        date: "Ağu 2023",
        description: "Windows Form uygulamaları geliştirme."
    },
    {
        name: "B1 Seviye İngilizce",
        issuer: "BTK Akademi",
        date: "Ağu 2023",
        description: "Orta seviye İngilizce dil eğitimi."
    },
    {
        name: "Veri Madenciliği",
        issuer: "Ecodation",
        date: "Tem 2023",
        description: "Veri analizi ve madenciliği temelleri."
    },
    {
        name: "ChatGpt Eğitimi",
        issuer: "KONYA TEKNOKENT",
        date: "Haz 2023",
        description: "Yapay zeka teknolojileri eğitimi."
    },
    {
        name: "Digital Talent Summit",
        issuer: "Global AI Hub",
        date: "May 2023",
        description: "Dijital yetenekler ve teknoloji zirvesi."
    },
    {
        name: "Akbank Python Bootcamp",
        issuer: "Global AI Hub",
        date: "Mar 2023",
        description: "Python programlama ve proje geliştirme bootcamp'i."
    },
    {
        name: "C# ile Algoritma ve Programlama 101 & 201",
        issuer: "Turkcell Geleceği Yazanlar",
        date: "Şub 2023",
        description: "Algoritma mantığı ve ileri seviye C# programlama."
    },
    {
        name: "Introduction to Python",
        issuer: "Global AI Hub",
        date: "Şub 2023",
        description: "Python programlama diline giriş."
    },
    {
        name: "Uygulama Geliştirerek C# Öğrenin: A'dan Z'ye Eğitim Seti",
        issuer: "Udemy",
        date: "Şub 2023",
        description: "Pratik uygulamalarla C# öğrenimi."
    },
    {
        name: "Mülakat Teknikleri",
        issuer: "BTK Akademi",
        date: "Ara 2022",
        description: "Profesyonel iş görüşmesi teknikleri."
    },
    {
        name: "Web Sitesi Kullanılabilirliği",
        issuer: "BTK Akademi",
        date: "Ara 2022",
        description: "UX ve kullanılabilirlik standartları."
    },
    {
        name: "İşletim Sistemlerine Giriş",
        issuer: "BTK Akademi",
        date: "Ara 2022",
        description: "İşletim sistemleri çalışma mantığı."
    },
    {
        name: "Dev Fest '22",
        issuer: "Google Developers Group",
        date: "Ara 2022",
        description: "Google teknolojileri ve geliştirici zirvesi."
    },
    {
        name: "Uygulamalarla SQL Öğreniyorum",
        issuer: "BTK Akademi",
        date: "Eyl 2022",
        description: "Pratik SQL veritabanı eğitimi."
    },
    {
        name: "JAVA İle Programlamaya Giriş",
        issuer: "BTK Akademi",
        date: "Tem 2022",
        description: "Java programlama dili temelleri."
    },
    {
        name: "7. Ulusal Yönetim Bilişim Zirvesi",
        issuer: "Yönetim Bilişim Zirvesi",
        date: "Mar 2022",
        description: "Bilişim ve yönetim sistemleri zirvesi."
    },
    {
        name: "Veri Bilimi İçin Python ve Tensorflow",
        issuer: "BTK Akademi",
        date: "Kas 2021",
        description: "Veri bilimi ve makine öğrenmesi temelleri."
    },
    {
        name: "Bilgi Teknolojilerine Giriş",
        issuer: "BTK Akademi",
        date: "Eki 2020",
        description: "Temel bilişim teknolojileri eğitimi."
    }
];

export default function Certificates() {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">Sertifikalar ({certificates.length})</h3>
            <ScrollArea className="h-[600px] pr-4">
                <div className="grid gap-4 md:grid-cols-1">
                    {certificates.map((cert, index) => (
                        <Card key={index} className="hover:bg-accent/50 transition-colors border-l-4 border-l-primary/50">
                            <CardHeader className="flex flex-row items-start gap-4 pb-2">
                                <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <CardTitle className="text-base font-semibold leading-tight">{cert.name}</CardTitle>
                                    <span className="text-sm text-muted-foreground font-medium">{cert.issuer}</span>
                                    <span className="text-xs text-muted-foreground/80">{cert.date}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="pl-[4.5rem] pt-0 pb-4">
                                <p className="text-sm text-muted-foreground">{cert.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
