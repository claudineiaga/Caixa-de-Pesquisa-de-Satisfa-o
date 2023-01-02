$(function(){
    var down = false;
    var dot = $('.slider__dot');
    var emoji = $('.slider__img')
    var position = $('#slider').width()/2;
    var popup = $('.popup');
    dot.css('left', position);
    emoji.css('left', position);
    
    $('#slider').mousedown(function(e){
      if(e.which==1){
        down = true;
        popup.addClass('active');
      }  
    });
    
    $(window).mouseup(function(){
      if(down==true){
        down = false;
        popup.removeClass('active');      
      }  
    });
    
    $(window).mousemove(function(e){
     var perc = 0;
     var moveX,moveXInner;
     if(down==true){
       
      moveX = e.pageX - $('#slider').offset().left;
      moveXInner = e.pageX - $('#slider').offset().left - position;
  
      if(moveX<0){  moveX=0; moveXInner=187;}
      if(moveX>340){
        moveX=340;
        moveXInner=187;
      }
        
        if(moveX>position){
        $('.slider__icon--big').css('fill', '#41e974');    
        $('.icon__path').attr('d', 'M344.25,229.5c20.4,0,38.25-17.85,38.25-38.25S364.65,153,344.25,153S306,170.85,306,191.25S323.85,229.5,344.25,229.5z     M165.75,229.5c20.4,0,38.25-17.85,38.25-38.25S186.15,153,165.75,153s-38.25,17.85-38.25,38.25S145.35,229.5,165.75,229.5z     M255,408c66.3,0,122.4-43.35,145.35-102h-290.7C132.6,364.65,188.7,408,255,408z M255,0C114.75,0,0,114.75,0,255    s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204    S367.2,459,255,459z');        $('.slider__inner').removeClass('left').addClass('right');
          perc = (moveXInner*position/2)/100;
          
        }
        if(moveX<position){
          $('.icon__path').attr('d', 'M344.3,229.5c20.4,0,38.3-17.9,38.3-38.3S364.6,153,344.3,153S306,170.9,306,191.3S323.9,229.5,344.3,229.5z		 M165.8,229.5c20.4,0,38.3-17.9,38.3-38.3S186.1,153,165.8,153s-38.3,17.9-38.3,38.3S145.4,229.5,165.8,229.5z M258.2,276			c-66.3-0.2-122.5,43-145.7,101.6l290.7,0.9C380.4,319.7,324.5,276.2,258.2,276z M255,0C114.8,0,0,114.8,0,255s114.8,255,255,255			s255-114.8,255-255S395.3,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z');
          $('.slider__icon--big').css('fill', '#D7290C');
          $('.slider__inner').removeClass('right').addClass('left');
         
          perc = Math.abs((moveXInner*position/2)/100);
              console.log(perc);
        }
      $('.slider__inner').css('width', perc);
      dot.css('left', moveX );
      emoji.css('left', moveX);
      }    
    });
  });