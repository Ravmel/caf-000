document.addEventListener("DOMContentLoaded", function() {
    let boissons = document.getElementById("boissons");
    let ajouterBoisson = document.getElementById("ajouterBoisson");

    ajouterBoisson.addEventListener("click", function() {
        let nouvelleBoisson = document.createElement("div");
        nouvelleBoisson.classList.add("boisson");

        let inputBoisson = document.createElement("input");
        inputBoisson.type = "text";
        inputBoisson.placeholder = "Nom de la boisson";

        let boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";
        boutonSupprimer.addEventListener("click", function() {
            boissons.removeChild(nouvelleBoisson);
        });

        nouvelleBoisson.appendChild(inputBoisson);
        nouvelleBoisson.appendChild(boutonSupprimer);
        boissons.appendChild(nouvelleBoisson);
    });
});
