export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=aW2FWF2HRNuiqBs1j2gNQLVJDEqMoVvq`;
	const response = await fetch(url);
	const { data } = await response.json();

	const images = data.map(({ id, title, images }) => ({
		id: id,
		title: title,
		url: images?.downsized_medium?.url,
	}));

	return images;
};
