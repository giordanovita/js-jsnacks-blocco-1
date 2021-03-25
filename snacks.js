

/* function zucch1(){

var arr = [
    {
        'var': 'zucch',
        'peso': 10,
        'lung':15
    },
    {
        'var': 'zucch',
        'peso': 11,
        'lung':15
    },
    {
        'var': 'zucch',
        'peso': 12,
        'lung':15
    },
    {
        'var': 'zucch',
        'peso': 13,
        'lung':15
    },
]

var sum=0

 for(var i=0; i<arr.length;i++){
    var zucchina= arr[i];
   sum += zucchina['peso'];
 }
  console.log(sum) 
 
}

function init(){
    zucch1()
}
init() */
//-------------------------------
 // Crea 10 oggetti che rappresentano una zucchina.
    // Dividi in due array separati le zucchine che misurano
    // meno o più di 15cm.
    // Infine stampa separatamente quanto pesano i due gruppi
    // di zucchine
/*
function pesoResult(zucchine) {
    var sommaPeso = 0;
    for (var i=0;i<zucchine.length;i++) {
        var zucchina = zucchine[i];
        sommaPeso += zucchina['peso'];
    }
    return sommaPeso;
}


function zucch2() {
    
    var zucchine = [
        {
            'varieta': 'var1',
            'peso': 10,
            'lung': 12
        },
        {
            'varieta': 'var1',
            'peso': 13,
            'lung': 20
        },
        {
            'varieta': 'var1',
            'peso': 2,
            'lung': 7
        },
        {
            'varieta': 'var1',
            'peso': 15,
            'lung': 32
        },
        {
            'varieta': 'var1',
            'peso': 2,
            'lung': 10
        },
        {
            'varieta': 'var1',
            'peso': 15,
            'lung': 32
        },
        {
            'varieta': 'var1',
            'peso': 15,
            'lung': 32
        },
        {
            'varieta': 'var1',
            'peso': 15,
            'lung': 32
        },
        {
            'varieta': 'var1',
            'peso': 15,
            'lung': 32
        },
        {
            'varieta': 'var1',
            'peso': 5,
            'lung': 8
        }
    ];    
    var small = [];
    var big = [];
    for (var i=0;i<zucchine.length;i++) {
        var zucchina = zucchine[i];
        var lunghezza = zucchina['lung'];
        if (lunghezza > 15) {
            big.push(zucchina);
        } else {
            small.push(zucchina);
        }
    }
    var sommaPesoInf = pesoResult(small);
    var sommaPesoMax = pesoResult(big);
       
        console.log('tutte le zucchine che misurano meno di 15cm: ', small);
        console.log('somma dei pesi delle zucchine inferiori a 15cm: ', sommaPesoInf);
        
        console.log('tutte le zucchine che misurano più di 15cm: ', big);
        console.log('somma dei pesi delle zucchine maggiori a 15cm: ', sommaPesoMax);
       
 }
function init() {  
    zucch2();
}

init()
 

//-------------------------------
/* Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) */ 

   
    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return console.log(newString);
    }

function init(){
    reverseString('ciao');
}

init() 

//-------------------------------
/* Scrivi una funzione che fonda due array (aventi lo stesso
    numero di elementi) prendendo alternativamente gli
    elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].  */


    function conc(){

        var a = ['a','b','c'];
        var b = [1,2,3];

        var c=[];


        for(var i=0; (i<a.length)&&(i<b.length); i++){
            var aUno = a[i];
            var bUno = b[i];

            c.push(aUno,bUno);
        }
        console.log(c)
    }

    function init(){
        conc()   
     }
    
    init() 
    
//-------------------------------
/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al
massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra "a" e "b" */
 

 function splitter(min, max, array) {
    var res= [];
    for(var i=min; i<=max; i++){
        var value = array[i];
           res.push(value)
        
    }
    return console.log(res);

}
 function esArraySplitter() {
    var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    var indMin = 3;
    var indMax = 7;

    var splitted = splitter(indMin, indMax, arr);
}
esArraySplitter()   