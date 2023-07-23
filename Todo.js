let inputbox=document.getElementById("input-box");
const Container=document.getElementById("list-container");

function addtask(){

    if(inputbox.value ===''){
        alert('You have to write something');
    }
    else{
           let li=document.createElement("li");
           li.innerHTML=inputbox.value;
Container.appendChild(li);
let span=document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
Container.addEventListener("click",function(e){
          if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savedata();
          }
          else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
  savedata();
          }
},false)
function savedata(){
    localStorage.setItem("data",Container.innerHTML);
}
function showtask(){
  Container.innerHTML=localStorage.getItem("data");
}
showtask();