
const axios = require("axios");

const speeds = [];

const getXRPTransactionspeed = async (data) => {
  try{
    var data = JSON.stringify({
      "method": "tx_history",
      "params": [
        {
          "start": 0
        }
      ]
    });
    
    var config = {
      method: 'post',
      url: 'http://s1.ripple.com:51234/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    }catch(error){
      console.log(error)
  }

  
};


module.exports = { getXRPTransactionspeed };
