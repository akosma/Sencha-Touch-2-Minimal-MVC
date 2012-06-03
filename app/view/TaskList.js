Ext.define('TodoList.view.TaskList', {
    extend: 'Ext.dataview.List',
    xtype: 'tasklist',
    config: {
        store: {
            xtype: 'taskstore'
        },
        displayField: 'title',
        itemTpl: '<div>{title}</div>',
        items: [{
            xtype: 'toolbar',
            title: 'To Do List',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                iconCls: 'add',
                iconMask: true,
                ui: 'plain',
                action: 'createTask'
            }]
        }]
    }
});

