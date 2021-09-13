// let name: string = "Bev";
// console.log(name);
let myName = "Bev";
console.log(myName);
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
function draw() {
    let heightInput = document.getElementById("height").value;
    let widthInput = document.getElementById("width").value;
    let xInput = document.getElementById("x").value;
    let yInput = document.getElementById("y").value;
    let xInputMidPoint = Number(xInput) / 2;
    ctx.fillStyle = 'green';
    ctx.fillRect(0, Number(yInput), Number(heightInput), Number(widthInput));
    ctx.moveTo(0, Number(yInput));
    ctx.lineTo(Number(xInputMidPoint), 0);
    ctx.lineTo(Number(xInput), Number(yInput));
    ctx.fill();
}
function showHeight() {
    let heightInput = document.getElementById("height").value;
    console.log(heightInput);
}
function showWidth() {
    let widthInput = document.getElementById("width").value;
    console.log(widthInput);
}
// let drawform = document.querySelector('form');
// drawform.addEventListener('change', function() {
//     let heightInput = (document.getElementById("height") as HTMLInputElement).value;
//     let widthInput = (document.getElementById("width") as HTMLInputElement).value;
//     let xInput = (document.getElementById("x") as HTMLInputElement).value;
//     let yInput = (document.getElementById("y") as HTMLInputElement).value;
//     console.log(xInput);
//     console.log(yInput);
//     let xInputMidPoint = Number(xInput) / 2;
//     ctx.fillStyle = 'green';
//     ctx.fillRect(10, Number(yInput), Number(heightInput), Number(widthInput));
//     ctx.moveTo(10, Number(yInput));
//     ctx.lineTo(Number(xInputMidPoint), 25);
//     ctx.lineTo(Number(xInput), Number(yInput));
//     ctx.fill();
// });
// export = {
//     myName
// };
//# sourceMappingURL=index.js.map