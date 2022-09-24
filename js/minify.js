let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let texto = document.getElementById("texto").value;
    let minificado = document.getElementById("minificado");
    minificado.style.display = "block";
    
    let min = texto.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
    .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\/\*.*?\*\//g, "");

    minificado.innerHTML = min;
});


