import AppNavBar from '@/components/app-nav-bar/appNavBar.vue';

export default {
    name: "App",
    components: {
        AppNavBar
    },

    // when DOM is loaded
    mounted() {
        console.log(this.$store.getters.http.url);
    }
}