export const prerender = true;

export async function load() {
    const posts = import.meta.glob('$lib/post/*.svx', { eager: true });

    const allPosts = Object.entries(posts).map(([path, post]) => {
        const slug = path
            .split('/')
            .pop()
            .replace('.svx', '');

        return {
            ...post.metadata,
            path: `/blog/${slug}`
        };
    });

    // Sort by date descending
    allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return {
        posts: allPosts.slice(0, 4)
    };
}
