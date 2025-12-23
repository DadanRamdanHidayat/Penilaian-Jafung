const loginForm = document.getElementById("loginForm");
const inputForm = document.getElementById("inputForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        tampilkan("inputPage");
    } else {
        alert("Username atau password salah");
    }
});

inputForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const kredit = parseInt(document.getElementById("kredit").value);

    document.getElementById("hasilNama").innerText = nama;
    document.getElementById("hasilKredit").innerText = kredit;

    const box = document.getElementById("hasilBox");
    const status = document.getElementById("hasilStatus");

    if (kredit >= 850) {
        status.innerText = "Eligible";
        box.className = "status-box eligible";
    } else {
        status.innerText = "Not Eligible";
        box.className = "status-box not-eligible";
    }

    tampilkan("resultPage");
});

document.getElementById("ulangBtn").addEventListener("click", function () {
    tampilkan("inputPage");
});

function tampilkan(id) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("inputPage").classList.add("hidden");
    document.getElementById("resultPage").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}
