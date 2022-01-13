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

export type NavLink = {
	id: number;
	text: string;
	url: string;
};
