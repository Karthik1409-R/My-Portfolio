particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.2,
      "random": false
    },
    "size": {
      "value": 5,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance":200    ,
      "color": "#000000",
      "opacity": 0.5,
      "width": 1.2
    },
    "move": {
      "enable": true,
      "speed": 6
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

document.getElementById("back-btn").addEventListener("click", () =>{
  window.location.href = "./index.html"
})


document.getElementById("linkedIn-btn").addEventListener("click", () =>{
  window.location.href = "https://www.linkedin.com/in/karthik-ramamoorthy"
})

document.getElementById("Github-btn").addEventListener("click", () =>{
  window.location.href = "https://github.com/Karthik1409-R"
})

document.getElementById("instagram-btn").addEventListener("click", () =>{
  window.location.href = "https://www.instagram.com/bboy__lucky__3k/"
})

document.getElementById("facebook-btn").addEventListener("click", () =>{
  window.location.href = "https://www.facebook.com/profile.php?id=100092356885278"
})