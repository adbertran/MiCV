
 /* document.getElementById('boton_info').addEventListener("click",function(){
    console.log ("Agregue un evento click ");
    
    document.body.style.backgroundColor = 'grey';
    
    window.open("https://www.argar.cat", "Diseño Web", "width=300, height=200");

}); */

document.getElementById('boton_enviar').addEventListener("click", function(){

console.log ("funciona el boton");

alert("Muchas Gracias. Lo antes posible me pondre en contacto para resolver su consulta.");






alert("Estimado "+ document.getElementById('formulario_nombre').val + "Monto de la venta (Sin IVA): $"+montoventa+"\nImpuesto al Valor Agregado(IVA): $"+iva+"\nTotal a pagar: $"+totalpagar);

/* document.formulario_contacto.submit(); */

    

});