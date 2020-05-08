import AppNavBar from '@/components/app-nav-bar/appNavBar.vue';
import AppSideBar from '@/components/app-side-bar/appSideBar.vue';
import AppDialog from '@/components/app-dialog/appDialog.vue';

export default {
    name: "App",
    components: {
        AppNavBar,
        AppSideBar,
        AppDialog
    },

    // when DOM is loaded
    mounted() {
        this.dialogs = {};
        this.dialogs.lang = document.querySelector('.app-dialog .dialog-lang [slot="dialog-container"]');
    },

    methods: {
        dialogLang: function() {
            this.dialogs.lang.classList.toggle('show');
        }
    }
}