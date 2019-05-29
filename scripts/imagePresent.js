(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function ImagePresent(selector) {
            this.$image = $(selector);
        }

        ImagePresent.prototype.addImage = function (url) {
            this.$image.attr('src',`${url?url:'https://zabavnik.club/wp-content/uploads/2018/02/znak_voprosa_29_17183622.png'}`);
        };

        App.ImagePresent = ImagePresent;
        window.App = App;
    }
)();