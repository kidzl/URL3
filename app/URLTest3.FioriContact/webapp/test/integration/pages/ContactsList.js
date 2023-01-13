sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'URLTest3.FioriContact',
            componentId: 'ContactsList',
            entitySet: 'Contacts'
        },
        CustomPageDefinitions
    );
});