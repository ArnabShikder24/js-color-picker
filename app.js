document.getElementById('change-btn').addEventListener('click', () => {
    const rootColor = document.getElementById('root');
    const hexInput = document.getElementById('hex');
    const rgaInput = document.getElementById('rgb');

    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    const rgbColor = `rgb(${red},${green},${blue})`;

    rootColor.style.backgroundColor = hexColor;
       
    hexInput.value = hexColor;
    rgaInput.value = rgbColor;
});

document.getElementById('copy-hex-btn').addEventListener('click', () => {
    const hexInput = document.getElementById('hex');
    navigator.clipboard.writeText(hexInput.value);
});

document.getElementById('copy-rgb-btn').addEventListener('click', () => {
    const rgaInput = document.getElementById('rgb');
    navigator.clipboard.writeText(rgaInput.value);
})