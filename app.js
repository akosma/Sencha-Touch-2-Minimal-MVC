Ext.application({
    name: 'TodoList',
    models: ['Task'],
    stores: ['TaskStore'],
    views: ['TaskList'],
    controllers: ['TaskController'],
    launch: function() {
        Ext.Viewport.add({
            xtype: 'tasklist'
        });
    }
});

