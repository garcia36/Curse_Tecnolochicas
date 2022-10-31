function convertidorGrados(farenheit){
    return (5/9)*(farenheit-32);
}
console.log(convertidorGrados(100));

let aCelcius=(fahrenheit)=>(5/9)*(fahrenheit-32);
console.log(aCelcius(100));

let myfuntion = (param) => {
    console.log(param);
}
myfuntion('Hola :)');


function saludo(name){
    console.log(name);
}
function procesadorCallBack(callback){
    const nombre = "omar"
    callback(nombre);
}
procesadorCallBack(saludo)



let sum=(a,b)=> a+b;
//alert(sum(2,2));
let suma=(a,b)=>{
    return a+b
}
//alert(sum(4,2));