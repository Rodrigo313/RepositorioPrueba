alert("¡Hola Mundo 2!");
function mostrarVariables(){
    var variable1;
    alert('Variable1: ' + variable1); 
    alert('Variable2: ' + null);
    variable1 = 34;
    alert('Variable1: ' + variable1); 
    alert('Variable3: ' + 15.9); 
    alert('Multiplicacion: ' + variable1*variable3);  
    varaible3 = "Ahora soy un texto";
    alert('Variable3: ' + variable3); 
    alert('Multiplicacion2: ' + variable3*35); 
}
function comprobarOperadores(){
    var1 = "Hola";
    var2 = "Adiós";
    alert(var1==var2);
    alert(var1!=var2);
    alert(var1<var2);
    alert(var1>var2);
    alert(var1<=var2);
    alert(var1>=var2);
    var3 = 13;
    var4 = "trece";
    alert(var3==var4);
    alert(var3===var4);
    var5 = 15;
    var6 = 20;
    var7 = 25;
    alert(var5<var6<var7);
    alert(var5<=var6);
    alert(var6>var7);
    var7=!true;
    alert(var7);
}
function fecha(){
    var dia, mes, anio;
    dia = prompt("Introduce el día");
    mes = prompt("Introduce el mes");
    anio = prompt("Introduce el año");
    alert("Hoy es " + dia + " de " + mes + " de " + anio);
}
function numeros(){
    var num1;
    var num2;
    num1 = prompt("introduce el primer número");
    num2 = prompt("introduce el segundo número");
    alert("Multiplicación: " + num1*num2);
    if(num2 != 0){
        alert("División: " + num1/num2);
    }else{
        alert("Error");
    }
    alert("Resta: " + num1-num2);
    alert("Resta cuadrado" + (num1*num1)-(num2*num2));
    if(num1>0){
        alert(num1);
    }else if(num2>0){
        alert(num2);
    }else if((num1>0)&&(num2>0)){
        alert(num1,num2);
    }
}
function estructurasControl(){
    function meses(){
        var arrayMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        for(let i = 0; i < 12; i++){
            console.log(arrayMeses[i]);
        }
    }
    function factorial(num){
        var numFactorial;
        numFactorial = prompt("Introduce un número");
        var total = 1;
        for (i=1;1<=num;i++){
            total = total * i;
        }
        alert("Factorial: " + factorial(numFactorial));
    }

    function netflix(){
        var edad;
        edad = prompt("Introduce tu edad");
        if(edad < 7){
            alert("Patrulla Canina");
        }else if((edad>7)&&(edad<13)){
            alert("Alexa y Katie");
        }else if((edad>14)&&(edad<18)){
            alert("Anne with an E");
        }else if((edad>19)&&(edad<35)){
            alert("Stranger Things");
        }else if(edad>35){
            alert("Sherlock");
        }
    }

    function bucle(){
        var num;
        while((num<45)||(num>72)){
            num = prompt("Introduce un número");
        }
    }
}
function ambitoVariables(num){
    var soyDeLaFuncion = "soyDeLaFuncion sin ámbito de bloque";
    //const soyConstante = "soyConstante sin ámbito de bloque";
    if(num == 1){
        let soyDelIf = "declarada dentro del bloque if";
        soyDeLaFuncion = "soyDeLaFuncion modificada dentro del if";
    } else {
        const soyConstante = "soyConstante declarada en el else";
    }
    soyConstante = "soyConstante modificada tras el else";
    console.log("soyDeLaFuncion: " + soyDeLaFuncion);
    console.log("soyConstante: " + soyConstante);
    console.log("soyDelIf: " + soyDelIf);
}
function textoExclamacion(){
    var texto;
    texto = prompt("Introduce un texto");
    console.log("¡ " + texto + " !");
}
function numImpares(){
    var nums = 1;
    while(nums<=35){
        if(nums%2!=0){
            console.log(nums);
            nums++;
        } 
    }
}
function numImpares2(){
    for (let nums2 = 1; nums2 <= 35; nums2++){
        if(nums2%2 != 0){
            console.log(nums2);
        }
    }
}
