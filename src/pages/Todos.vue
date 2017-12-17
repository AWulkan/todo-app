<template>
<div>
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <h2 class="title">
                            Create a Todo item
                        </h2>
                        <div class="field">
                            <div class="control">
                                <input v-model.trim="todoText" maxlength="30" class="input is-large" type="text" placeholder="I need to...">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <div class="field is-grouped is-grouped-right">
                            <p v-if="editingTodoId" class="control">
                                <a @click="updateTodo" class="button is-link is-medium">update</a>
                            </p>
                            <p v-else class="control">
                                <a @click="createTodo" class="button is-link is-medium">Create</a>
                            </p>
                            <p class="control">
                                <a @click="todoText = ''" class="button is-dark is-medium">Cancel</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <div v-for="(todo, index) in todos" :key="index" class="box">
                        <div class="box-content">
                            <p class="box-todo-text">
                                <span :class="{strike: todo.done}">{{todo.text}}</span>
                            </p>
                            <div class="box-todo-buttons">
                                <div @click="enableEditing(todo)" class="box-todo-button box-todo-edit">
                                    Edit
                                </div>
                                <div @click="toggleTodoStatus(todo.id)" class="box-todo-button box-todo-status">
                                    <span v-if="todo.done">Open</span>
                                    <span v-else>Done</span>
                                </div>
                                <div @click="deleteTodo(todo.id)" class="box-todo-button box-todo-delete">
                                    X
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Todos',
    data () {
        return {
            todos: [
                {id: 'hf787223rh8', done: false, text: 'This is a todo item'},
                {id: 'hf787ehhwww', done: false, text: 'This is todo item 1'},
                {id: 'hf7872qwqwe', done: true, text: 'This is todo item 2'},
                {id: 'hf78i0e9use', done: false, text: 'This is todo item 3'}
            ],
            todoText: '',
            editingTodoId: ''
        }
    },
    methods: {
        createTodo() {
            if (this.todoText.trim().length < 1) { return; }
            this.todos.push({id: 'hf78i0asdse', done: false, text: this.todoText})
        },
        updateTodo() {
            for (let todo of this.todos) {
                if (todo.id === this.editingTodoId) {
                    todo.text = this.todoText;
                    break;
                }
            }

            this.editingTodoId = '';
            this.todoText = '';
        },
        enableEditing(todo) {
            this.editingTodoId = todo.id;
            this.todoText = todo.text;
        },
        deleteTodo(id) {
            for (let todo in this.todos) {
                if (this.todos[todo].id === id) {
                    this.todos.splice(todo, 1);
                    break;
                }
            }
        },
        cancelTodo() {
            this.editingTodoId = '';
            this.todoText = '';
        },
        toggleTodoStatus(id) {
            for (let todo of this.todos) {
                if (todo.id === id) {
                    todo.done = !todo.done;
                    break;
                }
            }
        }
    }
}
</script>

<style scoped>
.strike {
    text-decoration: line-through;
}
/* Override default */
.box {
    padding: 0;
    overflow: hidden;
    height: 3rem;
}

.box-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.box-todo-text {
    display: flex;
    font-size: 1.5rem;
    padding: 0.3rem 1rem;
    color: #333;
}

.box-todo-buttons {
    display: flex;
    height: 100%;
    width: 12rem;
}

.box-todo-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
    color: #fff;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
}

.box-todo-edit {
    background-color: #2980b9;
}

.box-todo-delete {
    background-color: #c0392b;
}

.box-todo-status {
    background-color: #f39c12;
}

.box-todo-status:hover {
    background-color: #f1c40f;
}

.box-todo-delete:hover {
    background-color: #e74c3c;
}

.box-todo-edit:hover {
    background-color: #3498db;
}
</style>