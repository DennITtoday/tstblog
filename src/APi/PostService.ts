import axios from 'axios'
import { IPost } from '../utils/types/Post'

export default class PostService {
  static async getAll(limit: number, page: number) {
    const response = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    )
    return response
  }
}
