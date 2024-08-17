<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $mail = htmlspecialchars($_POST['mail']);

    // Vérification de base des données soumises
    if (!empty($prenom) && !empty($nom) && !empty($mail) && filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        // Traitement des données (enregistrement dans la base de données, envoi de mail, etc.)
        // ...

        echo "<p style='color: green;'>Merci, $prenom $nom. Votre participation a été enregistrée.</p>";
    } else {
        echo "<p style='color: red;'>Veuillez remplir tous les champs correctement.</p>";
    }
} else {
    echo "<p style='color: red;'>Méthode de requête non autorisée.</p>";
}
