import * as path from 'path';
import {GatsbyNode} from 'gatsby';

type TypePost = {
	id: string;
	title: string;
	slug: string;
	content: string;
};

type TypeData = {
	blog: {
		posts: TypePost[];
	};
};

export const createPages: GatsbyNode['createPages'] = async ({graphql, actions: {createPage}}) => {
	const {data} = await graphql<TypeData>(`
		query PostsQuery {
			blog {
				posts {
					title
					content {
						html
					}
					slug
				}
			}
		}
	`);

	// Create Post Pages
	const postTemplate = path.resolve('./src/templates/PostPage.tsx');
	const createPostPromise = data?.blog.posts.map((post: TypePost) => {
		createPage({
			path: `/${post.slug}`,
			component: postTemplate,
			context: {
				post,
			},
		});
	});

	await Promise.all([createPostPromise]);
};
