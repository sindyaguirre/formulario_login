const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        weapons: 0,
        shields: 0,
        coffee: 0,
        ac: 0,
        mousedroids: 0
    },
    computed: {
        total: function () {
            // Deve-se converter, pois o Vue mantém como String os valores vazios 
            return Number(this.weapons) +
                    Number(this.shields) +
                    Number(this.coffee) +
                    Number(this.ac) +
                    Number(this.mousedroids);
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (this.total != 100) {
                alert('O total deve ser 100! ' + ((this.total < 100) ? 'Faltam' + (100 - this.total) : "Deve ser até 100"));
                this.errors.push('O total deve ser 100!');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        }
    }
})