import { apiBase,apiKey} from '../../../lib/tmdb';
import axios from 'axios';

export default async (req, res) => {

    const resultApi = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`)
    const json = await resultApi.json()
    
    res.status(200).json({ 
        info:json
    })
}
  