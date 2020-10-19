import axios from 'axios';
import ConfigParams from "./ConfigParams";

export default {
    retrieveAll() {
        return axios.get(ConfigParams.URI.concat("/category"))
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error);
            });

    },
    retrieve(id) {
        return axios.get(ConfigParams.URI.concat("/category/"), {
            params: {id: id}
        })
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error);
            });
    },
    create(category) {
        return axios.post(ConfigParams.URI.concat("/category/create"), category)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error);
            });
    },
    remove(id) {
        return axios.delete(ConfigParams.URI.concat("/category/"), {
            params: {id: id}
        })
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error);
            });
    },
    update(category) {
        return axios.put(ConfigParams.URI.concat("/category/edit"), category)
            .then((response) => {
                return response.data
            }).catch((error) => {
                console.log(error);
            });
    }
}