export default {
    // when DOM is loaded
    mounted() {
        console.log(this.$store.getters.http.url);
    }
}