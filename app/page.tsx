import HeroSection from "@/components/sections/HeroSection";
import AboutTeaser from "@/components/sections/AboutTeaser";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import BlogPreview from "@/components/sections/BlogPreview";
import SkillStack from "@/components/sections/SkillStack";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            <HeroSection />
            <AboutTeaser />
            <FeaturedProjects />
            <SkillStack />
            <BlogPreview />
            <ContactCTA />
        </div>
    );
}
