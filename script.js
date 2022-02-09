function letMeDown() {
    var scrollable = document.querySelector("#sec-rolls-log")
    scrollable.scrollTo(0, scrollable.scrollHeight-scrollable.clientHeight);
}


window.addEventListener('load', letMeDown)