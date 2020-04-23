
let countObj ={
    next:document.getElementById('next'),
    prew:document.getElementById('prew'),
    main:document.querySelector('.main'),
    count:0
}



let objSlider={
  
 
    nextSlider(){
        if(countObj.count == 4){
           countObj.count = -1;
        }
     
      countObj.count++;
      countObj.main.innerHTML= `<img src="img/wild-${countObj.count}.jpg">`
   
     

    },
    prewSlider(){
        if(countObj.count == 0){
            countObj.count = 5;
         }
      
       countObj.count--;
       countObj.main.innerHTML= `<img src="img/wild-${countObj.count}.jpg">`
    
      
 
     }



    

}
 //EventLISTNER for next buuton
countObj.next.addEventListener('click',objSlider.nextSlider)

countObj.prew.addEventListener('click',objSlider.prewSlider)





