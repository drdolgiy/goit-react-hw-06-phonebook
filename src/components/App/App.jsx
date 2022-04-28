
import {Form} from '../Form/Form';
import {Filter} from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';
import {Container} from '../App/App.styled'
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { filteredContacts } from 'redux/filterSlice';

export default function App() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    console.log(contacts);
    const filter = useSelector(state => state.filter.value);

    const filteredContact = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
             (contact.name.toLowerCase().includes(normalizedFilter)));
    };

    const changeFilter = event => {
        const inputValue = event.currentTarget.value;
        dispatch(filteredContacts(inputValue));
    };

    const deleteContact = id => {
        dispatch(removeContact(id));
    };

    return (
        <Container>
            <h1>Phonebook</h1>

            <Form></Form>

            <Filter value={filter} onChange={changeFilter} />

            <h2>Contacts</h2>

            <ContactList contacts={contacts}
                filteredContact={filteredContact()}
                deleteContact={deleteContact}
            />
        </Container>
    );    
};