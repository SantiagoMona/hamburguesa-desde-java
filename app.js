let root = document.getElementById("root");


/////////
////////////////////////////////////////////////////// TEMAS PARA LA PAGINA//////
// CONTENEDOR GENERAL

let containerTemas = document.createElement("div");
containerTemas.classList.add("container");
root.appendChild(containerTemas);

// ROW
let rowTemas = document.createElement("div");
rowTemas.classList.add("row");
rowTemas.setAttribute("style","padding: 5%")

containerTemas.appendChild(rowTemas);
//COL
let divContainer =document.createElement("div");
divContainer.classList.add("col-md-6");
containerTemas.appendChild(divContainer);

//SELECT 

let select = document.createElement("select"); 
select.style.backgroundColor = "transparent";
select.classList.add("form-select");
select.setAttribute("id","tema")
select.setAttribute("onchange","cambiarTema()")
divContainer.appendChild(select);

/// OPCIONES DE TEMAS
// OPCION 1
let option1 = document.createElement("option");
option1.innerHTML="tema oscuro";
option1.setAttribute("value","oscuro");
select.appendChild(option1);

// OPCION 2 

let option2 = document.createElement("option");
option2.innerHTML="tema claro";
option2.setAttribute("value","claro");
select.appendChild(option2);

// OPCION 3
let option3 = document.createElement("option");
option3.innerHTML="tema LIBRE";
option3.setAttribute("value","libre");
select.appendChild(option3);

///////////////

let texAndImg=[
    {imgs:"images/hamburguesa-1.webp",precio:"$ 8.900",info:"1  sandwich BBQ Crunch (1 filete de pollo apanado)",nombre:"BBQ Crunch."},
    {imgs:"images/hamburguesa-2.webp",precio:"$ 15.900",info:"1 sandwich BBQ Crunch(1 filete de pollo apanado)+ 1 papa pequeña +1 gaseosa cocacola",nombre:"Kentucky sandwich."},
    {imgs:"images/hamburguesa-3.webp",precio:"$ 15.900",info:"1 Kentucky hambuerguesa/sandwich (1 filete de pechuga de pollo apanado,pepinillos)",nombre:"combo BBQ Crunch."},
    {imgs:"images/hamburguesa-4.webp",precio:"$ 21.900",info:"1 Kentucky coronel hambuerguesa/sandwich(1 filete de pechuga apanada,ensaladay papas)",nombre:"combo Kentucky Sandwich."},
    {imgs:"images/hamburguesa-5.webp",precio:"$ 16.900",info:"1 Kentucky coronel hambuerguesa/sandwich(1 filete de pechuga apanada,ensaladay papas)",nombre:"Kentucky Coronel sandwich."},
    {imgs:"images/hamburguesa-6.webp",precio:"$ 22.900",info:"1 Kentucjy coronel hambuerguesa/sandwich(1 filete de pechuga de pollo apanado, ensalada,papas,cocacola)",nombre:"combo Kentucky coronel sandwich."},
    {imgs:"images/hamburguesa-7.webp",precio:"$ 23.900",info:"1 sandwich Crispy BBQ (1 filete de pechuga extra grade, triple empanizado, cebolla,doble queso)",nombre:"sandwich Crispy BBQ."},
    {imgs:"images/hamburguesa-8.webp",precio:"$ 29.900",info:"1 sandwich Crispy BBQ (1 filete de pechuga extra grade, triple empanizado, cebolla,doble queso y cocacola)",nombre:"combos andwich Crispy BBQ."},
    
]
//CONTENEDOR GENERAL
let container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);
// row 
let row = document.createElement("div");
row.classList.add("row","mt-5");
row.setAttribute("style","padding: 5%")
container.appendChild(row);

texAndImg.forEach(dato => {
    //COLUMNA
    let col = document.createElement("div");
    col.classList.add("col-md-3","card-group");
    col.setAttribute("style","padding: 15px")
    row.appendChild(col);

    // CARD
    let card = document.createElement("div");
    card.classList.add("card");
    col.appendChild(card);

    // BODY CARD
    let BodyCArd = document.createElement("div");
    BodyCArd.classList.add("card-body")
    card.appendChild(BodyCArd)

    //IMAGEN 
    let imagen = document.createElement("img");
    imagen.classList.add("img-fluid");
    imagen.setAttribute("src",dato.imgs);
    BodyCArd.appendChild(imagen);
    
    // PRECIO///

    let pres = document.createElement("p");
    pres.innerHTML=dato.precio;
    BodyCArd.appendChild(pres);

    // NOMBRE ///
    let name = document.createElement("h3");
    name.innerHTML=dato.nombre;
    BodyCArd.appendChild(name);

    //TEXTO
    let p = document.createElement("p");
    p.innerHTML=dato.info;
    BodyCArd.appendChild(p);


    //BOTON
    let boton = document.createElement("button");
    boton.classList.add("btn", "btn-danger","mt-5");
    boton.innerHTML = "BUY";
    card.appendChild(boton);

})




/////// FUNCION DE CAMBIAR TEMA //// 
function cambiarTema() {
    let tema = document.getElementById("tema");

    if (tema.value == "oscuro") {
        document.body.classList.toggle("theme-oscuro")
        document.body.classList.remove("theme-claro","theme-free")

    }else if (tema.value == "claro") {
        document.body.classList.toggle("theme-claro")
        document.body.classList.remove("theme-oscuro","theme-free")


    }else if (tema.value == "libre") {
        document.body.classList.toggle("theme-free")
        document. body.classList.remove("theme-claro","theme-oscuro")

    }
}
