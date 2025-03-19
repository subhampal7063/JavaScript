const allbutton = document.querySelectorAll(".button");
const body = document.querySelector("body");

allbutton.forEach(function(eachButton) {
    console.log(eachButton);
    eachButton.addEventListener('click',function(event) {
        console.log(event);
        console.log(event.target)
        switch (event.target.id) {
            case "grey": document.body.style.backgroundColor = "grey"
                break;
            case "white": document.body.style.backgroundColor = "white"
                break;
            case "blue": document.body.style.backgroundColor = "blue"
                break;
            case "yellow": document.body.style.backgroundColor = "yellow"
            default:
                break;
        }
    })
})

/*

        if (event.target.id === "grey") {
            document.body.style.backgroundColor="grey";
        }
        if (event.target.id === "white") {
            document.body.style.backgroundColor="white";
        }
        if (event.target.id === "blue") {
            document.body.style.backgroundColor="blue";
        }
        if (event.target.id === "yellow") {
            document.body.style.backgroundColor="yellow";
        }


        */