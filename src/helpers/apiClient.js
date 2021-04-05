import axios from 'axios';

class ApiClient {
    constructor() {
        this.root = 'http://dinomatch.roguewolf.tech/api'
        this.getAllPath = 'dinosaur'
        this.matchPath = 'dinosaur/match'
    }

    getAll() {
        return axios.get(`${this.root}/${this.getAllPath}`)
    }

    getById(id) {
        if (isNaN(id)) {
            console.error("This ID isn't a number")
            return
        }
        return axios.get(`${this.root}/${this.getAllPath}/${id}`)
    }

    match(name, color) {
        return axios.post(`${this.root}/${this.matchPath}`, {name: name, color: color})
    }
}

export default ApiClient;
