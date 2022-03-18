const input = document.querySelector('.input');
input.addEventListener('keydown',(e) => {
    e.target.style.height = `auto`;
    e.target.style.height = `${e.target.scrollHeight}px`;  
})
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelectorAll('textarea');
    text.forEach((element)=>{
        element.addEventListener('click', (e) => {
            e.target.style.height = `auto`;
            e.target.style.height = `${e.target.scrollHeight}px`;
            console.log(e.target.scrollHeight);
        });
    })
    
    console.log(text);
})

// TODO: the apove listeners don't work until the page reloads.
