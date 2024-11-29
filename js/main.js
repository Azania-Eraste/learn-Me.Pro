
function nav_switch() {
    var nav_button = document.getElementById("header-nav");
    var nav_elt = document.getElementById("header-nav-item");
    nav_button.classList.toggle("active");
    nav_elt.classList.toggle("show")
}


function selected(id_elt) {
    let dot = document.querySelectorAll(".dot");
    let item = document.querySelectorAll(".item");
    let id = document.getElementById(id_elt);
    let elt = "." + id_elt;
    let comment = document.querySelectorAll(elt)

    dot.forEach(elt => {
        elt.classList.remove("selected");
    });

    id.classList.add("selected");

    item.forEach(elt => {
        elt.classList.remove("comment-show");
    });

    comment.forEach(elt => {
        elt.classList.add("comment-show")
    });

}