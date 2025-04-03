
const notesContainer = document.querySelector(".input-box");
const createButton = document.getElementById("creates-note-button");
let inputDiv = document.getElementById("myTasks");
let taskKeeper = document.querySelector(".tasks")
let noTaskyet = document.querySelector(".no-task");

function updateStorge(){
    localStorage.setItem("inputDiv",taskKeeper.innerHTML);
}
createButton.addEventListener("click", function(){
    let taskDiv = document.createElement("div");
    taskDiv.className = "flex justify-between items-center space-x-4";

    let taskInput = document.createElement("input");
    taskInput.setAttribute("type", "text");
    // taskInput.setAttribute("contenteditable", "true")
    taskInput.setAttribute("placeholder", "What needs to be done?");
    taskInput.className = "input-field py-4 px-5 hover:shadow-sm hover:shadow-purple-800 focus:border-border-stroke focus:outline-none focus:border text-white bg-list-boxes placeholder:text-gray-500 placeholder:text-sm rounded-md";
  

    let addNotesDiv = document.createElement("div");
    addNotesDiv.className = "add-notes-button flex items-center gap-2 bg-icon-background rounded-lg px-4 py-3 w-full justify-center max-sm:mt-3 hover:bg-purple-700";
    addNotesDiv.id = "submitTask"

    let taskText = document.createElement("p");
    taskText.className = "text-white font-semibold text-md";
    taskText.innerHTML = "Add task";
     
    let addIcon = document.createElement("i");
    addIcon.className = "fa-solid fa-plus text-white text-lg";

    addNotesDiv.appendChild(taskText);
    addNotesDiv.appendChild(addIcon);

    taskDiv.appendChild(taskInput);

    notesContainer.appendChild(taskDiv);
    notesContainer.appendChild(addNotesDiv);

    addNotesDiv.addEventListener("click", function(){
        noTaskyet.classList.toggle("hidden");
        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash text-white cursor-pointer ml-2";
        deleteIcon.addEventListener("click", function(){
            taskDiv.remove();
        });
        // let completeIcon = document.createElement("i");
        // completeIcon.className = "mark-icon fa-solid fa-check text-white text-md mr-3";
        let taskChecked = document.createElement("input");
        taskChecked.setAttribute("type", "checkbox");
        taskChecked.className = "h-6 w-6 cursor-pointer transition-all rounded shadow hover:shadow-md border border-slate-300 checked checked:bg-slate-800 checked:border-slate-800 checked:bg-purple-500 mr-4";    
        taskChecked.addEventListener("click", function(){
            taskInput.classList.toggle("line-through");
        });
        
    taskDiv.appendChild(taskChecked);
    taskKeeper.appendChild(taskDiv);
    taskDiv.appendChild(deleteIcon);
    // taskDiv.appendChild(completeIcon);

    addNotesDiv.remove();
    updateStorge();
    
    });
});

