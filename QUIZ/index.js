// PUNTO 1

const tasks = [
    {nombre:'Lavar', id:1, completada: false},
    {nombre:'Brincar', id:2, completada: false },
    {nombre:'Jugar', id:3, completada: false },
    {nombre:'EEstregar', id:4, completada: false },
    {nombre:'Nadar', id:5, completada: false},
    {nombre:'Correr', id:6, completada: false },
    {nombre:'Sacar perro', id:7, completada: false},
 ]

 const completedTrue = (tasks, id) => {
    tasks.forEach(element => {
        if (element.id === id) {
            element.completada = true
        }
       
    });

 }

completedTrue(tasks, 4)
console.log(tasks)

// PUNTO 2

 const cities = [
    {nombre:'Cali', poblacion:1000,},
    {nombre:'Medellin', poblacion:222,},
    {nombre:'Bogota', poblacion:5000, },
 ]

 const biggestPoblation = (cities) => {
    let newArr = [0]
    cities.forEach(element => {
        if(element.poblacion )
            // NO ALCANCÉ PROFEEEE JAJAJA
    });

 }
 console.log(biggestPoblation(cities))