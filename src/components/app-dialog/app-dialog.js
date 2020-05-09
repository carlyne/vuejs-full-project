export default {
    name: "app-dialog",

    mounted() {
        //  Récupérer l'event d'un composant frère
        this.$bus.$on('dialog-close', function(element) {
            element.dialog.classList.toggle('show');
        })
    }
}