export class Urls{

    // URL DE BASE LOCAL API LARAVEL
    private static BASE_URL = "http://127.0.0.1:8000/api";

    // BURGER APIs
    static AJOUTER_BURGERS = Urls.BASE_URL + "/create";
    static LISTE_BURGERS = Urls.BASE_URL + "/index";
    static ARCHIVER_BURGERS = Urls.BASE_URL + "/archiver/";
    static DESARCHIVER_BURGERS = Urls.BASE_URL + "/desarchiver/";
    static MODIFIER_BURGERS = Urls.BASE_URL + "/update/";

}