Ext.define('TodoList.controller.TaskController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            createTaskButton: 'button[action=createTask]'
        },
        control: {
            createTaskButton:  {
                tap: 'createTaskFunction'
            }
        }
    },
    createTaskFunction: function(button, e, opts) {
        var task = Ext.create('TodoList.model.Task', {
            title: 'boom2',
            description: 'bam',
            completed: false,
            dueDate: new Date()
        });
        var store = Ext.getStore('TaskStore');
        store.add(task);
    }
});
