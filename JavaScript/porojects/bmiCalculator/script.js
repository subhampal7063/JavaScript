const bmiform = document.querySelector("form");

bmiform.addEventListener("submit",function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if (height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid Height/ weight"
    } else if (weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid Height/ weight"
    } else{
        const Finalresult = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${Finalresult}`
    }
})