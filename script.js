let first = [3, 2, 1];
let second =[];
let third = [];


let array = [first, second, third]

function changeFunc (a, i, b){
    if (a == 1){
        array[b].push(array[i].pop());
    }
    else{
        let temporal = 3 - i - k;
        changeFunc(a-1,i,temporal);
        array[b].push(array[i].pop());
        changeFunc(a-1,temporal, b);
    }

}
function chgFrom() {
    for (let i = 0; i < array.length; i++) {
        second.push(first.pop());
        third.push(first.pop());
        third.push(second.pop());

        second.push(first.pop());
        first.push(third.pop());

        second.push(third.pop());
        second.push(first.pop());

    }
}