const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// ----------------------------------------------------------

const parax = document.querySelectorAll(".parallax");

parax.forEach((para) => {
  para.addEventListener("click", () => {
    para.classList.toggle("active");
  });
});

// ----------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const parent = this.parentNode;
      const isActive = parent.classList.contains("active");

      // Close all accordion items
      accordionHeaders.forEach((item) => {
        item.parentNode.classList.remove("active");
      });

      // Toggle the active state for the clicked item
      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });
});

// ----------------------------------------------------------

// function changeImage(index) {
//   const carouselInner = document.querySelector(".carousel-inner");
//   const items = document.querySelectorAll(".carousel-item");

//   // Change the image in the carousel
//   carouselInner.style.transform = `translateX(-${index * 100}%)`;

//   // Highlight the active accordion item
//   document.querySelectorAll(".accordion-item").forEach((item, i) => {
//     item.classList.toggle("active", i === index);
//   });
// }

function toggleDiameter() {
  var circle = document.getElementById("ellipse-circle");
  var currentRadius = parseFloat(circle.getAttribute("r"));

  // Toggle between default size and increased size
  var newRadius = currentRadius === 155 ? 325 : 155; // Customize the default and increased radius

  // Apply the new radius with a smooth transition
  circle.setAttribute("r", newRadius);

  var linear = document.getElementById("paint0_linear_929_4558");
  var x1 = parseFloat(linear.getAttribute("x1"));
  var y1 = parseFloat(linear.getAttribute("y1"));
  var x2 = parseFloat(linear.getAttribute("x2"));
  // var y2 = parseFloat(linear.getAttribute("y2"));

  var x1New = currentRadius === 155 ? 187.429 : x1 / 2; // Customize the default and increased radius
  var y1New = currentRadius === 155 ? -361.509 : y1 / 2; // Customize the default and increased radius
  var x2New = currentRadius === 155 ? 901.725 : x2 / 2; // Customize the default and increased radius
  // var y2New = currentRadius === 155 ? y2 * 2 : y2 / 2; // Customize the default and increased radius

  linear.setAttribute("x1", x1New);
  linear.setAttribute("y1", y1New);
  linear.setAttribute("x2", x2New);
  // linear.setAttribute("y2", y2New);
}

let hero = document.getElementsByClassName("hero");
window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  let scale =
    1 - scrolled * 0.005; /* Adjust the multiplier for the zoom effect */

  // Limit the minimum scale to 30%
  scale = Math.max(0.3, scale);

  document.querySelector(".hero").style.transform = `scale(${scale})`;
});

// --------------------------------------------------------------------------------

function changeImage(imageNumber) {
  // Hide all images
  for (let i = 1; i <= 5; i++) {
    document.getElementById("image" + i).style.opacity = "0";
  }

  // Display the selected image with animation
  const selectedImage = document.getElementById("image" + imageNumber);
  selectedImage.style.display = "block";
  setTimeout(() => {
    selectedImage.style.opacity = "1";
  }, 10);
}

//   ------------------------------------------------------------------

// const odometer1 = document.getElementById("odometer1");
// const odometer2 = document.getElementById("odometer2");
// const odometer3 = document.getElementById("odometer3");
// const odometer4 = document.getElementById("odometer4");
let value1 = 1501;
let value2 = 1501;
let value3 = 1501;
let value4 = 1501;

setInterval(() => {
  value1 += 7;
  value2 += 14;
  value3 += 9;
  value4 += 20;
  odometer1.innerHTML = value1;
  odometer2.innerHTML = value2;
  odometer3.innerHTML = value3;
  odometer4.innerHTML = value4;
}, 3000); //mili second (ms)
