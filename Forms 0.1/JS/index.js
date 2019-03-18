function disp(form) {
    if (form.style.display == "none") {
        form.style.display = "block";
    } 

    else {
        form.style.display = "none";
    }
    anime({
        targets: '.name1',
        translateY: 1250
    });
    if (form.style.display == "none") {
        anime({
            targets: '.name1',
            translateY: 0
        });
    } 
}
