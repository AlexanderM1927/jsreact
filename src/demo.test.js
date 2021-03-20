describe('Probando objetos', ()=> {

    test('Debe iguales',() => {
        const can1 = {
            flavor: 'grape',
            ounces: 12
        }
        const can2 = {
            flavor: 'grape',
            ounces: 12
        }
        expect(can1).toEqual(can2)
    
    
    })


})

