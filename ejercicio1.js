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
