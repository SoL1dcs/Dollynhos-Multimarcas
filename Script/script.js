

const noveNoveOnze = ['Porshe' , '991 Turbo s'];
const m3E46GTR = ["BMW", "M3 E46 GTR"]
const rs5SB = ["Audi", "RS 5 Sportback"]
const skylineR34GTR = ["Nissan", "Skyline R34 GTR"]
const supraMK4 = ["Toyota", "Supra MK4"]
const silvia = ["Nissan", "Silvia S15"]

const Porshe = [noveNoveOnze]

const main_string = [ "Porshe" , "BMW" , "Audi" , "Nissan" , "Toyota" , "Nissan" ]
const main_stringCL = [ "PORSHE" , "BMW" , "AUDI" , "NISSAN" , "TOYOTA" , "NISSAN" ]
const main_stringLow = [ "porshe" , "bmw" , "audi" , "nissan" , "toyota" , "nissan" ]


var numeroDeCarros=6;



function pesquisar(){
    var input = document.getElementById('buscadorInput').value
    if (input != ''){
        console.log(input)
        showOff();
    }
    else{
        showOn();
    }
    var menuBruto = document.getElementById('opcaoMarca')
    var menu = menuBruto.value

    if ( menu == 'Porshe'){
        showOff();
        isPorshe(menu);
    }

    if( menu == 'Bmw'){
        showOff();
        isBmw(menu);
    }

    isPorshe(input);
    isAudi(input);
    isBmw(input);
    isNissan(input);
    isToyota(input);

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

function isPorshe(input){
    if (input === 'Porshe' || input === 'PORSHE' || input === 'porshe'){
        document.getElementById('noveNoveOnze').style.display = 'inline';
    }
}

function isBmw(input){
    if (input === 'Bmw' || input === 'BMW' || input === 'bmw'){
        document.getElementById('m3E46GTR').style.display = 'inline';
    }
}

function isAudi(input){
    if (input === 'Audi' || input === 'AUDI' || input === 'audi'){
        document.getElementById('rs5SB').style.display = 'inline';
    }
}
function isNissan(input){
    if (input === 'Nissan' || input === 'NISSAN' || input === 'nissan'){
        document.getElementById('skylineR34GTR').style.display = 'inline';
    }
}
function isToyota(input){
    if (input === 'Toyota' || input === 'TOYOTA' || input === 'toyota'){
        console.log(input)
        document.getElementById('supraMK4').style.display = 'inline';
    }
}

    /*
    if ( input === 'Porshe'){
        document.getElementById('noveNoveOnze').style.display = 'inline';
    }
    if ( input === 'BMW'|| input === 'Bmw'){
        document.getElementById('m3E46GTR').style.display = 'inline';
    }

    if ( input === 'Audi'){
        document.getElementById('rs5SB').style.display = 'inline';
    }*/


/*
const modelosString = [
noveNoveOnze = {
    marca:'Porshe',
    modelo:'991 Turbo s'
}, 
m3E46GTR = {
    marca:'BMW',
    modelo:'M3 E46 GTR'
}, 
rs5SB= {
    marca:'Audi',
    modelo:'RS 5 Sportback'
},
skylineR34GTR = {
    marca:'Nissan',
    modelo:'Skyline R34 GTR'
}, 
SupraMK4 = {
    marca:'Toyota',
    modelo:'Supra MK4'
}, 


silviaObj ={
    marca:'Nissan',
    modelo:'Silvia S15',
}] 
*/