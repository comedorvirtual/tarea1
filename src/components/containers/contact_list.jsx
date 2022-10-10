import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {
    const defaultContact = new Contact('David', 'Peña', 'jpenha1219@gmail.com',true);
    return (
        <div>
            <div>
                CONTACTO:
            </div>
            {/* TODO Aplicar el componente */}
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
