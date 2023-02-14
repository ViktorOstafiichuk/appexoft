import {urls} from "../urls";

export default function FetchService(endpoint) {
    this.getAllData = (page) => fetch(`${urls.base}/${endpoint}${page}`)
        .then(value => value.json())
    this.getSingleData = (id) => fetch(`${urls.base}/${endpoint}/${id}`)
        .then(value => value.json())
}
