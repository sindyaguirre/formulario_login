/**
 * index.js
 * - All our useful JS goes here, awesome!
 */


// Init Vue!
var app = new Vue({
    el: '#demo',
    mounted: function () {
        window.addEventListener('scroll', this.onScroll);
        console.info(2);

    },
    methods: {

        onScroll: function (e) {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                console.info(3);
                this.addMoreColors();
            }
        },
        addMoreColors: function () {
            console.info(1);

            // Simple dummy function to add more data.
            this.colors = this.colors.concat([{hex: "#f6d258"}, {hex: "#efcec5"}, {hex: "#d1af94"}, {hex: "#97d5e0"}, {hex: "#f6d258"}, {hex: "#efcec5"}]);
        }
    },
    data: function () {
        return {
            colors: [
                {hex: "#f6d258"},
                {hex: "#efcec5"},
                {hex: "#d1af94"},
                {hex: "#97d5e0"},
                {hex: "#f6d258"},
                {hex: "#efcec5"},
                {hex: "#97d5e0"},
                {hex: "#f6d258"},
                {hex: "#efcec5"},
                {hex: "#d1af94"},
                {hex: "#97d5e0"},
            ]
        }
    }
}, {el: '#app',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        console.info(3);

        axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(
                        response => (
                                    this.info = response
                                    ))
    }
})