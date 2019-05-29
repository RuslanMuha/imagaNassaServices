(
    function () {
        let App = window.App || {};

        function NasaImage() {}

        function getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.round(Math.random() * (max - min)) + min;
        }


        let urlIm = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${getRandom(0,800)}&api_key=pfdjmjFv780YRWUT76O6NYsNt2zx8PNTs6NZ7tRB`;

        NasaImage.prototype.getImageNasa = function(){
            return fetch(urlIm);
        };

        App.NasaImage = NasaImage;
        window.App = App;



    }
)();