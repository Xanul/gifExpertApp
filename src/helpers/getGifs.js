
export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=fBjLb92VUcRxu1S1yNKUAJ1hQTi7z1CF&q=${category}&limit=10`;
  const APIkey = 'fBjLb92VUcRxu1S1yNKUAJ1hQTi7z1CF'

  const resp = await fetch(url);
  const {data} = await resp.json();
  
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;

}