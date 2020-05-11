// http request librairie
import http from 'axios';

export default {
    data: function() {
        return {
            skills: {}
        }
    },

    mounted() {
        http
          .get('http://localhost:8080/skills.json')

          // send response to data object
          .then(response => (this.skills = response.data));
    }
}