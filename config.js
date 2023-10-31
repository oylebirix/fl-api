const config = {
    MONGO_DB_URL:"mongodb://localhost:27017/koddemo",
    MONGO_DB_URL_DEBUG:"",
    PORT:process.env.PORT || 3300,
    PRIVATE_KEY:"56454743358713353",
    API_ROUTE:"api/",
    MIN_PASSWORD_LENGTH:6,
    AUTHORIZATION:"Bearer ",
    PROD:false,
    ONE_SIGNAL_ID:"1ca8e627-83e7-4765-910e-cd6505b6441c",
    ONE_SIGNAL_SECRET:"MmQ3NDI2ZTctYWZjYy00M2RjLTk1NzUtNGE4ZGE1MGY2NThk",
    HOST:"http://188.132.130.77:3300",
    APP_NAME:"Fist Date",
    EMAIL: "cmpolatqx@gmail.com",
    AUTHOR:"Fist Date",
}
module.exports = config