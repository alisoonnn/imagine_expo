

$( document ).ready(function() {
$('.menu-border').click(function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('open')
    $('.site-nav').toggleClass('open')
    $('section').toggleClass('open')

    if (typeof jQuery !== 'undefined') {
        console.log('jQuery est chargé');
    } else {
        console.log('jQuery n\'est pas chargé');
    }

    if (typeof gsap !== 'undefined') {
        console.log('GSAP est chargé');
    } else {
        console.log('GSAP n\'est pas chargé');
    }
     
})

$('.menu.mobile').click(function(){
    $('.menu-border').toggleClass('open');
    $(this).toggleClass('open')
    $('.site-nav').toggleClass('open')
    $('section').toggleClass('open')

    if (typeof jQuery !== 'undefined') {
        console.log('jQuery est chargé');
    } else {
        console.log('jQuery n\'est pas chargé');
    }

    if (typeof gsap !== 'undefined') {
        console.log('GSAP est chargé');
    } else {
        console.log('GSAP n\'est pas chargé');
    }
     
})


    document.addEventListener("mousemove", parallax);
    function parallax(e){
        document.querySelectorAll(".accueil_oeuvres div").forEach(function(move){
        
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) / 250;
            var y = (e.clientY * moving_value) / 250;
            

            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        })
    }

    // wiggle 

    const scrolls = document.querySelectorAll(".scroll");

function wiggle() {
  const maxX = 20; // adjust this value to change the amplitude of the wiggle
  const speed = 1; // adjust this value to change the speed of the wiggle

  scrolls.forEach((scroll) => {
    let x = 0;
    let direction = 1;

    function animate() {
      x += direction * speed;
      scroll.style.transform = `translateX(${x * 0.5}px)`;

      if (Math.abs(x) > maxX) {
        direction *= -1; // reverse direction when reaching max amplitude
      }

      requestAnimationFrame(animate);
    }

    animate();
  });
}

wiggle();

// scroll mobile

const scrollsMobile = document.querySelectorAll(".scroll_mobile");

function wiggleMobile() {
  const maxY = 20; // adjust this value to change the amplitude of the wiggle
  const speed = 1; // adjust this value to change the speed of the wiggle

  scrollsMobile.forEach((scroll) => {
    let Y = 0;
    let direction = 1;

    function animate() {
      Y += direction * speed;
      scroll.style.transform = `translateY(${Y * 0.3}px)`;

      if (Math.abs(Y) > maxY) {
        direction *= -1; // reverse direction when reaching max amplitude
      }

      requestAnimationFrame(animate);
    }

    animate();
  });
}

wiggleMobile();
// form 

    $("#myForm").on("submit", function(event) {
        event.preventDefault();

        var prenom = $("#prenom").val();
        var nom = $("#nom").val();
        var mail = $("#mail").val();

        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: {
                prenom: prenom,
                nom: nom,
                mail: mail
            },
            success: function(response) {
                $("#responseMessage").html(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("The following error occurred: " + textStatus, errorThrown);
                $("#responseMessage").html("<p style='color: red;'>There was an error processing your request. Please try again later.</p>");
            }
        });
    });


    $(window).on("load", function() {

// Vérifie l'état des cookies
var cookieStatus = Cookies.get("cookies");

if (cookieStatus === "accepted") {
    console.log("Cookies acceptés");
    $("#cookies").hide();
} else {
    console.log("Cookies non acceptés");
    $("#cookies").show();
}

// Gestion du bouton d'acceptation des cookies
$("#oui").click(function() {
    console.log("Cookies acceptés");
    Cookies.set("cookies", "accepted", { expires: 365 });
    $("#cookies").hide();
});

// Gestion du bouton de refus des cookies
$("#non").click(function() {
    console.log("Cookies refusés");
    $("#cookies").hide();
    setTimeout(function() {
        $("#cookies").show();
    }, 2000);
});
})

// liens

    $('.scroll-link').click(function(e) {
        e.preventDefault();
        const targetId = $(this).attr('href').substring(1); // Remove the # to get the ID
        const targetElement = $('#' + targetId).get(0); // jQuery to DOM element

        if (targetElement) {
            const targetX = targetElement.offsetLeft;
            
            // Toggle classes for animations
           
            
            // Scroll horizontally to the target element
            window.scrollTo({ left: targetX, behavior: 'smooth' });
        }
    });
 

 });//ready