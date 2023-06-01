const getElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw error(
        `Double check your class names`
    )
}

const links = getElement('.nav-links');
const navBtn = getElement('.nav-btn');

navBtn.addEventListener('click', ()=> {
    links.classList.toggle('show-links')
})