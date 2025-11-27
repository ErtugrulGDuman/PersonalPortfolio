import Timeline from "@/components/sections/Timeline";
import SkillMatrix from "@/components/sections/SkillMatrix";
import Certificates from "@/components/sections/Certificates";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımda | Ertuğrul Gökay Duman",
    description: "Ertuğrul Gökay Duman kimdir? Eğitim, deneyim ve yeteneklerim.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 space-y-20">
            {/* Intro Section */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold tracking-tight">Hakkımda</h1>
                <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Merhaba! Ben Ertuğrul Gökay Duman. Yönetim Bilişim Sistemleri (Selçuk Üniversitesi) ve Bilgisayar Programcılığı (Anadolu Üniversitesi) mezunuyum.
                        Yazılım geliştirme tutkum lise yıllarında Arduino ile başladı ve üniversite eğitimim boyunca .NET ekosistemine odaklanarak profesyonel bir kariyere dönüştü.
                    </p>
                    <p>
                        M&Y Yazılım Eğitim Akademi'de aldığım 250+ saatlik yoğun Full Stack .NET Core eğitimi ile teorik bilgilerimi 16 farklı gerçek hayat projesiyle pekiştirdim.
                        Şu anda Özen Grup bünyesinde Bilgi İşlem Personeli olarak SAP ERP & CRM süreçleri, IT altyapısı ve otomasyon projeleri üzerinde çalışıyorum.
                    </p>
                    <p>
                        Topluluk tarafında da oldukça aktifim. Selçuk Üniversitesi YBS Topluluğu Başkanlığı dönemimde 50'den fazla etkinlik düzenleyerek sektörü öğrencilerle buluşturdum.
                        Ayrıca GDG Konya ve Huawei Student Developers gibi global topluluklarda da görev aldım.
                    </p>
                    <p>
                        Hedefim, .NET teknolojilerinde derinleşerek mikroservis mimarileri, bulut çözümleri ve kurumsal ölçekli uygulamalar geliştiren bir Software Architect olmak.
                    </p>
                </div>
            </section>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-20">
                    <Timeline />
                    <SkillMatrix />
                </div>
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        <Certificates />
                    </div>
                </div>
            </div>
        </div>
    );
}
