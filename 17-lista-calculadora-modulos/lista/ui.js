import { getStorage, saveStorage } from "./storage.js";

        export function renderTask (task) {
            //Crear elementos de la nueva tarea
            let newTask = document.createElement("li");
            let label = document.createElement("label");
            let newRemoveButton = document.createElement("button");
            let check = document.createElement("input"); check.type="checkbox";

            label.textContent = task.text;

            //Marcar checkbox si la tarea está completada
            if (task.completed == true){
                check.checked = true;
                label.className = "checked";
            } else {
                label.className = "";
            }

            //Añadir estilo al botón "Eliminar"
            newRemoveButton.className = "removeButton";
            newRemoveButton.textContent = "Eliminar";   
            
            //Función del botón "Eliminar"
            newRemoveButton.id = task.id;
            newRemoveButton.onclick = function () {
                //Eliminar de local storage
                saveStorage(getStorage().filter((task) => task.id != newRemoveButton.id));
                
                //Eliminar de interfaz
                newTask.remove();
            }

            //Funcion del checkbox
            check.addEventListener('change', function () {
                let taskArray = getStorage();
                const index = taskArray.findIndex(t => t.id === task.id);

                if (this.checked) {
                    taskArray[index].completed = true;
                    label.className = "checked";
                }
                else{
                    taskArray[index].completed = false;
                    label.className = "";
                }

                saveStorage(taskArray);             
            }); 

            newTask.appendChild(check);
            newTask.appendChild(label);
            newTask.appendChild(newRemoveButton);
            document.getElementById("list").appendChild(newTask);

        }

        export function getInputText () {
            let input = document.getElementById("input-task").value.trim();
            let text = input.value;
            if (text == "")
                return false;
            return true;
        }
