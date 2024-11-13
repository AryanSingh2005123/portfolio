const cont = document.querySelector(".container");

const careers = ['Frontend Developer','Software Developer']

let careerindx=0;
let charidx=1;

updateText()
function updateText(){
    cont.innerHTML=`<h1>${careers[careerindx].slice(0,charidx)}</h1>`
    charidx++;
    if(charidx===careers[careerindx].length+1)
    {
        careerindx++;
        charidx=1;
    }
    if(careerindx==careers.length)
    careerindx=0;
    setTimeout(updateText, 300);
}

function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block"; // Show the modal
    modalImg.src = img.src; // Set the source of the modal image
    captionText.innerHTML = img.alt; // Set the caption to the image's alt text
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}
// Function to check if elements are in view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class
function checkVisibility() {
    const elements = document.querySelectorAll('.elab-container'); // Select all elements to animate
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('visible'); // Add class when in view
        }
    });
}

// Check visibility on scroll
window.addEventListener('scroll', checkVisibility);
// Check visibility on load
window.addEventListener('load', checkVisibility);

// Add 'loaded' class to body when the window has loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
