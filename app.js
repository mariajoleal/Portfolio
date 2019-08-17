/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

window.onscroll = function() {myFunction()};
    
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    
    const about = document.getElementById("about-title");
    const projects = document.getElementById("projects-title");
    const contact = document.getElementById("contact-title");
    const elements = [about,projects,contact];


    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    const navLinks = document.querySelectorAll("nav a");
    
    window.addEventListener("scroll", event => {
      navLinks.forEach(link => {
          let section = document.querySelector(link.hash);
          let fromTop = window.scrollY;
          if (
		        section.offsetTop <= fromTop + 100 &&
		        section.offsetTop + section.offsetHeight  - 100 > fromTop 
          ) {
            link.classList.add("active");
        }  else {
		      link.classList.remove("active");
		    }
      });
    });

    document.getElementById("navbar").addEventListener("click", event => {
      let hash = event.path[0].hash;
      
      if (hash === "#about"){
            about.classList.add("animated");
            about.classList.add("zoomIn");
            deleteAnimation(1,2);
          } else if (hash === "#projects") {
            projects.classList.add("animated");
            projects.classList.add("fadeInLeft");
            deleteAnimation(0,2);
          } else {
            contact.classList.add("animated");
            contact.classList.add("bounceInUp");
            deleteAnimation(0,1);
          }
    });

    function deleteAnimation(pos,pos2) {
      switch(pos+pos2) {
        case 1: 
          elements[0].classList.remove("animated");
          elements[0].classList.remove("zoomIn");
          elements[1].classList.remove("animated");
          elements[1].classList.remove("fadeInLeft");
          break;
        case 2:
          elements[0].classList.remove("animated");
          elements[0].classList.remove("zoomIn");
          elements[2].classList.remove("animated");
          elements[2].classList.remove("bounceInUp");
          break;
        case 3:
          elements[1].classList.remove("animated");
          elements[1].classList.remove("fadeInLeft"); 
          elements[2].classList.remove("animated");
          elements[2].classList.remove("bounceInUp");
          break;  
      }
    }
