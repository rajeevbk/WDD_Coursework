function changeGlobalFontSize(step) {
    if (document.body.style.fontSize) {
        document.body.style.fontSize = parseFloat(document.body.style.fontSize.replace('em', '')) + step + 'em';
    } else {
        document.body.style.fontSize = 1 + step + 'em';
    }
}

function toggleMobileNavBar() {
    document.querySelector("#mobile-nav-items").classList.toggle("d-none")
}

async function scrollToTop() {
    for (let i = document.documentElement.scrollTop; document.documentElement.scrollTop > 0; i -= 50) {
        document.body.scrollTop = i;
        document.documentElement.scrollTop = i;
        await new Promise(resolve => setTimeout(resolve, 5))
    }
}

