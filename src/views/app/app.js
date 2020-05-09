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
        this.currentLang = this.$i18n.locale;
        this.dialogs = {};
        this.dialogs.lang = document.querySelector('.app-dialog .dialog-lang [slot="dialog-container"]');
    },

    methods: {
        dialogLang: function() {
            // faire transiter un evenement entre deux composants
            this.$bus.$emit('dialog-close', {
                dialog: this.dialogs.lang
            });
        },

        // Changer la langue grâce à i18n
        changeLang(lang) {
            this.$i18n.locale = lang;
            this.currentLang = lang;
        }
    }
}