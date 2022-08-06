           
 var getWeight = document.getElementById(`weight`)
 var getHeight = document.getElementById(`height`)
 var getAge = document.getElementById(`age`)
 var result = document.getElementById(`result`)
 
function calculoResult(){
    var sexo = document.getElementsByName('radio-sex')
    
    var weight = Number(getWeight.value)
    var height = Number(getHeight.value)
    var age = Number(getAge.value)

    if (sexo[0].checked) {

        var basalCalculoMen = 66 + (13.8 * weight) + (5 * height)-(6.8 * age)

        result.value = Math.round(basalCalculoMen)
        
    } else {
        var basalCalculationWomen = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)

            result.value = Math.round(basalCalculationWomen)
    }
}





















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
