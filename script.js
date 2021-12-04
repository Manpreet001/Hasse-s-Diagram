let parent = document.getElementsByClassName("parent")[0];
let elems=[];

let input = document.querySelector("input");

const getInput = ()=>{
    let value = input.value;
    console.log(value);
    let arr= [];
    arr = value.split(",");
    for(let i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    arr = arr.sort(function(a, b){return a-b});

    return arr;
}

const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    arr = getInput();
    console.log(arr);
    draw(arr);
})

function draw(arr) {
    for(let i=arr.length-1; i>=0; i--){
        let new_elem = document.createElement("div");
        new_elem.innerHTML = arr[i];
        new_elem.classList.add("node");
        if(i){
            let elem = document.createElement("div");
            elem.innerHTML = `<i class="fas fa-arrow-up arrows"></i>`;
            new_elem.append(elem);
        }
        parent.appendChild(new_elem);
        elems.push(new_elem);
        parent.style.display = "block";
    }

    let str = document.createElement("h3");
    str.innerText = "Hasse's Diagram (<=)";
    parent.appendChild(str);
}