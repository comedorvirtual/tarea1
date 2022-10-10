import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h4>
                Nombre: {contact.name}
            </h4>
            <h4>
                Apellido: {contact.surname}
            </h4>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                Conetado: {contact.conect ? 'CONTACTO EN LINEA' : 'CONTACTO NO DISPONIBLE'}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
