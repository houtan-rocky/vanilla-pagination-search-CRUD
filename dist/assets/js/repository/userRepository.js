const LIMIT_PAGES = 5;

const getUsers = async (url, page) => {
	let mainUrl = url;

	if (page) {
		mainUrl = url + `?page=${page}&limit=${LIMIT_PAGES}`;
	}
	const result = await fetch(mainUrl);
	return await result.json();
};

const searchUser = async (text, url = BASE_URL) => {
	const res = await fetch(`${url}?search=${text}`);
	const data = await res.json();
	return data;
};

const deleteUser = async (id, url) => {
	const res = await fetch(`${url}/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};
