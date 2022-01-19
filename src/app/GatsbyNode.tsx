import * as path from 'path';
import { GatsbyNode } from 'gatsby';
import { PostsData } from '../types';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
	const { data } = await graphql<PostsData>(`
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
	const createPostPromise = data?.blog.posts.map((post) => {
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
