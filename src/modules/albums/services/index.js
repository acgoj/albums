import axios from 'axios';

export const getAlbums = async () => {
    const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    return response.data;
};
