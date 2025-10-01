const button = document.querySelectorAll('button[data-color]')
const box = document.getElementById('box')

console.log(button);
button.forEach(ele => {
    let color = ele.dataset.color
    ele.addEventListener('click', () => {
        box.style.backgroundColor = color
    })
});