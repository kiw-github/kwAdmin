
Ext.define('kwAdmin.view.netint',{
    extend: 'Ext.panel.Panel',
    xtype: 'netint',

    requires: [
        'kwAdmin.view.netintController',
        'kwAdmin.view.netintModel'
    ],

    controller: 'netint',
    viewModel: {
        type: 'netint'
    },

    html: 'Hello, World!!'
});
