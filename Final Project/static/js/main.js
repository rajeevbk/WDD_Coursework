const url = new URL(window.location.href);
const paths = url.pathname.split('/');
if (paths[paths.length - 1] === 'index.html' && url.hash === "") {
    setTimeout(function () {
        document.querySelector("#splash-screen").classList.add('hide');
        document.querySelector(".splash-screen-grid").classList.add('hide');
    }, 3000);

    setTimeout(function () {
        document.querySelector("#splash-screen").remove();
    }, 4000);
} else {
    document.querySelector("#splash-screen").remove();
}