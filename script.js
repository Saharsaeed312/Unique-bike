// Product-colors function:
function colorfilter(color){
                const bikeImage = document.getElementById('bikeImage');

            if (color === 'red') {
                bikeImage.src = 'Bicycle - 960x960.png'; // Change to red bike image
            } else if (color === 'blue') {
                bikeImage.src = 'favpng_santa-cruz-bicycles-mountain-bike-bicycle-suspension 1.png'; // Change to gray bike image
            } else if (color === 'skyblue') {
                bikeImage.src = 'Bicycle - 1280x811.png'; // Change to sky blue bike image
            } else {
                bikeImage.src = 'Bicycle - 1280x811.png'; // Change to default bike image
            }
}
// Product-size function
let selectedSize = null;
function chooseSize(size) {
    const weightElement = document.getElementById("weightValue");
    const priceElement = document.getElementById("price");
    let weight, price;
    if (size === 'small') {
        weight = '10.5KG';
        price = '$2,200';
    } else if (size === 'medium') {
        weight = '12.3KG';
        price = '$2,500';
    } else if (size === 'large') {
        weight = '14.18KG';
        price = '$2,800';
    }

    selectedSize = size;

    weightElement.innerText = weight;
    priceElement.innerHTML = `<span>Price: </span>${price}`;
}
// Product Cart:
let cart = [];

function addToCart(name) {
    if (!selectedSize) {
        Swal.fire({
            title: 'Please Select a Size',
            text: 'You must select a size before adding to the cart.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    } else {
        cart.push({ name: `${selectedSize} ${name}`, price: document.getElementById("price").innerText });
        updateCartCount();
        Swal.fire({
            icon: 'success',
            title: 'Added to Cart',
            text: `${selectedSize} ${name} has been added to your cart.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
}

function updateCartCount() {
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.setAttribute('data-count', cart.length);
}
// slider:
let currentSlide = 0;
const slides = document.querySelectorAll('#product-slider .slides img');
const totalSlides = slides.length; 

function moveslide(direction, sliderId) {
    const slider = document.getElementById(sliderId);

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0; 
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; 
    }

    // Calculate the offset for the slides
    const offset = -currentSlide * 100; // Each image takes 100% of the width
    slider.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Move slides
}
function toggleMenu() {
    document.querySelector('.navlinks').classList.toggle('active');
}