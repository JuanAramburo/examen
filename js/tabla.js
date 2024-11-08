var presion = [
    {
    "nombre": "Jose Hernandez",
    "dia": 1,
    "presion_arteria": 137
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 2,
    "presion_arteria": 123
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 3,
    "presion_arteria": 115
    }, 
    {
    "nombre": "Jose Hernandez",
    "dia": 4,
    "presion_arteria": 128
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 5,
    "presion_arteria": 132
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 6,
    "presion_arteria": 118
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 7,
    "presion_arteria": 125
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 8,
    "presion_arteria": 130
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 9,
    "presion_arteria": 121
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 10,
    "presion_arteria": 134
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 11,
    "presion_arteria": 116
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 12,
    "presion_arteria": 127
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 13,
    "presion_arteria": 136
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 14,
    
    "presion_arteria": 119
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 15,
    "presion_arteria": 138
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 16,
    "presion_arteria": 122
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 17,
    "presion_arteria": 129
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 18,
    "presion_arteria": 117
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 19,
    "presion_arteria": 135
    },
    {
    "nombre": "Jose Hernandez",
    "dia": 20,
    "presion_arteria": 114
    }
]

function mostrar(){
    let tablas = document.getElementById("tabla").querySelector("tbody");
    tablas.innerHTML = "";
    for(let con=0;con<presion.length;con++){
        tablas.innerHTML +=
        "<td>" + presion[con].nombre + "<td>" + presion[con].dia + "<td>" + presion[con].presion_arteria;
    }
}

mostrar();

function calPromedio(){
    let suma = 0;
    for(let con = 0;con<presion.length;con++){
        suma += presion[con].presion_arteria;
    }
    let pro = suma / 20;
    return pro;
}

function estadoPresion(){
    if(pro < 120){
        return "Normal";
    }else if(pro >= 120 && pro < 129){
        return "Elevada";
    }else if(pro >= 130){
        return "Alta"
    }
}

let pro = calPromedio();
let estado = estadoPresion();
document.getElementById("promedio").textContent = "El promedio de la presion arterial es: " + pro;
document.getElementById("estado").textContent = "El estado de la presion arterial es: " + estado;