        import {getStorage, pushStorage, saveStorage} from "./storage.js";
        import { renderTask } from "./ui.js";
        
        let addButton = document.getElementById("new-task-button");

        window.onload = (event) => {
                console.log("Local storage: \n" + localStorage.getItem("tasks"));
                getStorage().forEach(renderTask);
        }

        function addTask () {
            if (document.getElementById("input-task").value.trim() == "")
                return;

            //Crear variable con los datos para guardar en local storage
            let task = {
                id: crypto.randomUUID(),
                text: document.getElementById("input-task").value.trim(),
                completed: false
            }
            
            //Borrar texto del input
            document.getElementById("input-task").value = "";

            //Mostrar tarea en la interfaz
            renderTask(task);

            //Guardar tareas en local storage
            pushStorage(task)

        }

        //Función del botón "Añadir"
        addButton.onclick = addTask;