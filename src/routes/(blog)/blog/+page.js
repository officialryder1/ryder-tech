export async function load() {
    const posts = import.meta.glob('../../../post/*.svx', {eager: true})

    return {
        posts: Object.entries(posts).map(([path, post]) => ({
            ...post.metadata,
            path: path.replace('./', '/blog/').replace('.svx', '')
        }))
    }
};