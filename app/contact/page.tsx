"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">İletişime Geç</h1>
                        <p className="text-muted-foreground text-lg">
                            Projeleriniz, iş teklifleriniz veya sadece tanışmak için bana ulaşabilirsiniz.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">E-posta</h3>
                                    <a href="mailto:ertugrulgokayduman@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        ertugrulgokayduman@gmail.com
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Konum</h3>
                                    <p className="text-muted-foreground">Ankara, Türkiye</p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex gap-4">
                            <Button asChild variant="outline" size="lg" className="flex-1 gap-2">
                                <Link href="https://github.com/ErtugrulGDuman" target="_blank">
                                    <Github className="h-5 w-5" /> GitHub
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="flex-1 gap-2">
                                <Link href="https://www.linkedin.com/in/ertugrul-gokay-duman-egdx86" target="_blank">
                                    <Linkedin className="h-5 w-5" /> LinkedIn
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Mesaj Gönder</CardTitle>
                        <CardDescription>
                            Aşağıdaki formu doldurarak bana doğrudan mesaj gönderebilirsiniz.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                    <Send className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold">Mesajınız Alındı!</h3>
                                <p className="text-muted-foreground">
                                    En kısa sürede size dönüş yapacağım. Teşekkürler.
                                </p>
                                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                    Yeni Mesaj Gönder
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Ad Soyad</Label>
                                        <Input id="name" placeholder="Adınız" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">E-posta</Label>
                                        <Input id="email" type="email" placeholder="ornek@email.com" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Konu</Label>
                                    <Input id="subject" placeholder="Mesajınızın konusu" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Mesaj</Label>
                                    <Textarea id="message" placeholder="Mesajınız..." className="min-h-[150px]" required />
                                </div>
                                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                                    {isSubmitting ? "Gönderiliyor..." : (
                                        <>
                                            Gönder <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
