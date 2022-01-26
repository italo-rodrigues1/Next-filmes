import { apiBase,apiKey} from '../../lib/tmdb';
import axios from 'axios';

export default async (req, res) => {
    const resultApi = await axios.get(`${apiBase}/trending/movie/week?api_key=${apiKey}`)

    res.status(200).json({ 
        list:resultApi.data.results
    })
}
  