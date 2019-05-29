(
    function () {
        let App = window.App;
        let $ = window.jQuery;

        function Colors(selector, number) {
            this.$colors = $(selector);
            this.number = number;
        }


        Colors.prototype.addColors = function (color) {
            let colors = color.results[0].info.image_colors;
            if (!color || colors.length === 0) throw Error("Response is empty");

            let $li = $(colors).map((i, t) => {
                if (i > this.number - 1) {
                    return false;
                }
                return $(`<li class="list-group-item"
                        style="background-color: ${t.closest_palette_color_html_code}; color: ${colorBrightness(t) < 130 ? 'white' : 'black'}"/>`)
                    .text(`${t.closest_palette_color} - ${parseInt(t.percentage)}`).get();
            });

            this.$colors.empty();
            this.$colors.append($li);
        };

        let colorBrightness = function (color) {
            return `${0.3 * color.r + 0.6 * color.g + 0.1 * color.b}`;
        };

        App.Colors = Colors;
        window.App = App;
    }
)();