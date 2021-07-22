import fetch from "node-fetch";

const SERVER_URL = "http://127.0.0.1:8000/";

// get posts list
export async function getAllPostsData() {
	const res = await fetch(new URL(`${SERVER_URL}api/post/`));
	const posts = await res.json();
	return posts;
}

// get IDs of posts
export async function getAllPostIds() {
	const res = await fetch(new URL(`${SERVER_URL}api/post/`));
	const posts = await res.json();
	return posts.map((post) => {
		return {
			params: {
				id: String(post.id),
			},
		};
	});
}

// get post detail
export async function getPostData(id) {
	const res = await fetch(new URL(`${SERVER_URL}api/post/${id}/`));
	const post = await res.json();
	return post;
}
