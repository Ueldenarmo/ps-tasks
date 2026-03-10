let toDoList = {
    tasks: [
        {
            title: "Помыть посуду",
            id: 1,
            priority: 1,
        },
    ],

    addTask: function (newTask) {
        if (!("title" in newTask) || !("priority" in newTask)) {
            return "Ошибка: задачи должны содержать title и priority";
        }
        if (!("id" in newTask)) {
            const lastId = this.tasks[this.tasks.length - 1].id;
            newTask.id = lastId + 1;
        }
        this.tasks.push(newTask);
        return `Задача ${newTask.title} добавлена`;
    },

    deleteTask: function (taskId) {
        let findingOfIndex = this.tasks.findIndex((item) => item.id == taskId);
        if (findingOfIndex !== -1) {
            this.tasks.splice(findingOfIndex, 1);
            return "Задача удалена";
        } else {
            return "Ошибка: нет задачи по id";
        }
    },

    updateTask: function (taskId, updateData) {
        let findingOfTask = this.tasks.find((item) => item.id == taskId);
        if (!findingOfTask) {
            return "Ошибка: нет задачи по id";
        }
        if ("title" in updateData) {
            findingOfTask.title = updateData.title;
        }
        if ("priority" in updateData) {
            findingOfTask.priority = updateData.priority;
        }
        if (!("title" in updateData) && !("priority" in updateData)) {
            return "Нет данных для обновления";
        }
        return "Задача обновлена";
    },

    sortByPriority: function () {
        this.tasks.sort((a, b) => a.priority - b.priority);
        return "Сортировка выполнена";
    },
};

const newTask = {
    tasks: [
        {
            id: 1,
            name: "тест",
            description: "описание",
            order: 0,
        },
    ],
};

toDoList.addTask.call(newTask, { title: "Новая задача", priority: 2 });
toDoList.deleteTask.call(newTask, 2);
toDoList.updateTask.call(newTask, 1, { priority: 5 });
toDoList.sortByPriority.call(newTask);
console.log(newTask);
