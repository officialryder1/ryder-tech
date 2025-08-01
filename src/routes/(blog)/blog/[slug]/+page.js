import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const modules = import.meta.glob('$lib/post/*.svx');
    if (!modules) {
        error(404, 'No modules found');
    }

	for (const [path, resolver] of Object.entries(modules)) {
		const slug = path.split('/').pop().replace('.svx', '');
        
		if (slug === params.slug) {
			const post = await resolver();
            
			return {
				post,
				slug
			};
		}
    }
}