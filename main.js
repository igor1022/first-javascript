/*const el = document.querySelector('input[name="people"]');
el.innerHTML = 'fgh';

console.log(el);
*/
const el2 = document.querySelector('input[name="people"]');

el2.addEventListener('change', (ev) => {
    const text = ev.target.value;
    console.log(text);
    const el1 = document.querySelector('.try');
    el1.innerHTML = text;
    
    }
)