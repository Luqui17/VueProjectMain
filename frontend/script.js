var axios = require("axios");

axios.get("http://localhost:3000/api/services").then(function(resposta){
    console.log(resposta.data);
});