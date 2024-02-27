const config = {
    MONGO_DB_URL:"mongodb://localhost:27017/flörtEt",
    MONGO_DB_URL_DEBUG:"",
    PORT:process.env.PORT || 3300,
    PRIVATE_KEY:"56454743358713353",
    API_ROUTE:"api/",
    MIN_PASSWORD_LENGTH:6,
    AUTHORIZATION:"Bearer ",
    PROD:false,
    ONE_SIGNAL_ID:"617b5e0d-bcee-46bb-a68a-881743fb9b5f",
    ONE_SIGNAL_SECRET:"YmI4MTljN2ItMmU5MC00NmY1LWFmNDQtYjYxOWFhMGZlNDUz",
    HOST:"http://78.135.85.174:3300",
    APP_NAME:"FlörtEt",
    EMAIL: "mylittleloveqx@gmail.com",
    AUTHOR:"FlörtEt",
}
module.exports = config