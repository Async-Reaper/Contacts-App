import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IContacts } from '../models/IContact'
import { requests } from '../services/PostService'
import ContactsItem from './ContactsItem'
import ModalWindowEdit from './ModalWindows/ModalWindowEdit'
import Loader from './UI/Loader/Loader'
import Search from './UI/Search/Search'

const ContactsWrapper = styled('div')({
  margin: '30px 0'
})

const ContactsList: FC = () => {
  
  const { data: contacts, isLoading } = requests.useGetAllContactQuery(JSON.parse(localStorage.getItem('userId') || ''))
  const { search } = useTypedSelector(state => state.contacts)
  const sorted: IContacts[] = useSearch(contacts!, search)
  return (
    <ContactsWrapper>
      <ModalWindowEdit />
      <Search />
        {
          isLoading && <Loader />
        }
        {
          contacts && sorted.map(contact => 
              <ContactsItem key={contact.id} contact={contact} name={contact.name} number={contact.number} />)
        }
    </ContactsWrapper>
    
  )
}

export default ContactsList
