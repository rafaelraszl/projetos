function $(element, context) {
    if (context) {
        return context.querySelector('element');
    }
    else {
        return document.querySelector('element');
    }
}

// function $(element) {
//     return document.querySelector('element');
// }