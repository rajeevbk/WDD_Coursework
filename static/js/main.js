setTimeout(function(){
    document.querySelector("#splash-screen").classList.add('hide');
    document.querySelector(".splash-screen-grid").classList.add('hide');
}, 3000);

setTimeout(function(){
        document.querySelector("#splash-screen").remove();
}, 3950);

function changeGlobalFontSize(step) {
    if(document.body.style.fontSize){
        document.body.style.fontSize = parseFloat(document.body.style.fontSize.replace('em', '')) + step + 'em';
    }
    else{
        document.body.style.fontSize = 1 + step + 'em';
    }
}