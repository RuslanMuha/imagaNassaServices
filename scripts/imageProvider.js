(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function ImageProvider(selector) {
            this.$element = $(selector);
        }

        let emptyTagsAndColors = function(){
            $('[data-ul="img-colors"]').empty();
            $('[data-ul="img-tags"]').empty();
        };

        ImageProvider.prototype.addHandler = function (cb) {

            this.$element.on('submit', function(event){

                emptyTagsAndColors();

                event.preventDefault();
                let val = $('[data-url="url-img-input"]').val();
                cb(val);
                this.reset();
            });


        };

        ImageProvider.prototype.addHandlerNasa = function(cb){

            emptyTagsAndColors();

            $('[data-btn="url-nasa"]').on('click',function (event){
                event.preventDefault();
                cb();
            })
        };

        App.ImageProvider = ImageProvider;
        window.App = App;
    }
)();