import axios from 'axios';

export default class PostServise {
    static async getAll(limit = 10, page = 1) {
        const API_URL = 'https://jsonplaceholder.typicode.com/posts';

        const response = await axios.get(API_URL, {
            params: {
                _limit: limit,
                _page: page,
            },
        });
        return response;
    }

    static async getByid(id) {
        const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

        const response = await axios.get(API_URL);
        return response;
    }

    static async getCommentsByPostId(id) {
        const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

        const response = await axios.get(API_URL);
        return response;
    }
}
