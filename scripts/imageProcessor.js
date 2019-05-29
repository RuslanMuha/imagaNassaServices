(
    function () {
        let App = window.App;
        let c = '{"results": [{"info": {"background_colors": [{"b": "36", "g": "37", "percentage": 82.4352645874023,' +
            ' "closest_palette_color_parent": "black", "r": "38", "html_code": "#262524", "closest_palette_color_html_code":' +
            ' "#3a3536", "closest_palette_color": "graphite", "closest_palette_distance": 6.26122568532853},' +
            ' {"b": "66", "g": "91", "percentage": 17.4492321014404, "closest_palette_color_parent":' +
            ' "light brown", "r": "125", "html_code": "#7d5b42", "closest_palette_color_html_code": ' +
            '"#7a5747", "closest_palette_color": "almond", "closest_palette_distance": 4.1997256719158}], "color_variance":' +
            ' "61", "object_percentage": "17.622587204", "image_colors":' +
            ' [{"b": "36", "g": "37", "percentage": 70.3863525390625, "closest_palette_color_parent":' +
            ' "black", "r": "38", "html_code": "#262524", "closest_palette_color_html_code": "#3a3536", "closest_palette_color":' +
            ' "graphite", "closest_palette_distance": 6.26122568532853}, {"b": "65", "g": "90", "percentage": 17.5296516418457,' +
            ' "closest_palette_color_parent": "light brown", "r": "125", "html_code": "#7d5a41", "closest_palette_color_html_code":' +
            ' "#7a5747", "closest_palette_color": "almond", "closest_palette_distance": 3.97142704399399}, {"b": "58", "g": "159",' +
            ' "percentage": 11.8073987960815, "closest_palette_color_parent": "light green", "r": "131", "html_code": "#839f3a", ' +
            '"closest_palette_color_html_code": "#86a96f", "closest_palette_color": "apple slice", "closest_palette_distance": ' +
            '9.22584439748063}], "color_percent_threshold": 1.75, "foreground_colors": [{"b": "63", "g": "160", "percentage":' +
            ' 65.6818771362305, "closest_palette_color_parent": "light green", "r": "137", "html_code": "#89a03f", ' +
            '"closest_palette_color_html_code": "#86a96f", "closest_palette_color": "apple slice", "closest_palette_distance":' +
            ' 9.03749510181263}, {"b": "24", "g": "50", "percentage": 33.8336067199707, "closest_palette_color_parent":' +
            ' "skin", "r": "66", "html_code": "#423218", "closest_palette_color_html_code": "#5c3e14", "closest_palette_color":' +
            ' "deep brown", "closest_palette_distance": 7.86023504777584}]}, "image": "https://images8.alphacoders.com/414/414960.jpg"}], "unsuccessful": []}';

        let t = '{"results": [{"tagging_id": null, "image": "https://images8.alphacoders.com/414/414960.jpg", "tags": ' +
            '[{"confidence": 100, "tag": "tree frog"}, {"confidence": 100, "tag": "frog"}, {"confidence": 100, "tag": "amphibian"},' +
            ' {"confidence": 100, "tag": "eye"}, {"confidence": 70.9655456542969, "tag": "animal"}, {"confidence": 67.9108657836914, ' +
            '"tag": "eyed"}, {"confidence": 53.4966735839844, "tag": "wildlife"}, {"confidence": 40.5265693664551,' +
            ' "tag": "eyed tree frog"}, {"confidence": 36.5673637390137, "tag": "frogs"}, {"confidence": 35.0336723327637, ' +
            '"tag": "look"}, {"confidence": 32.2997665405273, "tag": "tree"}, {"confidence": 31.8445510864258, "tag": "fauna"}, ' +
            '{"confidence": 31.4957427978516, "tag": "animals"}, {"confidence": 29.6591682434082, "tag": "bulging"},' +
            ' {"confidence": 29.6551551818848, "tag": "amphibians"}, {"confidence": 28.6787109375, "tag": "eyed leaf frog"},' +
            ' {"confidence": 28.6775398254395, "tag": "crazy frog"}, {"confidence": 28.6775398254395, "tag": "eye frog"},' +
            ' {"confidence": 27.5374145507812, "tag": "pet"}, {"confidence": 27.2550868988037, "tag": "abstraction"}, ' +
            '{"confidence": 25.7140274047852, "tag": "lean out"}, {"confidence": 25.6904487609863, "tag": "peep"},' +
            ' {"confidence": 25.5483226776123, "tag": "lean"}, {"confidence": 24.6800918579102, "tag": "wild life"}, ' +
            '{"confidence": 23.3975582122803, "tag": "close"}, {"confidence": 23.0086059570312, "tag": "orange"}, ' +
            '{"confidence": 21.5869026184082, "tag": "looking"}, {"confidence": 19.787935256958, "tag": "eyes"},' +
            ' {"confidence": 19.4799785614014, "tag": "color"}, {"confidence": 17.7983169555664, "tag": "toad"},' +
            ' {"confidence": 16.3492832183838, "tag": "leaf"}, {"confidence": 16.1658782958984, "tag": "closeup"}' +
            ', {"confidence": 14.9921722412109, "tag": "colors"}, {"confidence": 14.7026147842407, "tag": "crazy"}, ' +
            '{"confidence": 14.6441297531128, "tag": "reptile"}, {"confidence": 13.8447380065918, "tag": "convergent adaptation"},' +
            ' {"confidence": 13.8145780563354, "tag": "damp"}, {"confidence": 13.6048307418823, "tag": "sticky"}, ' +
            '{"confidence": 13.4169998168945, "tag": "wet"}, {"confidence": 13.1576490402222, "tag": "environment"}, ' +
            '{"confidence": 13.0617837905884, "tag": "wild"}, {"confidence": 12.5633153915405, "tag": "watching"},' +
            ' {"confidence": 12.1430311203003, "tag": "tailed frog"}, {"confidence": 12.0204401016235, "tag": "black"},' +
            ' {"confidence": 11.3459997177124, "tag": "conservation"}, {"confidence": 11.0708341598511, "tag": "tropical"},' +
            ' {"confidence": 10.7698612213135, "tag": "curiosity"}, {"confidence": 9.60771560668945, "tag": "jump"}, ' +
            '{"confidence": 9.32111930847168, "tag": "colorful"}, {"confidence": 8.86039447784424, "tag": "lizard"},' +
            ' {"confidence": 8.70265960693359, "tag": "forest"}, {"confidence": 8.60751914978027, "tag": "cute"}, ' +
            '{"confidence": 8.5966911315918, "tag": "sitting"}, {"confidence": 8.25401973724365, "tag": "ecology"},' +
            ' {"confidence": 8.12612438201904, "tag": "copy space"}, {"confidence": 8.09726142883301, "tag": "brown"}, ' +
            '{"confidence": 7.95704984664917, "tag": "little"}, {"confidence": 7.89165830612183, "tag": "slimy"},' +
            ' {"confidence": 7.83775758743286, "tag": "endangered"}, {"confidence": 7.81093549728394, "tag": "tropics"},' +
            ' {"confidence": 7.58799028396606, "tag": "biology"}, {"confidence": 7.27566242218018, "tag": "exotic"}]}]}';

        let promiseResponse = function (value) {
            return new Promise(resolve => resolve(value))
        };

        function ImageProcessor() {

        }

        ImageProcessor.prototype.getDataTags = function (url) {
            return promiseResponse(t);

        };

        ImageProcessor.prototype.getDataColors = function (url) {
            return promiseResponse(c);

        };

        App.ImageProcessor = ImageProcessor;
        window.App = App;
    }
)();