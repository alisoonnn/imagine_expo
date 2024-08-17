$(document).ready(function() {


  
  let isMobile;

const mediaQuery = window.matchMedia('(max-width: 768px)');
isMobile = mediaQuery.matches;

mediaQuery.addEventListener('change', (event) => {
  isMobile = event.matches;
  updateLayout();
});

window.addEventListener('resize', () => {
  isMobile = window.innerWidth <= 768;
  updateLayout();
});

updateLayout(); // Initial call to updateLayout


gsap.registerPlugin(ScrollTrigger);


function updateLayout() {
  if (isMobile) {
    console.log('is mobile');
    $(window).on("load", function() {

      ScrollTrigger.refresh();


      gsap.from(".accueil_nuages div", {
        duration: 2,
        y: -800, // point de départ à la position initiale
        ease: "power2.inOut"
        })
        
        
        gsap.from(".accueil_logo", {
        duration: 2.5,
        opacity: 0,
        ease: "power2.inOut"
        })

        gsap.from(".pres_nuages div", {
          y: -300, // or any other property you want to animate
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".pres_nuages div", // ajoutez ceci
            start: "=250 top",
            end: "=350 top",
            scrub: true,
            // markers: true
          }
          });

          gsap.to(".scroll_mobile", {
            opacity : 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".scroll_mobile", // ajoutez ceci
              start: "-=1000 top",
              end: "-=550 top",
              scrub: true,
              // markers: true
            }
            });

          gsap.from(".scroll_mobile", {
            opacity : 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".scroll_mobile", // ajoutez ceci
              start: "=50 top",
              end: "=80 top",
              scrub: true,
              
            }
            });

          gsap.to(".scroll_mobile", {
            opacity:0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".scroll_mobile", // ajoutez ceci
              start: "=180 top",
              end: "=200 top",
              scrub: true,
            
            }
            });
      
      })
    
  } else {
    console.log('is desktop');
    reloadGSAPAnimations();
  }
  }

    function reloadGSAPAnimations() {

      


      $(window).on("load", function() {
        var slider = $(".containersite");
        
  
    
    
    // Créer une timeline avec GSAP et ScrollTrigger
    let tl = gsap.timeline({
      defaults: {
        ease: 'none'
      },
      scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 1,
        end: () => window.scrollX + document.body.offsetWidth * 2, // Set the end point to the width of the content
         // Activer les marqueurs
      }
    });
    
    // Ajouter l'animation à la timeline
    tl.to(slider, {
      xPercent: -80 // Animate the x position to -100% (i.e., scroll to the right)
    });
    
    
    })

    $(window).on("load", function() {

      gsap.from(".accueil_nuages div", {
        duration: 1.5,
        y: -500, // point de départ à la position initiale
        ease: "power2.inOut"
        })
        
        
        gsap.from(".accueil_logo", {
        duration: 2,
        opacity: 0,
        ease: "power2.inOut"
        })
        
        gsap.from(".pres_logo", {
        opacity: 0,
        ease: "power2.inOut",
        x: -50,
        scrollTrigger: {
          start : "=2200 top",
          end: "=3000 top",
          scrub: true,
          
        }
        
        })
        gsap.from(".pres_nuages div", {
        y: -600, // or any other property you want to animate
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "=2800 top",
          end: "=3800 top",
          scrub: true,
         
        }
        });
        gsap.from("header .logo", {
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "=6000 top",
          end: "=7000 top",
          scrub: true,
         
        }
        });
        
        gsap.registerPlugin(ScrollTrigger);
        
              // Set up GSAP ScrollTrigger
              gsap.to(slider, {
                  xPercent: -100 * (document.querySelectorAll('.section').length - 1),
                  ease: "none",
                  scrollTrigger: {
                      trigger: slider,
                      pin: true,
                      scrub: 1,
                      end: () => "+=" + document.querySelector(".containersite").offsetWidth
                  }
              });
        
              document.querySelectorAll('.scroll-link').forEach(link => {
                link.addEventListener('click', function(e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href').substring(1); // Retire le "#" du href
                  const targetElement = document.getElementById(targetId);
              
                  gsap.to(window, {
                    scrollTo: {
                      y: targetElement,
                      offsetY: 50 // Ajustez cette valeur en fonction de la hauteur de votre header fixe
                    },
                    duration: 1, // Durée de l'animation en secondes
                    ease: "power2.inOut" // Type d'accélération
                  });
                });
                
              });

    })

      
    }
  }



    
      )
    