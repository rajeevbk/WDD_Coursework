function changeGlobalFontSize(step) {
    if(document.body.style.fontSize){
        document.body.style.fontSize = parseFloat(document.body.style.fontSize.replace('em', '')) + step + 'em';
    }
    else{
        document.body.style.fontSize = 1 + step + 'em';
    }
}

function toggleMobileNavBar() {
    document.querySelector("#mobile-nav-items").classList.toggle("d-none")
}