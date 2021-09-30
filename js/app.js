

const buttonCopiarEmail = document.querySelector('.botonCopiar');
const inputEmail = document.querySelector('.inputEmail');
const mensage = document.querySelector('#mensaje')

buttonCopiarEmail.addEventListener('click', function(){
    inputEmail.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    mensage.innerHTML = "Direccion copiada";
    setInterval(()=> mensage.innerHTML = "", 3000);

})



window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
    }
});

});

function ocultarMenu(){
    document.getElementById('idMenu') .style.right = '-350px';
    document.getElementById('botMn').style.transform = 'rotate(0deg)';

};

function menuF(){
    
    document.getElementById('idMenu') .style.right = '0px';
    document.getElementById('idMenu') .style.transition = '0.5s';

    document.getElementById('botMn').style.transform = 'rotate(180deg)';
  
    /*
    transform: rotate(180deg);*/
};

// este codigo me permite traer datos de coingecko



function updatePrice (){   
const wtmURL = 'https://api.coingecko.com/api/v3/coins/waytom?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false'

fetch(wtmURL)
.then(Response => Response.json() )
.then (dato => {

   console.log(dato.market_data.current_price.usd)
   console.log(dato.market_data.price_change_percentage_24h)
   console.log(dato.market_data.total_volume.usd)

   let priceWTM = dato.market_data.current_price.usd
   let FpriceWTM = priceWTM.toFixed(5)
   document.getElementById('priceWTM').innerHTML = 'Price :' + ' ' + '$ ' + FpriceWTM ;
   
   let changeWTM = dato.market_data.price_change_percentage_24h
   let FchangeWTM = changeWTM.toFixed(2)
   document.getElementById('changeWTM').innerHTML = 'Change :' + ' ' + FchangeWTM ;

   let volumWTM = dato.market_data.total_volume.usd
   document.getElementById('volumWTM').innerHTML = 'Vol :' + ' ' + volumWTM ; 
          
})
}
setInterval (updatePrice,5000);



function mensaje(){
    
    alert('mensaje de funcion'); 
};

function exchange(){

  let exchangecss = document.getElementById('a1Exchange');
  exchangecss.style.cssText = 'background : #482164 ; color: white; border-bottom : 2px inset white';
          
  
        document.getElementById('p2pb2bSection').style.display = "none";
        document.getElementById('dextradeSection').style.display = "none";
        document.getElementById('bP2pb2b').style.background = "rgb(212, 211, 211)"
       /* document.getElementById('pestania').style.background = "#081921" */
        document.getElementById('bNautilus').style.marginTop = '-2px';
        document.getElementById('bP2pb2b').style.marginTop = "2px";
        document.getElementById('bDextrade').style.marginTop = "2px";

    

   }

function vpsminer(){
  let vpsminercss = document.getElementById('a1vpsminer');
  vpsminercss.style.cssText = 'background : #482164 ; color: white; border-bottom : 2px inset white';
}   

function ways(){
    let vpsminercss = document.getElementById('a1ways');
    vpsminercss.style.cssText = 'background : #482164 ; color: white; border-bottom : 2px inset white';
  }   
     
function wallet(){

    let vpsminercss = document.getElementById('a1wallet');
    vpsminercss.style.cssText = 'background : #482164 ; color: white; border-bottom : 2px inset white';
   
    document.getElementById('TrustWalletSection').style.display = "none"

    document.getElementById('bMeta').style.background = "#f68c24"
    document.getElementById('bMeta').style.color = "#ffffff"
  }  


  /*ocultar/mostrar parrafos del contenido   //parrafoUno Registro*/ 


    function ocultarUno(){
        document.getElementById('parrafoUno').style.cssText = 'transition : all 0.5s ; display : none';
        /*document.getElementById('parrafo').style.transition = "all 1s";   */ 

    }
 
    function mostrarUno(){
        document.getElementById('parrafoUno').style.display ="block";   

    }

function mostrarOcultarUno(){
    let uno = document.getElementById('parrafoUno')
    if (uno.style.display == "none"){
       mostrarUno();
    }
    else{ 
        ocultarUno();
    }    
    
}

/*ocultar/mostrar parrafos del contenido   //parrafoDos dentro del WAYS*/ 


function ocultarDos(){
    document.getElementById('parrafoDos').style.cssText = 'transition : all 0.5s ; display : none';
    /*document.getElementById('parrafo').style.transition = "all 1s";   */ 

}

function mostrarDos(){
    document.getElementById('parrafoDos').style.display ="block";   

}

function mostrarOcultarDos(){
let dos = document.getElementById('parrafoDos')
if (dos.style.display == "none"){
   mostrarDos();
}
else{ 
    ocultarDos();
}    

}


/*ocultar/mostrar parrafos del contenido   //parrafoTres Menu horizontal*/ 


function ocultarTres(){
    document.getElementById('parrafoTres').style.cssText = 'transition : all 0.5s ; display : none';
    /*document.getElementById('parrafo').style.transition = "all 1s";   */ 

}

function mostrarTres(){
    document.getElementById('parrafoTres').style.display ="block";   

}

function mostrarOcultarTres(){
let dos = document.getElementById('parrafoTres')
if (dos.style.display == "none"){
   mostrarTres();
}
else{ 
    ocultarTres();
}    

}

/*ocultar/mostrar parrafos del contenido   //parrafoCuatro Menu horizontal*/ 


function ocultarCuatro(){
    document.getElementById('parrafoCuatro').style.cssText = 'transition : all 0.5s ; display : none';
    /*document.getElementById('parrafo').style.transition = "all 1s";   */ 

}

