(
    function () {
        let App = window.App;
        let $ = window.jQuery;

        function Tags(selector, number) {
            this.$tags = $(selector);
            this.number = number;
        }


        Tags.prototype.addTags = function (tag) {
            let tags = tag.results[0].tags;
            if (!tag || tags.length === 0) throw Error("Response is empty");

            let $li = $(tags).map((i, t) => {
                if (i > this.number - 1) {
                    return false;
                }
                return $('<li class="list-group-item"/>').text(`${t.tag} - ${parseInt(t.confidence)}`).get();
            });

           this.$tags.empty();
            this.$tags.append($li);
        };

        App.Tags = Tags;
        window.App = App;
    }
)();