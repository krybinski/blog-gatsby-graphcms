export type Post = {
	id: string;
	title: string;
	slug: string;
	content: {
		html: string;
	};
};

export type PostsData = {
	blog: {
		posts: Post[];
	};
};
