const text = document.getElementById("text");
const input = document.getElementById("fn");
const btn = document.getElementById("submit");



btn.addEventListener("click", function (event) {
    event.preventDefault();
    let name = input.value

    text.innerHTML = `Hi ${name}, Welcome here`
    input.value = ""
})