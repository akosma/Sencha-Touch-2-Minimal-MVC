Ext.define('TodoList.store.TaskStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    xtype: 'taskstore',
    config: {
        model: 'TodoList.model.Task',
        autoLoad: true,
        autoSync: true,
        singleton: true,
        storeId: 'TaskStore',
        proxy: {
            type: 'localstorage',
            id: 'senchatasks'
        }
    }
});
