const firebaseConfig = {
    apiKey: "AIzaSyCKyBNMp0tIornwrGK7zT6ZJyCalBPrN7U",
    authDomain: "phone-nums.firebaseapp.com",
    databaseURL: "https://phone-nums-default-rtdb.firebaseio.com",
    projectId: "phone-nums",
    storageBucket: "phone-nums.appspot.com",
    messagingSenderId: "613008481003",
    appId: "1:613008481003:web:eeeafdded7caa347c67cae",
    measurementId: "G-QGH0CMT4H8"
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

//Reference your database
let usersDB = firebase.database().ref("users");


//Send data to the database
const saveData = (num, username) => {
    let newData = usersDB.push();

    newData.set({
        name: username,
        number: num,
    })
}


const mtnNumbers = ["0803", "0816", "0806", "0903", "0813", "0810", "0703", "0706", "0814", "0906", "0913", "0704"]

const gloNumbers = ["0805", "0905", "0807", "0811", "0705", "0815"]

const airtelNumbers = ["0907", "0708", "0802", "0902", "0812", "0808", "0701", "0912", "0904"]

const nineMobileNumbers = ["0817", "0809", "0818", "0908", "0909"]

const text = document.getElementById("text");
const input = document.getElementById("fn");
const btn = document.getElementById("submit");
const mtn = document.getElementById("mtn")
const glo = document.getElementById("glo")
const air = document.getElementById("airtel")
const eti = document.getElementById("9mobile")
const lmtn = document.getElementById("lmtn")
const lglo = document.getElementById("lglo")
const lair = document.getElementById("lair")
const leti = document.getElementById("leti")



let message = document.getElementById("text");
let name = document.getElementById("username");
let submit = document.querySelector("#check");
let userRes = document.getElementById("userInput");
let form = document.getElementById("form")



//checks the input value and runs the network checker function - Method 01 


submit.addEventListener("click", collecUserInput)
function collecUserInput(event) {
    event.preventDefault()

<<<<<<< HEAD

    let username = name.value;
    let num = userRes.value;
=======
    console.log(name)
    let username = name.value
>>>>>>> 39067957cb96891537c653feb79260a9631585d5
    let userInput = userRes.value.substr(0, 4);


    if (userRes.value.length < 11 || userRes.value.length > 11) {
        alert(`Sorry ${username}, your number is incorrect, please try again`)
    } else {
        checkNetwork(userInput, username);

        saveData(num, username)
    }


}




// function to check the network provider
function checkNetwork(userInput, username) {
    if (mtnNumbers.includes(userInput)) {

        message.innerHTML = `Hello ${username},`
        form.style.display = "none"
        mtn.style.display = "block"
        lmtn.placeholder = userRes.value

    } else if (gloNumbers.includes(userInput)) {
        message.innerHTML = `Hello ${username},`
        form.style.display = "none"
        glo.style.display = "block"
        lglo.placeholder = userRes.value


    } else if (airtelNumbers.includes(userInput)) {
        message.innerHTML = `Hello ${username},`
        form.style.display = "none"
        air.style.display = "block"
        lair.placeholder = userRes.value

    } else if (nineMobileNumbers.includes(userInput)) {
        message.innerHTML = `Hello ${username},`
        form.style.display = "none"
        eti.style.display = "block"
        leti.placeholder = userRes.value

    } else {
        alert(`Hey ${username}, I guess your phone number is new, we don't recognise this number`)
    }
}