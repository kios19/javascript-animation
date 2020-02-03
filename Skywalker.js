$(document).ready(function(){
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['./assets/Img_06.png','./assets/Img_05.png']


    //mouse down
    $(document).on('mousedown',function(e){
        console.log(e.which)
    })
    //mouse left click start
    $(document).on('mousedown',function(e){
        if(e.which ==1){
            $($surface).toggleClass('moveRight')
            $($car).toggleClass('suspension')
        }
    })
    //mouse right click stop
    $(document).on('mousedown',function(e){
        if(e.which ==3){
            $($surface).toggleClass('moveRight')
            $($car).toggleClass('suspension')
        }
    })
    //check key press
    $(document).on('keypress',function(e){
        console.log(e.which)
    })
    //key one
    $(document).on('keypress',function(e){
        if(e.which ==49){
            $($surface).toggleClass('moveone')
            $($car).toggleClass('suspension')
        }
    })
    //key two
    $(document).on('keypress',function(e){
        if(e.which ==50){
            $($surface).toggleClass('movetwo')
            $($car).toggleClass('suspension')
        }
    })
    //key three
    $(document).on('keypress',function(e){
        if(e.which ==51){
            $($surface).toggleClass('movethree')
            $($car).toggleClass('suspension')
        }
    })
    //key four
    $(document).on('keypress',function(e){
        if(e.which ==52){
            $($surface).toggleClass('movefour')
            $($car).toggleClass('suspension')
        }
    })



    //press enter to start
    $(document).on('keypress',function(e){
        if(e.which ==13){
            $($surface).toggleClass('moveRight')
            $($car).toggleClass('suspension')
        }
    })
    //press enter b to break
    $(document).on('keypress',function(e){
        if(e.which ==98){
            $($surface).toggleClass('moveRight')
            $($car).toggleClass('suspension')
        }
    })

    $(document).on('keypress',function(e){
        if(e.which == 119){
            if(flag){
                flag = false
                $img.attr('src',cars[0]);
            }else{
                flag = true
                $img.attr('src',cars[1]);
            }
        }
    })
})