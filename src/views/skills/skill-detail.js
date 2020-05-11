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
          .then(response => {
              for(let single in response.data) {
                if (response.data[single].id.$oid == this.$route.params.id) {
                    this.skills = response.data[single];
                }
              }
          });
    }
}   