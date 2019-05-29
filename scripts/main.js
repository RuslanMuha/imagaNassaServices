const SELECTOR_BTN = '[data-url="url-img"]';
const SELECTOR_IMG = '[data-img="url-img"]';
const SELECTOR_TAG = '[data-ul="img-tags"]';
const SELECTOR_COL = '[data-ul="img-colors"]';
const SELECTOR_SPIN = '[data-img="spinner"]';
let urlImage = new App.ImageProvider(SELECTOR_BTN);
let imageAdd = new App.ImagePresent(SELECTOR_IMG);
let dataImagga = new App.RemoteImagga();
let tags = new App.Tags(SELECTOR_TAG, 5);
let colors = new App.Colors(SELECTOR_COL, 5);
let spinner = new App.Spinner(SELECTOR_SPIN);
let nasaImage = new App.NasaImage();
const error = () => {alert("Reload the page and try again"); spinner.stop()};

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min)) + min;
}


const dataTags = (url) => dataImagga.getDataTags(url)
    .then(res => res.json())
    .then(res => tags.addTags(res))
    .catch(error);

const dataColors = (url) => dataImagga.getDataColors(url)
    .then(res => res.json())
    .then(res => colors.addColors(res))
    .catch(error);

let imageProcessing = function (url) {
    imageAdd.addImage(url);
    const ar = [dataTags(url), dataColors(url)];
    Promise.all(ar).then(() => {
        spinner.stop();
    })
};

urlImage.addHandler((url) => {
        spinner.start();
        imageProcessing(url);
    }
);


urlImage.addHandlerNasa(() => {
    spinner.start();
    nasaImage.getImageNasa()
        .then(res => res.json())
        .then(res => res.photos[getRandom(0,res.photos.length)].img_src)
        .then(res => imageProcessing(res))
        .catch(error)


});