

class MarvelService {
    getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json()
    }

    getAllCharecters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=65650b7abc66b09a5feb529fb6327992');
    }

    getCharecter = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?${id}?
        apikey=65650b7abc66b09a5feb529fb6327992`)
    }

}

export default MarvelService