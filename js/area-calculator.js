function calculateTriangleArea(){
    const baseField = document.getElementById('tri-base-field');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const heightField = document.getElementById('tri-height-field');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;

    const areaSpan = document.getElementById('tri-area');
    areaSpan.innerText = area;
}
// ---------------------------
function calculateRectangleArea(){
    const widthField = document.getElementById('rect-width-field');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rect-length-field');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    const area = width * length;

    const areaSpan = document.getElementById('rect-area');
    areaSpan.innerText = area;
}
// ---------------------------
function calculateParallelogramArea(){
    const base = getInputValue('para-base-field');
    const height = getInputValue('para-height-field');
    const area = base * height;
    setAreaText('para-area',area);
}
// ----------------------------functional--------------------
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setAreaText(areaId,areaValue){
    const areaElement = document.getElementById(areaId);
    areaElement.innerText = areaValue;
    
}
// -------------calculate ellipse area-----------------------
function calculateEllipseArea(){
    const firstRadius = getInputValue('elli-rad-1');
    const secondRadius = getInputValue('elli-rad-2');
    const ellipseArea = 3.1416 * firstRadius * secondRadius;
    setAreaText('elli-area',ellipseArea);
}