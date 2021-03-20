import empleados from '../basededatos/bd'

const getEmpleadobaseById = (id) => empleados.find( (emp) => emp.id === id );

//const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );



export const getEmpleadoById = (id) => {
    return new Promise( (resolve, reject) => {
       setTimeout(() => {
           const pers = getEmpleadobaseById(id)
           if(pers){
               resolve(pers)
           }else{
               reject('No lo encontro')
           }
       },2500)
    })
} 