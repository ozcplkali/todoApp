//! Elementleri tanımlıyorum-------------------------------------
const btnOpenPopup=document.querySelector('.btnAddTask'); 

const todosClass=document.querySelector('.todos');
const alltrashes=document.querySelectorAll('.fa-trash');
//Popup elements
const popupWrapper=document.querySelector('.TaskPopupWrapper');
const btnClosePopup=document.querySelector('.close');

const popupTaskName=document.querySelector('#taskName');
const popupDate=document.querySelector('#taskDate');
const popupTaskDetails=document.querySelector('#taskDetails');
const btnCreateNewTask=document.querySelector('.btnAddTask2');
const searchbar=document.querySelector('#searchbar');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//!--------------------------------------------------------------




// 


//searchbar
searchbar.addEventListener('input',()=>{
     const searchTerm=searchbar.value.toLowerCase();
     const allTodos=todosClass.children;


     Array.from(allTodos).forEach(todo=>{
          const todoText=todo.textContent.toLowerCase();

          if(todoText.includes(searchTerm)){
               todo.style.display='flex';
          }
          else{
               todo.style.display='none';
          }
     });
});



//open-close popup
btnOpenPopup.addEventListener('click',()=>{
     popupWrapper.style.display='flex';     
})

btnClosePopup.addEventListener('click',()=>{
     popupWrapper.style.display='none'; 
})
//---------------------------------


function addToLocalStorage(task){
     let tasks;

     if(localStorage.getItem('tasks')===null){
          tasks=[];

     }
     else{
          tasks=JSON.parse(localStorage.getItem('tasks'));
     }

     tasks.push(task);

     localStorage.setItem('tasks',JSON.stringify(tasks));
     console.log('local storage a eklendi');
} 

alltrashes.forEach((trashicon)=>{
     trashicon.addEventListener('click',(e)=>{

          
          const selectedTodo=e.target.parentElement;
          const todoID=selectedTodo.getAttribute('newTodoId');
          
          
          //remove from localstorage
          localStorage.removeItem(tasks.newtaskID);


          //remove from DOM
          selectedTodo.remove();
     });
});


btnCreateNewTask.addEventListener('click',()=>{
     
     


     let newTask={
          newTaskName:popupTaskName.value,
          newTaskDate:popupDate.value,
          newTaskDetails:popupTaskDetails.value,
          newtaskID:Date.now()
     };



     const newTodoDiv=document.createElement('div');
     const newTodoDivText=document.createElement('span');
     const newDetailsContainerDiv=document.createElement('div');
     const newDateDetailP=document.createElement('p');
     const newDetailsTextArea=document.createElement('textarea');
     const newTrashIcon=document.createElement('i');
     const newTodoId=newTask.newtaskID;
     //parent
     
     todosClass.appendChild(newTodoDiv);
     newTodoDiv.appendChild(newTodoDivText);
     newTodoDiv.appendChild(newDetailsContainerDiv);
     newTodoDiv.appendChild(newTrashIcon);
     newDetailsContainerDiv.appendChild(newDateDetailP);
     newDetailsContainerDiv.appendChild(newDetailsTextArea);
     


     //adding classes
     newTodoDiv.classList.add('todo');
     newTodoDivText.classList.add('newtododivtext');
     newDetailsContainerDiv.classList.add('detailsClass');
     
     newDateDetailP.classList.add('datetimedetail');

     newDetailsTextArea.classList.add('details');

     newTrashIcon.classList.add('fa-trash');
     newTrashIcon.classList.add('fa-solid');
     newTrashIcon.classList.add('cop');

     //---------------------------------------------------------------------------//
     newTodoDivText.textContent=popupTaskName.value;
     newDateDetailP.textContent=popupDate.value;
     newDetailsTextArea.textContent=popupTaskDetails.value;
     

     // delete
     newTrashIcon.addEventListener('click',(e)=>{

          
          const selectedTodo = e.target.parentElement;
          const todoID = selectedTodo.getAttribute('newTodoId');

          // Delete task with ID from array
          tasks = tasks.filter(task => task.newtaskID != todoID);

          // update localstorage
          localStorage.setItem('tasks', JSON.stringify(tasks));

          // remove from DOM
          selectedTodo.remove();
     });


     //details
     newTodoDiv.addEventListener('click', (e) => {

          if (newDetailsContainerDiv.style.display === 'flex') {
               newDetailsContainerDiv.style.display = 'none';  // If it is already open, close it
 
 
          } else {
               newDetailsContainerDiv.style.display = 'flex';  // open if closed
 
 
          }
          console.log('Details açıldı/kapatıldı');
      });

     

     newTodoDiv.setAttribute('newTodoId', newTask.newtaskID);

     tasks.push(newTask);
     localStorage.setItem('tasks', JSON.stringify(tasks));


     
     popupTaskName.value='';
     popupTaskDetails.value='';
     popupDate.value='';
     popupWrapper.style.display='none';

     searchbar.addEventListener('input',()=>{
          const searchTerm=searchbar.value.toLowerCase();
          const allTodos=todosClass.children;
     
     
          Array.from(allTodos).forEach(todo=>{
               const todoText=todo.textContent.toLowerCase();
     
               if(todoText.includes(searchTerm)){
                    todo.style.display='flex';
               }
               else{
                    todo.style.display='none';
               }
          });
     });

     
})

