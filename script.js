const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim(){
    let t1 = gsap.timeline();

    t1.from('nav',{
        y : '-10',
        opacity: 0,
        duration: 1.3, 
        ease: Expo.easeInOut
    })
    t1.to('.boundelem',{
        y : 0,
        duration: 2,
        delay: -1,
        stagger: .3,
        ease: Expo.easeInOut
    })
    t1.from('.homefooter',{
        y : '-10',
        opacity: 0,
        delay: -1,
        duration: 1.3, 
        ease: Expo.easeInOut
    })
    }



let cur = document.querySelector('.cursor')

function cursor(){
    window.addEventListener('mousemove', function(dets){
       cur.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) `
    })
}

document.querySelectorAll(".elem").forEach(function(elem){

    let rotate = 0;
    let diffrot = 0;

    elem.addEventListener('mouseleave', function(details){
           gsap.to(elem.querySelector('img'),{
               opacity:0,
               ease: Power2,
               duration: .5
           });
       });


    elem.addEventListener('mousemove', function(details){

     let diff = details.clientY - elem.getBoundingClientRect().top;
     diffrot = details.clientX - rotate;
     rotate = details.clientX;
        gsap.to(elem.querySelector('img'),{
            opacity:1,
            ease: Power2,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot)
        });
    });
});


firstPageAnim();
cursor();