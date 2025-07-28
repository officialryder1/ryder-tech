export const load = async ({params}) => {
    const modules = import.meta.glob('$lib/post/*.svx');
    if (!params.slug) {
        return {
            status: 404,
            error: new Error('Post not found')
        };
    }

	for (const [path, resolver] of Object.entries(modules)) {
		const slug = path.split('/').pop().replace('.svx', '');
        console.log(`Checking slug: ${slug} against ${params.slug}, ${path}`);
		if (slug === params.slug) {
			const post = await resolver();
            
			return {
				post
			};
		}
    }
}