function mostrarCuatro(){
    document.getElementById('parrafoCuatro').style.display ="block";   

}

function mostrarOcultarCuatro(){
let dos = document.getElementById('parrafoCuatro')
if (dos.style.display == "none"){
   mostrarCuatro();
}
else{ 
    ocultarCuatro();
}    

}
 




function secu(){


   setTimeout (ways1, 700);
}

function ways1(){

    
    document.getElementById('ways1').style.display = "none";
    document.getElementById('ways2').style.display = "block";
    document.getElementById('ways3').style.display = "none";

    setTimeout (ways2, 700);

}


function ways2(){

    
    document.getElementById('ways1').style.display = "none";
    document.getElementById('ways2').style.display = "none";
    document.getElementById('ways3').style.display = "block";

    setTimeout (ways3, 700);

}

function ways3(){

    
    document.getElementById('ways1').style.display = "block";
    document.getElementById('ways2').style.display = "none";
    document.getElementById('ways3').style.display = "none";



}


function pulse(){

document.getElementById('pulse').innerHTML = '<img src="./img/iconWebWaysPulse.png">';
document.getElementById('pulse').style.cssText = "z-index : 100; border : 2px solid red; transition : all 1s";   

}

function nautilus(){
  
    document.getElementById('p2pb2bSection').style.display = "none";
    document.getElementById('dextradeSection').style.display = "none";
        
    document.getElementById('nautilusSection').style.display = "block";
    document.getElementById('nautilusSection').style.display = "flex";

    document.getElementById('bNautilus').style.background = "#081921";
    document.getElementById('bNautilus').style.color = "#02ddfd";
    /*document.getElementById('pestania').style.background = "#081921";*/

    document.getElementById('bP2pb2b').style.background = "#e9ebea";
    document.getElementById('bP2pb2b').style.color = "#020202";

    document.getElementById('bDextrade').style.background = "#e9ebea";
    document.getElementById('bDextrade').style.color = "#020202";
 
    document.getElementById('bNautilus').style.marginTop = '-2px';
    document.getElementById('bP2pb2b').style.marginTop = "2px";
    document.getElementById('bDextrade').style.marginTop = "2px";



}

function p2pb2b(){
  
    document.getElementById('nautilusSection').style.display = "none";
    document.getElementById('dextradeSection').style.display = "none";

    document.getElementById('p2pb2bSection').style.display = "block";
    document.getElementById('p2pb2bSection').style.display = "flex";

    document.getElementById('bP2pb2b').style.background = "#0d1263";
    document.getElementById('bP2pb2b').style.color = "#f8f7fc";
    /*document.getElementById('pestania').style.background = "#0d1263";*/

    document.getElementById('bNautilus').style.background = "#e9ebea";
    document.getElementById('bNautilus').style.color = "#020202";

    document.getElementById('bDextrade').style.background = "#e9ebea";
    document.getElementById('bDextrade').style.color = "#020202";
  
    document.getElementById('bP2pb2b').style.marginTop = '-2px';
    document.getElementById('bNautilus').style.marginTop = "2px";
    document.getElementById('bDextrade').style.marginTop = "2px";
}


function dextrade(){
  
    document.getElementById('nautilusSection').style.display = "none";
    document.getElementById('p2pb2bSection').style.display = "none";
                             
    document.getElementById('dextradeSection').style.display = "block";
    document.getElementById('dextradeSection').style.display = "flex";

    document.getElementById('bDextrade').style.background = "#1d2841";
    document.getElementById('bDextrade').style.color = "#eac2a8";
    /*document.getElementById('pestania').style.background = "#1d2841";*/

    document.getElementById('bP2pb2b').style.background = "#e9ebea";
    document.getElementById('bP2pb2b').style.color = "#020202";
   
    document.getElementById('bNautilus').style.background = "#e9ebea";
    document.getElementById('bNautilus').style.color = "#020202";

    document.getElementById('bP2pb2b').style.marginTop = '2px';
    document.getElementById('bNautilus').style.marginTop = "2px";
    document.getElementById('bDextrade').style.marginTop = "-2px";
}


/* selector de pestaña de wallet*/

function MetaMask(){
    document.getElementById('MetaMaskSection').style.display = "Block"
    document.getElementById('TrustWalletSection').style.display = "none"
    document.getElementById('bMeta').style.background = "#f68c24"
    document.getElementById('bMeta').style.color = "#ffffff"

    document.getElementById('bTrust').style.background = "#e9ebea" /*efecto desactivado*/
    document.getElementById('bTrust').style.color = "#020202";
    

}


function TrustWallet(){
    document.getElementById('MetaMaskSection').style.display = "none"
    document.getElementById('TrustWalletSection').style.display = "Block"
    document.getElementById('bTrust').style.background = "#3375bb"
    document.getElementById('bTrust').style.color = "#ffffff";

    document.getElementById('bMeta').style.background = "#e9ebea" /*efecto desactivado*/
    document.getElementById('bMeta').style.color = "#2c3e50"


  
}




function idi(val){
    switch (val){
        case "1":
          document.getElementById('flag').src="./img/Eng.png" 
          location.href="index.html";
        break;
        case "2":
          document.getElementById('flag').src="./img/Esp.png"
          location.href="index-esp.html";
        break;
        case "3":
          document.getElementById('flag').src="./img/Ger.png"
          location.href="index-ger.html";
        break;
        case "4":
          document.getElementById('flag').src="./img/Rus.png"
          location.href="index-rus.html";
        break;
        case "5":
            document.getElementById('flag').src="./img/Chi.png"
            location.href="index-chi.html";
          break;
   
       }


    }