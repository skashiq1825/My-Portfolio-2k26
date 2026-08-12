const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


gsap.registerPlugin(ScrollTrigger);


const follower = document.querySelector(".follower-box");
const heroelempage1 = document.querySelector(".hero-elem-page1");


const followerImages = [
    "Screenshot 2025-12-20 114259.webp",
    "Screenshot 2025-12-20 114500.webp",
    "Screenshot 2025-12-20 224704.webp",
    "Screenshot 2025-12-27 185142.webp",
    "Screenshot 2025-12-27 185709.webp",
    "Screenshot 2026-01-10 205402.webp",
    "Screenshot 2026-02-14 192859.webp",
    "Screenshot 2026-02-14 192943.webp",
    "Screenshot 2026-02-14 223924.webp",
    "Screenshot 2026-02-17 131605.webp",
    "Screenshot 2026-05-13 163230.webp",
    "Screenshot 2026-05-16 120707.webp",
    "Screenshot 2026-05-16 120911.webp",
    "Screenshot 2026-05-20 234635.webp",
    "Screenshot 2026-05-24 030658.webp",
    "Screenshot 2026-06-01 133329.webp",
    "Screenshot 2026-07-08 224513.webp",
    "Screenshot 2026-07-16 200631.webp",
    "Screenshot 2026-08-12 124444.webp",
    "Screenshot 2026-05-22 005643.webp"
];

let lastMouseX = null;
let lastMouseY = null;
let currFollowerImgIdx = null;
const CHANGE_DIST = 200;
let firstMove = true;

function getRandomIndex(excludeIdx, arrLen) {
    let idx;
    do {
        idx = Math.floor(Math.random() * arrLen);
    } while (idx === excludeIdx && arrLen > 1);
    return idx;
}

heroelempage1.addEventListener("mousemove", (dets) => {
    gsap.to(follower, {
        opacity:1,
        x: dets.x,
        y: dets.y,
        top:"0%",
        left:"0%",
        duration: 0.8,
        ease: "power3.out"
    });

    
    if (firstMove) {
        currFollowerImgIdx = getRandomIndex(null, followerImages.length);
        follower.style.backgroundImage = `url('assets/all works/${followerImages[currFollowerImgIdx]}')`;
        follower.style.backgroundSize = "cover";
        follower.style.backgroundPosition = "center";
        lastMouseX = dets.x;
        lastMouseY = dets.y;
        firstMove = false;
        return;
    }

    if (lastMouseX !== null && lastMouseY !== null) {
        const dx = dets.x - lastMouseX;
        const dy = dets.y - lastMouseY;
        const dist = Math.sqrt((dx*dx + dy*dy));

        if (dist >= CHANGE_DIST) {
            let newIdx = getRandomIndex(currFollowerImgIdx, followerImages.length);
            currFollowerImgIdx = newIdx;
            follower.style.backgroundImage = `url('assets/all works/${followerImages[newIdx]}')`;
            follower.style.backgroundSize = "cover";
            follower.style.backgroundPosition = "center";
            lastMouseX = dets.x;
            lastMouseY = dets.y;
        }
    } else {
        lastMouseX = dets.x;
        lastMouseY = dets.y;
    }
    gsap.to(".dot-line1", {
        opacity:1,
       
        y: dets.y,
        top:"0%",
        left:"0%",
        duration: 0.8, 
        ease: "power3.out"
    });
    gsap.to(".dot-line2", {
        opacity:1,
        x: dets.x,
       left:"0%",
        top:"0%",
        duration: 0.8, 
        ease: "power3.out"
    });
       
    
});

function updateCurrentTime() {
    const now = new Date();
    // e.g. 11:09:05 AM
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
  }
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);

heroelempage1.addEventListener("mouseleave", () => {
    gsap.to(follower, {
   
       opacity:0,
       
       duration: 0.8, 
       ease: "power3.out"
   });
   gsap.to(".dot-line1", {
 
    opacity:0,
    
    duration: 0.8,
    ease: "power3.out"
});
gsap.to(".dot-line2", {

    opacity:0,
    

    duration: 0.8, 
    ease: "power3.out"
});

});
var showcasetl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pnb1",
        start: "top 80%",
        end: "+=500",
        scrub: 0.7,
    }
});

showcasetl1.to(".bl1", {
    x: "-36vw",

    duration: 1,
});
showcasetl1.to(".br1", {
    x: "36vw",
    duration: 1,
}, "<");
showcasetl1.to(".pib1", {
    width:"50vw",
    height:"65vh",
    transform:" translate(-50%,-50%)",

}, "<");

var showcasetl1clone = gsap.timeline({
    scrollTrigger: {
        trigger: ".pnb2",
        start: "top 70%",
        end: "+=650",
        scrub: 0.7,
    }
});

showcasetl1clone.to(".bl1", {
    x: "0vw", 
});
showcasetl1clone.to(".br1", {
    x: "0vw",
   
   
}, "<");
showcasetl1clone.to(".pib1", {
    width:"10vw",
    height:"15vh",

    transform:" translate(-50%,-50%)",

    
}, "<");
var showcasetl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pnb2",
        start: "top 80%",
        end: "+=500",
        scrub: 0.7,
       
    }
});

showcasetl2.to(".bl2", {
    x: "-20vw",

});
showcasetl2.to(".br2", {
    x: "20vw",
  
},"<");
showcasetl2.to(".pib2", {
    width:"50vw",
    height:"65vh",

    transform:" translate(-50%,-50%)",

    
}, "<");

