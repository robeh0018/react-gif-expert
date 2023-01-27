export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NY7DAObc59kJY388d0JNYXel083QA1Ny&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
   
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
}
