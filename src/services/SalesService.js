/* eslint-disable no-console */
import axios from 'axios';
import ConfigParams from "./ConfigParams";

export default {
    retrieveAll() {
        return axios.get(ConfigParams.URI.concat("/sale"))
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error);
            });

    },
    retrieve(id) {
        // eslint-disable-next-line no-console
        console.log(id);
        return axios.get(ConfigParams.URI.concat("/sale/"), {
                params: { id: id }
            })
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error);
            });
    },
    create(provideer) {
        return axios.post(ConfigParams.URI.concat("/sale/create"), provideer)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error);
            });
    },

}