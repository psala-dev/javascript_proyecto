/*
const productos = []
const agregarProducto = () => {
    const id = prompt("ingresa el id del producto");
    const nombre = prompt("ingrese el nombre del producto");
    const producto = {id: id, nombre: nombre};
    // podria ser escrito asi: const producto = {id, nombre}
    productos.push(producto);
}
agregarProducto();
console.log(productos);
*/

// Solicita nombre al usuario.
let nombre = prompt("Bienvenida/o, ingresá tu nombre para continuar.");
// Solicita cantidad de libros a ingresar
let cantidadLibros = parseInt(prompt("¿Cuántos libros querés ingresar?"));
// Guarda datos solicitados
const listadoLibros = []
const agregarLibro = () => {
    // Solicita titulo
    const titulo = prompt("Ingresá el titulo del libro.");
    // Solicita autor
    const autor = prompt("Ingresá el nombre del autor.");
    // Solicita prioridad
    const prioridad = parseInt(prompt("Ingresá el numero de prioridad asignado segun la siguiente escala 1(muy alta) 5 (muy baja)."));
    const favoritos = {prioridad, titulo, autor};
    listadoLibros.push(favoritos)
}
for(i=0; i<cantidadLibros; i++){
    agregarLibro();
}

console.log("Bienvenida/o " + nombre + ". Aquí está tu listado:");
console.table(listadoLibros); 





//function ingresarNombre(){
 /*   let nombre = prompt("Bienvenida/o, ingresá tu nombre para continuar.");
    while(nombre != ""){
       if(nombre == ""){
            alert("Ingresá tu nombre, por favor.")
        }else{
            console.log("Bienvenida/o " + nombre + ". Aquí está tu listado:");
    }
    nombre = prompt("Bienvenida/o, ingresá tu nombre para continuar.");
}
//}
//ingresarNombre();

const listadoLibros = [];
 
// Solicita cantidad de libros
//function cantidadLibros(){
    let cantidad = parseInt(prompt("Ingresá la cantidad de libros deseada."));
    if(cantidad == ""){
        alert("Ingresá un número, por favor.")
    }else{
        console.log(cantidad);}

        let titulo = prompt("Ingresá el titulo del libro.");
        if(titulo == ""){
            alert("Ingresá un titulo, por favor.")
        }else{
            console.log(titulo);}
    
            let autor = prompt("Ingresá el nombre del autor.");
            if(autor == ""){
                alert("Ingresá un autor, por favor.")
            }else{
                console.log(autor);}

                let prioridad = parseInt(prompt("Ingresá el numero de prioridad asignado segun la siguiente escala 1(muy alta) 5 (muy baja)."));
                if((prioridad == "")||(prioridad > 5)){
                    alert("Ingresá un número entre uno y cinco, por favor.")
                }else{
                    console.log(prioridad);}
console.log(listadoLibros = (prioridad, titulo, autor));                
  //  while(cantidad == ""){
    //    alert("Ingresá un número, por favor.")
    //}
//}
//cantidadLibros();

//for (cantidad = 0, cantidad < Infinity, cantidad ++)
 
//ingrese cantidad de libros a agregar
/*let agregarLibro = parseInt(prompt("¿Cuántos libros deseas agregar a tu lista?")); 
//cantidad debe ser diferente a vacio
//si agregarlibro diferente a numero y a vacio, avisar y volver a pedir
if((agregarLibro == null)||(agregarLibro == String)){
    alert("Debe ingresar la cantidad.")
}
// repetir hasta cantidad de libros a agregar
/*
pedir titulo prompt("¿Cuál es el título?")ñ
pedir autor prompt(como se llama el autor)
pedir prioridad especifica la prioridad del libro uno es prioridad muy alta 5 es prioridad muy baja


si autor titulo y prioridad diferente vacio entonces ingrese datos

prioridad entre 1 y 5 debe ser numero si o si
numero menor a 5 
si numero mayor a 5 entonces debe ingresar otro numero
si numero diferente a numero entonces debe ingresar numero
mostrar bienvenido mas nombre
si datos correctos guardar armar lista ordenar por prioridad mostrar en pantalla 


const titulo = prompt("Ingrese titulo:");

const autor = prompt("Ingrese autor");

const prioridad = parseInt(prompt("Ingrese prioridad"));

if(prioridad <= 5){
    console.log(prioridad, autor, titulo);
    //console.log(autor)
    //console.log(titulo);
}else{
    console.log("ingrese un numero entre el uno y el cinco")
}



//console.log()

/*
const librosDeseados = [];
const agregarLibro = () => {
    const titulo = prompt("Ingrese el titulo del libro");
    const autor = prompt("Ingrese el autor del libro");
    const prioridad = prompt("prioridad de lectura (1(alta) a 5(muy baja)");
    const libro = {id: prioridad, titulo, autor}
    librosDeseados.push(libro)
  // librosDeseados.sort(prioridad)
}
agregarLibro();
if(id <= 5){
    
}else{
    console.warn("Numero Incorrecto")
}
console.log(librosDeseados);
*/
/*
//const productos = []
//const agregarProducto = () => {
  //  const id = prompt("ingresa el id del producto");
    //const nombre = prompt("ingrese el nombre del producto");
    const producto = {id: id, nombre: nombre};
    // podria ser escrito asi: const producto = {id, nombre}
    productos.push(producto);
}
agregarProducto();
console.log(productos);


*/


//ingrese su nombre 
//let nombrePersona = prompt("¿Cuál es tu nombre?");
//nombre debe ser diferente a vacioif(nombrePersona == null){
//if(nombrePersona == null){
   // alert("Debe ingresar su nombre.")
//} 
//ingrese cantidad de libros a agregar
/*let agregarLibro = parseInt(prompt("¿Cuántos libros deseas agregar a tu lista?")); 
//cantidad debe ser diferente a vacio
//si agregarlibro diferente a numero y a vacio, avisar y volver a pedir
if((agregarLibro == null)||(agregarLibro == String)){
    alert("Debe ingresar la cantidad.")
}
// repetir hasta cantidad de libros a agregar
/*
pedir titulo prompt("¿Cuál es el título?")ñ
pedir autor prompt(como se llama el autor)
pedir prioridad especifica la prioridad del libro uno es prioridad muy alta 5 es prioridad muy baja


si autor titulo y prioridad diferente vacio entonces ingrese datos

prioridad entre 1 y 5 debe ser numero si o si
numero menor a 5 
si numero mayor a 5 entonces debe ingresar otro numero
si numero diferente a numero entonces debe ingresar numero
mostrar bienvenido mas nombre
si datos correctos guardar armar lista ordenar por prioridad mostrar en pantalla 


const titulo = prompt("Ingrese titulo:");

const autor = prompt("Ingrese autor");

const prioridad = parseInt(prompt("Ingrese prioridad"));

if(prioridad <= 5){
    console.log(prioridad, autor, titulo);
    //console.log(autor)
    //console.log(titulo);
}else{
    console.log("ingrese un numero entre el uno y el cinco")
}

*/





/*cafeteria
cafe  50
mocca  75 
deslactosado 65
cacpuccino 70
 cortado 70
cafe grande 60

ingrese el tipo de bebida que desea comprar
*/
