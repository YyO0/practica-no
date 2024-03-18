


const fs=require("fs");




const crearArchivo=async(num,lll,limite)=>{
    let salida="";
    try{
        for(let i =1;i<=limite;i++){
            salida+= ` ${num}x${i} = ${i*num} \n`
        }
        
            if(lll==true){
            console.log(salida)
            fs.writeFileSync(`./salida/tabla-${num}.txt`,salida)
            }
            
            console.log(`tabla-${num}.txt `)
        
        
    }catch(e){
        throw e
    }
    
    }
    


module.exports={
    crearArchivo
}