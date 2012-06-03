Ext.define('TodoList.model.Task', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'completed',
            type: 'boolean'
        }, {
            name: 'dueDate',
            type: 'date'
        }, {
            name: 'title',
            type: 'string'
        }, {
            name: 'description',
            type: 'string'
        }]
    }
});
