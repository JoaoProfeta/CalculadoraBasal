 
 
    //get elements 

    const getSex = document.getElementsByName("radio-sex")//input[radio] >> acquiring by selected sex 
    const getWeight = document.getElementById("weight")//Age (inKG)
    const getHeight = document.getElementById("height")//Height(in  CM)
    const getAge = document.getElementById("age")//Age
    const btn = document.getElementById("btn-result")//buton for display result 
    const result = document.getElementById("result")//result display
    const form = document.getElementById("form-calc")
    


    //function calc
    function calculo(){
        
        const weight = Number(getWeight.value)
        const height = Number(getHeight.value)
        const age = Number(getAge.value)
        
       
        //application if not completed
        if(weight < 1 || height < 1 || age < 1){
            alert('algo deu errado, verifique se os dados foram preencidos corretamente')
        }

        //result based on selected sex

        if (getSex[0].checked && weight > 1 && height > 1 && age > 1 ) {
            //Masculine
            let basalCalculationMen = 66 + (13.8 * weight) + (5 * height)-(6.8 * age)

            result.value = Math.round(basalCalculationMen)
            
        
        
            
            
        } else if(getSex[1].checked && weight > 1 && height > 1 && age > 1 ) {
            //Feminine
            let basalCalculationWomen = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)

                result.value = Math.round(basalCalculationWomen)
           
                
        }
        
        //cleaning the weight, height and age area
        getWeight.value= ''
        getHeight.value= ''
        getAge.value= ''
        

    }

    

      
    //trigger function after hit ENTER >> method in case you change the form to a table, enjoy the friend code <3

    /*document.addEventListener('keypress',function(e){
            
            const weight = Number(getWeight.value)
            const height = Number(getHeight.value)
            const age = Number(getAge.value)

            if (e.key ==="Enter" && weight > 1 && height > 1 && age > 1 ) {

                btn.click();    
                
                
            } else if(e.key ==="Enter" && weight < 1 && height < 1 && age < 1 ) {
                
                //if you press enter without having put anything
                
                //Note: it is not an alert not to be flooding if you press enter without selecting the calculation area
                console.log('preencha os dados')
                    
            }





           
        })*/


 
 
    // Event
    btn.addEventListener('click', calculo)

    form.addEventListener("submit", function(event){
        event.preventDefault();
      })   

