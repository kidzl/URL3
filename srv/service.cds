using { Marketing_Contact } from './external/Marketing_Contact.cds';

using { URLTest3 as my } from '../db/schema';

@path : 'service/URLTest3'
service URLTest3Service
{
    entity Contacts as
        projection on Marketing_Contact.Contacts;
}

annotate URLTest3Service with @requires :
[
    'authenticated-user'
];
