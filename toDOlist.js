const inputbar = document.querySelector("#inp");
const addbtn = document.querySelector(".save-icon");







addbtn.addEventListener('click',addtask);
function addtask(e){
    const uncompleteTask = document.querySelector(".uncompletelist > ol");
    const completeTask = document.querySelector(".completelist > ol")
    
    //this date function for get date while add the list in the uncomplete container
    let adddate =  new Date();

   let hour = adddate.getHours();
   let minu = adddate.getMinutes();
   let sec = adddate.getSeconds();
 console.log(adddate) ;

const datetext = document.createElement("span");
    datetext.innerText = adddate.toDateString() +` ${hour}:${minu}:${sec}`;
    console.log(datetext.innerText)
    



    
    const li = document.createElement("li");
    const checkbtn = document.createElement("button");
    const deletebtn = document.createElement("button");
    const datetext2 = document.createElement("span");
   
    checkbtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    deletebtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    

    li.innerHTML = inputbar.value;
     if(inputbar.value !==""){
        li.textContent = inputbar.value; 
        inputbar.value ="";
        uncompleteTask.appendChild(li);
        li.appendChild(checkbtn);
        li.appendChild(deletebtn);
        li.appendChild(datetext);
     }
     
     console.log(datetext2.innerText)


     checkbtn.addEventListener('click',function () {
        const parentnode = this.parentNode;
        parentnode.remove();
        completeTask.appendChild(parentnode);
        parentnode.removeChild(checkbtn);
        parentnode.removeChild(datetext);
        let finishdate = new Date();
      datetext2.innerText = finishdate.toDateString() + ` ${finishdate.getHours()}:${finishdate.getMinutes()}:${finishdate.getSeconds()}`;
        parentnode.appendChild(datetext2)
     }
     );
     deletebtn.addEventListener('click',function () {
        const parentnode = this.parentNode;
        parentnode.remove();
        //completeTask.appendChild(parentnode);
       // parentnode.removeChild(checkbtn);
     }
     );
    

}