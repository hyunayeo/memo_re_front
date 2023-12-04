import axios from 'axios';
// import articleApi from './article.api';

export default {
    getMembers: function (searchDto) {
        return axios.get(`/api/members?${new URLSearchParams(searchDto).toString()}`);
    },
    getMember: function(id) {
        return axios.get(`/api/members/${id}`);
    },
    
}