(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function Spinner(spin) {
            this.$spin = $(spin);
            let $div = $('<div></div>',{
                class:"spinner-border mx-auto",


            });

            let $p = $('<p></p>',{text: 'Loading ..', style:"display: none",id:"circle"});
            $p.append($div);
            this.$spin.append($p);
        }

        Spinner.prototype.start = function () {
            $("#circle").css('display','block');

        };

        Spinner.prototype.stop = function () {
            $("#circle").css('display','none');
        };


        App.Spinner = Spinner;
        window.App = App;
    }
)();