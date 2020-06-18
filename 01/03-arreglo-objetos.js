const personas = []

const persona1 = {
    nombre: "Rodrigo",
    apellido: "Treviño",
    edad: 34
}

personas[0] = persona1


const persona2 = {
    nombre: "Quetzal",
    apellido: "Romero",
    edad: 20
}

personas [1] = persona2


const persona3 = {
    nombre: "Alberto",
    apellido: "Fraga",
    edad: 38
}

personas.push(persona3)


console.log("numero de personas:",personas.length);


for(let persona of personas) {
    console.log("una persona:",persona);
}


