angular.module('app', [])
.component('todoList', {
  controller: function() {
    this.todos = [];
    this.addTodo = () => {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    };

    this.removeTodo = (index) => {
      this.todos.splice(index, 1);
    }

  },
  template: `
    <h1>Todo List</h1>
    <input ng-model="$ctrl.newTodo">
    <button ng-click="$ctrl.addTodo()">add</button>
    <ul>
      <entry
        ng-click="$ctrl.removeTodo($index)"
        ng-repeat="todo in $ctrl.todos track by $index"
        todo="todo"
      >
    </ul>
    <pre></pre>
  `
})

