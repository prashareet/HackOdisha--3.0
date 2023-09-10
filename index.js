



//CurrentAffairs:

document.querySelectorAll(".caraousel").forEach(caraousel=>{
    const items = caraousel.querySelectorAll(".caraousel---item");
    const buttonsHTML = Array.from(items, ()=>{
        return `<span class="caraousel---button"></span>`
    })
    console.log(buttonsHTML);
    caraousel.insertAdjacentHTML("beforeend",`
    <div class ="caraousel---nav">
        ${buttonsHTML.join("")}
    </div>
    `
    );
    const buttons = document.querySelectorAll(".caraousel---button");
    buttons.forEach((button,i)=>{
        //unselecting the existing selected

        button.addEventListener("click", ()=>{

            items.forEach(item=> item.classList.remove("caraousel---item---selected"));
            buttons.forEach(button=>button.classList.remove("caraousel---button---selected"))
            //
            items[i].classList.add("caraousel---item---selected");
            buttons[i].classList.add("caraousel---button---selected")
        })
    })
    items[0].classList.add("caraousel---item---selected")
    buttons[0].classList.add("caraousel---button---selected")

})

//
document.querySelectorAll(".btn-primary").forEach(btn =>{
    btn.addEventListener("click", ()=>{
        alert("Yo!");
    })
})
    
// Function to check if an element is in the viewport and add a class for fade-in effect
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in-element');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight) {
            element.classList.add('fade-in-visible');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', fadeInOnScroll);

// Initial check on page load
fadeInOnScroll();
