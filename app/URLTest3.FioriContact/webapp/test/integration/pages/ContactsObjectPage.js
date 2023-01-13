sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'URLTest3.FioriContact',
            componentId: 'ContactsObjectPage',
            entitySet: 'Contacts'
        },
        CustomPageDefinitions
    );
});