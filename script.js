
"user strict";


const {crearArchivo}=require("./helpers/multiplicar");
const {argv}=require("./config/yargs");


console.clear()

crearArchivo(argv.b,argv.l,argv.h)
.then((crearArchivo)=>{return crearArchivo})
.catch((error)=>{
    console.log("Ha ocurrido un error:", error);
}) 