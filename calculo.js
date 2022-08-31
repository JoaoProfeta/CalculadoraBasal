 
 
 //get elements and values
    const getSex = document.getElementsByName('radio-sex')//input[radio] >> adquirindo o sexo selecionado
    const getWeight = document.getElementById(`weight`)//peso(em KG)
    const getHeight = document.getElementById(`height`)//altura(em CM)
    const getAge = document.getElementById(`age`)//idade
    const btn = document.getElementById('btn-result')//botão para exibir resultado
    const result = document.getElementById(`result`)//exibição de resultado

    


    //função do calculo
    function calculo(){
        
        const weight = Number(getWeight.value)
        const height = Number(getHeight.value)
        const age = Number(getAge.value)
        
       
        //requerimento caso não seja preenchido
        if(weight < 1 || height < 1 || age < 1){
            alert('algo deu errado, verifique se os dados foram preencidos corretamente')
        }

        //resultado baseado no sexo selecinado

        if (getSex[0].checked && weight > 1 && height > 1 && age > 1 ) {
            //masculino
            let basalCalculoMen = 66 + (13.8 * weight) + (5 * height)-(6.8 * age)

            result.value = Math.round(basalCalculoMen)
            
        
        
            
            
        } else if(getSex[1].checked && weight > 1 && height > 1 && age > 1 ) {
            //feminino
            let basalCalculationWomen = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)

                result.value = Math.round(basalCalculationWomen)
           
                
        }
        
        //limpeza da area de Peso, altura e idade
        getWeight.value= ''
        getHeight.value= ''
        getAge.value= ''
        

    }

    

      
    //disparar função após apertar o ENTER
    document.addEventListener('keypress',function(e){
            
            const weight = Number(getWeight.value)
            const height = Number(getHeight.value)
            const age = Number(getAge.value)

            if (e.key ==="Enter" && weight > 1 && height > 1 && age > 1 ) {

                btn.click();    
                
                
            } else if(e.key ==="Enter" && weight < 1 && height < 1 && age < 1 ) {
                //caso aperte enter sem ter colocado nada
                //OBS: não é alert para n ficar floodando caso apesar tecle o enter sem estar selecionando a área de calculo
                console.log('preencha os dados')
                    
            }





           
        })


 
 
    // Eventos
    //CLICK
    btn.addEventListener('click', calculo)

    
    
        
       

   
    
    
   






















