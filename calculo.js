 
 
 //get elements and values
    const getWeight = document.getElementById(`weight`)
    const getHeight = document.getElementById(`height`)
    const getAge = document.getElementById(`age`)
    const result = document.getElementById(`result`)
    const sex = document.getElementsByName('radio-sex')
    const btn = document.getElementById('btn-result')




    function calculo(){
        
        const weight = Number(getWeight.value)
        const height = Number(getHeight.value)
        const age = Number(getAge.value)
        
       

        if(weight < 1 || height < 1 || age < 1){
            alert('algo deu errado, verifique se os dados foram preencidos corretamente')
        }

        if (sex[0].checked && weight > 1 && height > 1 && age > 1 ) {

            let basalCalculoMen = 66 + (13.8 * weight) + (5 * height)-(6.8 * age)

            result.value = Math.round(basalCalculoMen)
            
        
        
            
            
        } else if(sex[1].checked && weight > 1 && height > 1 && age > 1 ) {

            let basalCalculationWomen = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)

                result.value = Math.round(basalCalculationWomen)
           
                
        }
        
        getWeight.value= ''
        getHeight.value= ''
        getAge.value= ''
        

    }

    

      

        document.addEventListener('keypress',function(e){

           
            if(e.key === "Enter"){

                btn.click();

            }
            console.log('funcionou')
        })


 
 
    // Eventos
    //CLICK
    btn.addEventListener('click', calculo)

    
    
        
       

   
    
    
   






















/*function calculoResult(){
    var sexInput = document.getElementById('sex').value 
    var sex = 'masculino'
    if (sexInput == sex) {
        function name(){
            var getWeight = document.getElementById(`weight`)
            var getHeight = document.getElementById(`height`)
            var getAge = document.getElementById(`age`)
            var result = document.getElementById(`result`)
            
        
            var weight = Number(getWeight.value)
            var height = Number(getHeight.value)
            var age = Number(getAge.value)
            
            
            var basalCalculation = 66 + (13.8 * weight) + (5 * height) - (6.8 * age)

            result.value = basalCalculation

            
           
        }
    } else {
        function name(){
            var getWeight = document.getElementById(`weight`)
            var getHeight = document.getElementById(`height`)
            var getAge = document.getElementById(`age`)
            var result = document.getElementById(`result`)
            
        
            var weight = Number(getWeight.value)
            var height = Number(getHeight.value)
            var age = Number(getAge.value)
            
            
            var basalCalculation = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)

            result.value = basalCalculation

            
           
        }
    }
}   */
