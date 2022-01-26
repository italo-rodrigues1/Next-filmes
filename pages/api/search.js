import { apiBase,apiKey} from '../../lib/tmdb';
import axios from 'axios';

export default async (req, res) => {
    const resultApi = await axios.get(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.q}`)

    res.status(200).json({ 
        list:resultApi.data.results
    })
}
  