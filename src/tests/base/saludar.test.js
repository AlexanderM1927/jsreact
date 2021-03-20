import saludar from '../../base/saludar'

describe('Todo relacionado saludo', () =>{


    test('Prueba saludo con nombre', () =>{

        let nombre = 'Fredy'
    
        let saludo = saludar(nombre)
        
    
        expect(saludo).toBe('Hola Fredy')
    })
    
    test('Prueba saludo sin nombre', () =>{
    
        
    
        let saludo = saludar()
        
    
        expect(saludo).toBe('Hola Anonimus')
    })

})
