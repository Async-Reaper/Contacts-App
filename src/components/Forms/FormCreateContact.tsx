import { Button, TextField } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IContacts } from '../../models/IContact'
import { requests } from '../../services/PostService'
import { contactError } from '../../store/reducers/contactsReducer'
import { inputChange } from '../../store/reducers/inputReducer'
import { closeWindow } from '../../store/reducers/modalReducer'
import Error from '../UI/ErrorText/Error'

const FormCreateContact: FC = () => {
    const dispatch = useTypedDispatch()
    const [createContact, {}] = requests.useCreateContactMutation()

    const handleCreate = async (contact: IContacts) => {
        if (contact.name !== '' && contact.number !== '') {
            await createContact(contact)
            dispatch(closeWindow())
        } else {
            dispatch(contactError('Inputs must be filled!'))
        }
    }

    const newContact: IContacts = {
        userId: JSON.parse(localStorage.getItem('userId') || ''),
        name: '',
        number: ''
    }

    return (
        <div>
            <TextField 
                id="name-contact" 
                label="Name contact" 
                margin="normal"
                variant="filled" 
                onChange={(e) => {
                    dispatch(inputChange(e.target.value));
                    newContact.name = e.target.value
                }}
            />
            <TextField 
                id="number-contact" 
                label="Number contact" 
                margin="normal"
                variant="filled" 
                onChange={(e) => {
                    dispatch(inputChange(e.target.value));
                    newContact.number = e.target.value
                }}
            />
            <Button variant="contained" onClick={() => handleCreate(newContact)}>Create contact</Button>
            <Error />
        </div>
    )
}

export default FormCreateContact