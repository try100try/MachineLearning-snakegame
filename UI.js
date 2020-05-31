
var val;
function UI(){
    text = createDiv('Hvor hurtigt skal det gå? jo lavere jo hurtigere (0 til 100)');
    if (val==undefined){
    slider = createSlider(1, 100, snake.timeLimit);} else{
    slider = createSlider(1,100,val);
    }
    input = createInput();
    button = createButton('submit');
    button.mousePressed(submitValue);
}

function submitValue(){
val = Number(input.value());
console.log(val);

UIUpdate();

}
var tempValue;
var textValue;
function UIConstant(){
    snake.timeLimit= slider.value();
    console.log(slider.value());



if (tempValue!=slider.value()){
tempValue = slider.value();
if (textValue!=undefined){
textValue.remove();
}
textValue = createDiv(slider.value());
textValue.position(slider.value()+15,slider.y);
}

}

function UIUpdate(){
slider.remove();
input.remove();
button.remove();
text.remove();
UI();

}