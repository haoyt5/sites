export const getData = async (path) => {
	const data = await fetch(path, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((response) => response.json());
	return data;
};
