setTimeout(function(){
    document.querySelector("#splash-screen").classList.add('hide');
    document.querySelector(".splash-screen-grid").classList.add('hide');
}, 3000);

setTimeout(function(){
        document.querySelector("#splash-screen").remove();
}, 4000);
