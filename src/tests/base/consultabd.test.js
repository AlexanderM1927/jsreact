import {getEmpleadoById} from '../../base/consultabd'

describe('Prueba simulando tiempos consulta bd', ()=>{

    test('Testear consulta a bd',(done) =>{
        const id = 79854865
        getEmpleadoById(id).then( empleado => {
            expect(empleado.id).toBe(79854865)
            done()
        })
    
    })
})

