import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail, FileCode } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Linkler | Ertuğrul Gökay Duman",
    description: "Sosyal medya hesaplarım ve önemli bağlantılar.",
};

const links = [
    {
        name: "GitHub",
        url: "https://github.com/ErtugrulGDuman",
        icon: Github,
        color: "bg-gray-800 hover:bg-gray-700",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ertugrul-gokay-duman-egdx86",
        icon: Linkedin,
        color: "bg-blue-600 hover:bg-blue-500",
    },
    {
        name: "Medium Blog",
        url: "https://medium.com/@ertugrulgokayduman",
        icon: FileText,
        color: "bg-black hover:bg-gray-900",
    },
    {
        name: "CV İndir",
        url: "/resume",
        icon: FileCode,
        color: "bg-green-600 hover:bg-green-500",
    },
    {
        name: "E-posta Gönder",
        url: "mailto:ertugrulgokayduman@gmail.com",
        icon: Mail,
        color: "bg-red-600 hover:bg-red-500",
    },
];

export default function LinksPage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-[80vh] flex flex-col items-center justify-center max-w-md space-y-8">
            <div className="text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto overflow-hidden border-4 border-background shadow-xl">
                    {/* Avatar Placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-2xl">
                        EGD
                    </div>
                </div>
                <h1 className="text-2xl font-bold">Ertuğrul Gökay Duman</h1>
                <p className="text-muted-foreground">Junior .NET & Full Stack Developer</p>
            </div>

            <div className="w-full space-y-4">
                {links.map((link) => (
                    <Button
                        key={link.name}
                        asChild
                        size="lg"
                        className={`w-full h-14 text-lg justify-start gap-4 text-white shadow-lg transition-all hover:scale-105 ${link.color}`}
                    >
                        <Link href={link.url} target={link.url.startsWith("http") ? "_blank" : "_self"}>
                            <link.icon className="h-6 w-6" />
                            {link.name}
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
    );
}
