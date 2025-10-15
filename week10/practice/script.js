// 006
const bgColorInput = document.getElementById('bgColor');
const fontColorInput = document.getElementById('fontColor');
const fontSizeSelect = document.getElementById('fontSize');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const body = document.body;

const setDefault = {
    bgColor: '#fff',
    fontColor: '#000',
    fontSize: 'medium'
}

const loadDefault = () => {
    const bgColor = localStorage.getItem('bgColor') || setDefault.bgColor;
    const fontColor = localStorage.getItem('fontColor') || setDefault.fontColor;
    const fontSize = localStorage.getItem('fontSize') || setDefault.fontSize;

    body.style.backgroundColor = bgColor
    body.style.color = fontColor
    body.style.fontSize = fontSize
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const bgColor = bgColorInput.value
    const fontColor = fontColorInput.value
    const fontSize = fontSizeSelect.value

    localStorage.setItem('bgColor', bgColor)
    localStorage.setItem('fontColor', fontColor)
    localStorage.setItem('fontSize', fontSize)

    body.style.backgroundColor = bgColor
    body.style.color = fontColor
    if (fontSize === 'small') {
        body.style.fontSize = '12px';
    } else if (fontSize === 'medium') {
        body.style.fontSize = '16px';
    } else if (fontSize === 'large') {
        body.style.fontSize = '20px';
    }
    loadDefault()
})

resetBtn.addEventListener('click', () => {
    localStorage.clear()
    loadDefault()
})

loadDefault();