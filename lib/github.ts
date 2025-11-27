export interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
    homepage: string | null;
    updated_at: string;
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
    try {
        // Revalidate every hour
        const res = await fetch('https://api.github.com/users/ErtugrulGDuman/repos?sort=updated&per_page=100', {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch repos');
        }

        const repos: GithubRepo[] = await res.json();

        // Filter out forks if desired, or keep them. For now keeping everything.
        // Sorting by stars then updated date could be nice, but API sort=updated is fine.
        return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } catch (error) {
        console.error("Error fetching repos:", error);
        return [];
    }
}
