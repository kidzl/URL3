sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'URLTest3/FioriContact/test/integration/FirstJourney',
		'URLTest3/FioriContact/test/integration/pages/ContactsList',
		'URLTest3/FioriContact/test/integration/pages/ContactsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ContactsList, ContactsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('URLTest3/FioriContact') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheContactsList: ContactsList,
					onTheContactsObjectPage: ContactsObjectPage
                }
            },
            opaJourney.run
        );
    }
);