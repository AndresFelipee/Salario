let nombre
let cantidad = 0;
let salario = 0;
let extra = 0;
let total = 0;

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    LeerDatos();
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    cantidad = Number(document.getElementById('cantidad').value)
    Validar(nombre, cantidad)
}

function Validar(nombre, cantidad){
    if(isNaN(nombre)==true|| isNaN(cantidad)==false || nombre.lenght )(cantidad<=0)
    swal("ATENCIÓN", "Número de horas no valido", "warning");
    else
    if(cantidad>0 && cantidad<=40){
        salario = cantidad * 8000
    }
    else
    if (cantidad>40){
        extra = (12000 * (cantidad-40))
    }
   else{
        total = extra + salario
   }
}

console.log(total)



 