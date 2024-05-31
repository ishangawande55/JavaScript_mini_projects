let item_1
let item_2
let item_3

function Result(){
    item_1=parseFloat(document.getElementById('Grocery-1').value);
    item_2=parseFloat(document.getElementById('Grocery-2').value);
    item_3=parseFloat(document.getElementById('Grocery-3').value);

    let result= item_1+item_2+item_3;

    document.getElementById('result').innerText=`the Price Of All Items is :${result}`;
}