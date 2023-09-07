        function addTask() {
            const taskInput = document.getElementById("task");
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                const taskList = document.getElementById("taskList");
                const listItem = document.createElement("li");

                listItem.innerHTML = `
                    <input type="checkbox" class="checkbox">
                    <span>${taskText}</span>
                    <button onclick="removeTask(this)">Remove</button>
                `;

                taskList.appendChild(listItem);
                taskInput.value = "";
            }
        }

        function removeTask(button) {
            const taskList = document.getElementById("taskList");
            const listItem = button.parentNode;
            taskList.removeChild(listItem);
        }
   