var showcasetl2clone = gsap.timeline({
    scrollTrigger: {
        trigger: ".pnb3",
        start: "top 70%",
        end: "+=550",
        scrub: 0.7,
       
    }
});

showcasetl2clone.to(".bl2", {
    x: "0vw", 

});
showcasetl2clone.to(".br2", {
    x: "0vw",
  
}, "<");
showcasetl2clone.to(".pib2", {
    width:"10vw",
    height:"15vh",

    transform:" translate(-50%,-50%)",

    
}, "<");
var showcasetl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pnb3",
        start: "top 80%",
        end: "+=500",
        scrub: 0.7,
    }
});

showcasetl3.to(".bl3", {
    x: "-23vw",
});
showcasetl3.to(".br3", {
    x: "23vw",
},"<");
showcasetl3.to(".pib3", {
    width:"50vw",
    height:"65vh",

    transform:" translate(-50%,-50%)",

    
}, "<");



gsap.to(".hero-elem-page1", {
    scrollTrigger: {
        trigger: ".hero-elem-page1",
        start: "top top",
        end: "+=800",
        pin: true,

    }
});

gsap.to(".dp-image", {
    top:"100%",
    transform:"translate(0%,-100%)",
    scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end:"+=900",
        scrub:1,
        
        
       

    }
});
gsap.to(".page2", {
    scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "+=400",
        pin: ".page2",
       
    }
});
gsap.from(".highlight-box span", {
    opacity:0,
    y:30,
    stagger:0.3,
   
    scrollTrigger: {
        trigger: ".highlight-box",
        start: "top 5%",
        end:"+=120",
       
      
        scrub:1
        
       

    }
});


document.querySelectorAll(".elem").forEach(elem => {
    let image = elem.querySelector("img");
    let randval = gsap.utils.random(-100, 100);
   
    let animateX = Math.random() < 0.5; 
    
    let tl = gsap.timeline();
    tl
      .set(image, {
        transformOrigin: `${randval < 0 ? "0%" : "100%"} 50%`
      })
      .to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: elem,
          start: "top top",
          end: "bottom top",
          scrub: true 
        }
      });

    
    if (animateX) {
      tl.to(elem, {
        xPercent: randval,
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          ease: "none"
        }
      });
    } else {
      tl.to(elem, {
        yPercent: randval,
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          ease: "none"
        }
      });
    }
});

 
  gsap.to(".overlay-title", {

    scale:1,
    opacity:1,
    scrollTrigger: {
        trigger: ".page4",
        start: "top 0%",
        end: "bottom 100%",
        pin: ".overlay",
       
       
    }
});

gsap.from(".page5", {
    width:"30vw",
    height:"35vh",

    transform:" translate(-50%,0%)",
    ease:"power3.out",
    scrollTrigger: {
        trigger: ".page5",
        start: "top 50%",
        end:"+=200",
        
        scrub:1,
       
       
    }

    
}, "<");
gsap.to(".grid-page5", {


    delay:0.1,
    height:"0%",
    
    stagger:0.1,

    duration: 2, 
    ease: "power3.inOut",
    scrollTrigger:{
        trigger:".layer-page5",
        start:"top 20%%",
        end:"top top",
        scrub:1


    }
});
gsap.to(".layer-page5", {


   
   zindex:0,
    
   

     
    ease: "power3.inOut",
    scrollTrigger:{
        trigger:".layer-page5",
        start:"top 20%%",
        end:"top top",
        scrub:1


    }
});

var fronttimeline = gsap.timeline();
fronttimeline.from(".hello-txt span",{
    delay:0.2,
    y:100,
    duration:0.6,
    stagger:0.2
    
    
})
fronttimeline.to(".hello-txt span",{
    delay:0.2,
    y:-100,
    duration:0.6,
    stagger:0.1
    
    
})
fronttimeline.to(".layer-page1",{
    top:"-100%",
    duration:1.8,
    ease:"power2.in",

},"<0.2")

fronttimeline.to(".gridd", {

    delay:0.1,
    height:"0%",
    
    stagger:0.1,

    duration: 2, 
    ease: "power3.inOut"
},"<");


fronttimeline.from(".hero-txt-top span",{
    // delay:0.2,
    y:100,
    duration:0.4,
    stagger:0.1
    
    
},"<")
fronttimeline.from(".hero-txt-bottom span",{
    // delay:0.2,
    y:100,
    duration:0.4,
    stagger:0.1
    
    
},"<")
fronttimeline.from(".navigation",{
    // delay:0.2,
    y:-50,
    opacity:0,
    duration:0.6,
   
    
    
},"<1.2")


lenis.stop();
setTimeout(() => {
    lenis.start();
}, 5000);


 gsap.to(".grid", {

   
    height:"0%",
    
    stagger:0.1,

    ease: "power3.inOut",
    scrollTrigger:{
        trigger:".page2",
        start:"top 38%",
        end:"+=700",
        scrub:1
    }
});


if ('scrollRestoration' in history) {
    history.scrollRestoration = "manual";
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

var linkedin = document.querySelector(".linkedin")
linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/ashiq--1825-?utm_source=share_via&utm_content=profile&utm_medium=member_androidr", "_blank");
});
var twitter = document.querySelector(".twitter")
twitter.addEventListener("click", () => {
    window.open("https://x.com/ashixsvib3", "_blank");
});
var insta = document.querySelector(".insta")
insta.addEventListener("click", () => {
    window.open("https://www.instagram.com/averro.web?igsh=amZ6OTZ0d3dzOWV1", "_blank");
});
var github = document.querySelector(".github")
github.addEventListener("click", () => {
    window.open("https://github.com/skashiq1825", "_blank");
});
