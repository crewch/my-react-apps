import axios from 'axios';

export default class PostServise {
    static async getAll() {
        const API_URL = 'https://jsonplaceholder.typicode.com/posts';

        const response = await axios.get(API_URL);
        return response.data;
    }
}
