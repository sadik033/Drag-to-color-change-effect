const rectangle = document.querySelector('.center')
rectangle.addEventListener('mousemove', (e)=>{
    var rectLocation = rectangle.getBoundingClientRect();
    var insideRecLoc = (e.clientX - rectLocation.left);

    if(insideRecLoc < rectLocation.width /2){
        var redColor = gsap.utils.mapRange(0, rectLocation.width /2, 255, 0, insideRecLoc );
        gsap.to(rectangle,{
            backgroundColor:`rgb(${redColor}, 0, 0)`,
            ease: Power4,
        }) 

    }else{
        var blueColor = gsap.utils.mapRange(rectLocation.width /2, rectLocation.width , 0, 255, insideRecLoc );
        gsap.to(rectangle,{
            backgroundColor:`rgb( 0, 0, ${blueColor})`,
            ease: Power4,
        }) 
        
    }
});

rectangle.addEventListener('mouseleave', function(){
    gsap.to(rectangle,{
        backgroundColor: 'white',
    });
});

