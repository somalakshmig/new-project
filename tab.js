document.addEventListener("click", function(event) {
    if (event.target.tagName !== "H3") {
        return
    }
    let section_name_list = document.getElementsByClassName("section-name");
    for (let i = 0; i < section_name_list.length; i++) {
        section_name_list[i].style.backgroundColor = "wheat"
        section_name_list[i].style.color = "black";

    }
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
})

document.addEventListener("click", function(event) {
    if (event.target.name === "bgcolor") {
        let profileBgColorEl = document.getElementById("profileSection");
        profileBgColorEl.style.backgroundColor = event.target.value;
    } else if (event.target.name === "name") {
        let nameEl = document.getElementById("profileName");
        nameEl.style.color = event.target.value;
        console.log(nameEl)
    } else if (event.target.name === "designation") {
        document.getElementById("profileDesignation").style.color = event.target.value;
    } else if (event.target.name === "menucolor") {
        document.getElementById("profileMenu").style.color = event.target.value;
    } else if (event.target.name === "contactbutton") {
        document.getElementById("contactButton").style.backgroundColor = event.target.value;
    } else if (event.target.name === "contacttext") {
        document.getElementById("contactButton").style.color = event.target.value;
    }

})