










// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow"

// const ulElement  = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow"
// })

// ---------------- Last Element Child -------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow"

// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow"
// })

// ---------------- Next Element Sibling -------------

// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow"

// ---------------- Previous Element Sibling -------------

// const element = document.getElementById("vegetables");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow"

// ---------------- Parent Element -------------

// const element = document.getElementById("cake");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow"

// ---------------- Children -------------

const element = document.getElementById("desserts");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow"
} );
