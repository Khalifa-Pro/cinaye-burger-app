export class Urls{

    // URL DE BASE LOCAL API LARAVEL
    private static BASE_URL = "http://127.0.0.1:8000/api";

    // BURGER APIs
    static AJOUTER_BURGERS = Urls.BASE_URL + "/create";
    static LISTE_BURGERS = Urls.BASE_URL + "/index";
    static ARCHIVER_BURGERS = Urls.BASE_URL + "/archiver/";
    static DESARCHIVER_BURGERS = Urls.BASE_URL + "/desarchiver/";
    static MODIFIER_BURGERS = Urls.BASE_URL + "/update/";
    static RECETTES_JOURNALIERS = Urls.BASE_URL + "/recettes-journalieres";
    //static DETAILS_BURGERS = Urls.BASE_URL + "/show/";

    // COMMANDES APIs
    static COMMANDER_BURGERS = Urls.BASE_URL + "/commander/";
    static LISTE_COMMANDES = Urls.BASE_URL + "/commandes";
    static VALIDER_COMMANDE = Urls.BASE_URL + "/valider/";
    static ANNULER_COMMANDE = Urls.BASE_URL + "/annuler/";
    static COMMANDER_EN_COURS = Urls.BASE_URL + "/commandes-en-cours";
    static COMMANDER_VALIDEES = Urls.BASE_URL + "/commandes-validees";
    static COMMANDER_ANNULEES = Urls.BASE_URL + "/commandes-annulees";

    // PAIEMENT APIs
    static PAYER_COMMANDE = Urls.BASE_URL + "/payer/";


}