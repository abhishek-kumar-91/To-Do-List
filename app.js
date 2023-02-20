const push = document.querySelector('#push');
const input = document.querySelector('#newtask input');
const tasks = document.querySelector('#tasks');

push.onclick = function (){
if(input.value.length == 0){
    alert('Please enter the new task')
}else{
    tasks.innerHTML += `
    <div class="task">
    <span id="taskname">
    ${input.value};
    </span>
    <button class = "delete">
    <i class="fa-sharp fa-solid fa-delete-left"></i>
    </button>
    </div>
    `
        const currentTask = document.querySelectorAll('.delete');
        for(let i = 0; i<currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    var task = document.querySelectorAll(".task");
    for(var i = 0; i<task.length; i++){
        task[i].onclick = function (){
            this.classList.toggle('completed');
        }
        input.value = "";

    }
}



    
   

