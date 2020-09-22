alert("¡Hola Mundo 2!");
function mostrarVariables(){
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
