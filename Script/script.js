//Marcas para controlar inventario
//obs: Nunca mudar order
const marcasJap = ['nissan' , 'toyota']
const marcasEuro = ['audi' , 'bmw' , 'porshe' ]

const modelos = [
    noveNoveOnze={
        marca:'porshe',
        modelo:'911'
    },
    m3E46GTR = {
        marca:'bmw',
        modelo:'m3'
    },
    rs5SB= {
        marca:'audi',
        modelo:'rs'
    },
    skylineR34GTR = {
        marca:'nissan',
        modelo:'skyline'
    }, 
    SupraMK4 = {
        marca:'toyota',
        modelo:'supra'
    },
    silviaObj ={
        marca:'nissan',
        modelo:'silvia',
    }] 

    //NOVOS MODELOS SERÃO INCLUSOS AQUI


function pesquisar(){  
    var formValueNativo= document.getElementById('buscadorInput').value
    var formValue = formValueNativo.toLowerCase();

   var main_loop = 0;

   if (formValue != ''){
    showOff();
    }
    else{
    showOn();
    }

    
            isPorshe(formValue)
            isBmw(formValue)
            isAudi(formValue)
            isNissan(formValue)
            isToyota(formValue)


            isNoveNoveOnze(formValue);
            isM3E46GTR(formValue)
            isRs5SB(formValue)
            isSkylineR34GTR(formValue)
            isSupraMK4(formValue)
            isSilviaS15(formValue)
            //NOVAS FUNÇÕES SERÃO INCLUSAS AQUI

    }

    //marcas
    //Template
    /*
    function isMARCA(input){
            if (input === 'MARCA'){
                document.getElementById('ID').style.display = 'inline';//Carros que seram afetatos
            }
        }
    */
    function isPorshe(input){
        
        if (input === marcasEuro[2]){
            document.getElementById('noveNoveOnze').style.display = 'inline';
        }
    }



    function isBmw(input){
        console.log(input)
        if (input === marcasEuro[1]){
            document.getElementById('m3E46GTR').style.display = 'inline';
        }
    }

    function isAudi(input){
        if (input === marcasEuro[0]){
            document.getElementById('rs5SB').style.display = 'inline';
        }
    }
    function isNissan(input){
        if (input === marcasJap [0] ){
            document.getElementById('skylineR34GTR').style.display = 'inline';
            document.getElementById('silvia').style.display = 'inline';
        }
    }
    function isToyota(input){
        if (input === marcasJap [1]){
            document.getElementById('supraMK4').style.display = 'inline';
        }
    }  

    function showOff(){
        document.getElementById('noveNoveOnze').style.display = 'none';
        document.getElementById('m3E46GTR').style.display = 'none';
        document.getElementById('rs5SB').style.display = 'none';
        document.getElementById('skylineR34GTR').style.display = 'none';
        document.getElementById('supraMK4').style.display = 'none';
        document.getElementById('silvia').style.display = 'none';
    }

    function showOn(){
        document.getElementById('noveNoveOnze').style.display = 'inline';
        document.getElementById('m3E46GTR').style.display = 'inline';
        document.getElementById('rs5SB').style.display = 'inline';
        document.getElementById('skylineR34GTR').style.display = 'inline';
        document.getElementById('supraMK4').style.display = 'inline';
        document.getElementById('silvia').style.display = 'inline';   
    }


    //Modelo
    //Template
    /*
    function isMODELO(input){
        if (input === OBJETO){
            document.getElementById('noveNoveOnze').style.display = 'inline';//ID
        }
        
    }*/
    function isNoveNoveOnze(input){
        if (input === modelos[0].modelo){
            document.getElementById('noveNoveOnze').style.display = 'inline';
        }
        
    }

    function isM3E46GTR(input){
        if (input === modelos[1].modelo){
            document.getElementById('m3E46GTR').style.display = 'inline';
        }
    }

    function isRs5SB(input){
        if (input === modelos[2].modelo){
            document.getElementById('rs5SB').style.display = 'inline';
        }
    }

    function isSkylineR34GTR(input){
        if (input === modelos[3].modelo){
            document.getElementById('skylineR34GTR').style.display = 'inline';
        }
    }

    function isSupraMK4(input){
        if (input === modelos[4].modelo){
            document.getElementById('supraMK4').style.display = 'inline';
        }        
    }

    function isSilviaS15(input){
        if (input === modelos[5].modelo){
            document.getElementById('silvia').style.display = 'inline';
        }
    }
