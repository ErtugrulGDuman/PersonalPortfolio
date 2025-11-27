import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm py-8 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Ertuğrul Gökay Duman. Tüm hakları saklıdır.
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/ErtugrulGDuman" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ertugrul-gokay-duman-egdx86" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://medium.com/@ertugrulgokayduman" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <FileText className="h-5 w-5" />
                        <span className="sr-only">Medium</span>
                    </Link>
                </div>

                <div className="text-xs text-muted-foreground/50">
                    Built with Next.js & TypeScript
                </div>
            </div>
        </footer>
    );
}
