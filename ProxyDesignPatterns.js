 // External API Service

 function CrytocurrencyAPI (){
    this.getValue = function (coin){
        switch(coin){
            case "Bitcoin":
                return '$3,500'
                break
            case "Litecoin":
                return `$158`
                break
            case "Ethereum":
                return "$175"
                break

        }
    }
 }


 const api = new CrytocurrencyAPI()

 console.log(api.getValue('Ethereum'))