const todos=document.querySelectorAll('.todo');

//details open closed
todos.forEach(todo => {
     todo.addEventListener('click', (e) => {
          const detail = todo.querySelector('.detailsClass');
          const trash=todo.querySelector('.cop');
          if (detail.style.display === 'flex') {
              detail.style.display = 'none';  // If it is already open, close it
 
 
          } else {
              detail.style.display = 'flex';  // open if close 
 
 
          }
          console.log('Details açıldı/kapatıldı');
      });
 });



document.addEventListener('DOMContentLoaded', () => {
     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
     
     tasks.forEach(task => {
                  
               
          //creating elements
          const newTodoDiv=document.createElement('div');
          const newTodoDivText=document.createElement('span');
          const newDetailsContainerDiv=document.createElement('div');
          const newDateDetailP=document.createElement('p');
          const newDetailsTextArea=document.createElement('textarea');
          const newTrashIcon=document.createElement('i');
          console.log('elementler yaratıldı')
          
          
          newTodoDiv.setAttribute('newTodoId', task.newtaskID);
          
          
          //parent


     
          todosClass.appendChild(newTodoDiv);
          newTodoDiv.appendChild(newTodoDivText);
          newTodoDiv.appendChild(newDetailsContainerDiv);
          newTodoDiv.appendChild(newTrashIcon);
          newDetailsContainerDiv.appendChild(newDateDetailP);
          newDetailsContainerDiv.appendChild(newDetailsTextArea);
          


          //adding classes
          newTodoDiv.classList.add('todo');
          newTodoDivText.classList.add('newtododivtext');
          newDetailsContainerDiv.classList.add('detailsClass');
     
          newDateDetailP.classList.add('datetimedetail');

          newDetailsTextArea.classList.add('details');

          newTrashIcon.classList.add('fa-trash');
          newTrashIcon.classList.add('fa-solid');
          newTrashIcon.classList.add('cop');


          newTodoDivText.textContent=task.newTaskName;
          newDateDetailP.textContent=task.newTaskDate;
          newDetailsTextArea.textContent=task.newTaskDetails;

          const newTodoId=task.newTodoId;
               


          //delete
          newTrashIcon.addEventListener('click',(e)=>{

          
               const selectedTodo = e.target.parentElement;
               const todoID = selectedTodo.getAttribute('newTodoId');

               // Delete task with ID from array
               tasks = tasks.filter(task => task.newtaskID != todoID);

               // update localstorage
               localStorage.setItem('tasks', JSON.stringify(tasks));

               // remove from DOM
               selectedTodo.remove();
          });





          //details
          newTodoDiv.addEventListener('click', (e) => {
               const detail = newTodoDiv.querySelector('.detailsClass');
               const trash=newTodoDiv.querySelector('.cop');
               if (detail.style.display === 'flex') {
                   detail.style.display = 'none';  // If it is already open, close it
      
      
               } else {
                   detail.style.display = 'flex';  // open if closed
      
      
               }
               console.log('Details açıldı/kapatıldı');
           });

     });


     searchbar.addEventListener('input',()=>{
          const searchTerm=searchbar.value.toLowerCase();
          const allTodos=todosClass.children;
     
     
          Array.from(allTodos).forEach(todo=>{
               const todoText=todo.textContent.toLowerCase();
     
               if(todoText.includes(searchTerm)){
                    todo.style.display='flex';
               }
               else{
                    todo.style.display='none';
               }
          });
     });
 });
 
 searchbar.addEventListener('focus', () => {
     if (searchbar.value === "Search a task") {
         searchbar.value = '';                         // Clear the default text
     }
 });


 searchbar.addEventListener('blur', () => {
     if (searchbar.value.trim() === '') {
         searchbar.value = "Search a task";          // Set default text if empty
     }
 });