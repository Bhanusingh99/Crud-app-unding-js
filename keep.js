const circle = document.getElementById("circle");
const rotate = document.getElementById("rotate");
const makeItCenter = document.querySelector(".model");
const closeBtn = document.getElementById("closeBtn");
const deleteButton = document.getElementById("deleteButton");
const editButton = document.getElementById("editButton");
const title = document.getElementById("title");
const textarea = document.getElementById("textarea");
const form = document.getElementById("form");
const display = document.querySelector(".display");

form.addEventListener("submit",(e)=>{
        e.preventDefault();
        puttingIntoLocalStorage();
        rotate.classList.remove("deg");
        makeItCenter.style.top = "-150%"
        })

circle.addEventListener("click",()=>{
    makeitcenter();
    makeItCenter.style.top = "30%"
})

closeBtn.addEventListener("click",function(){
    makeItCenter.style.top = "-150%"
    rotate.classList.remove("deg");
})

function makeitcenter(){
    rotate.classList.add("deg");
    makeItCenter.classList.add("makeItCenter");
}
// here i am deleting the element by clicking on delete button \\
function deleteelement(e){
    e.parentElement.parentElement.remove();
}

// Here i will put values of input to object \\

const object ={};
function puttingIntoLocalStorage(){
    object["Title"] = title.value;
    object["inputText"] = textarea.value;
    display.innerHTML +=` <div>
    <span class="head">${object.Title}</span><br>
    <span class="bodyll">${object.inputText} </span>
    <main  id="forbutton">
     <img src="delete.png" alt="" height="18px" width="18px" id="deleteButton" onclick="deleteelement(this)">
     <img src="edit.png" alt="" height="18px" width="18px" id="editButton">
    </main>
  </div>`
     

    title.value = "";
    textarea.value = "";
}

