const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: null,
        usuario: null,
        senha: null,
        age: null,
        movie: null
    },
    methods: {
        checkForm: function (e) {
            if (this.name && this.usuario && this.senha) {
                return true;
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('O nome é obrigatório.');
            }
            if (!this.usuario) {
                this.errors.push('O nome é obrigatório.');
            }
            if (!this.senha) {
                this.errors.push('A senha é obrigatória.');
            }

            e.preventDefault();
        },
        formSubmit(e) {
            console.info('form');
            e.preventDefault();
            let currentObj = this;
            this.axios.post('http://localhost/formulario/action/actions.php', {
                name: this.name,
                idade: this.age,
                usuaro: this.usuario,
                senha: this.senha
            }).then(function (response) {
                currentObj.output = response.data;
            }).catch(function (error) {
                currentObj.output = error;
            });
        }
    }
})
