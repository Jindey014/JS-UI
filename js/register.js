const input = document.querySelectorAll(".text-input")
input.forEach((element) => {
    element.addEventListener("blur", (event) => {
        if (event.target.value != '') {
            event.target.nextElementSibling.classList.add("filled");
        } else {
            event.target.nextElementSibling.classList.remove("filled");
        }
    })
})
