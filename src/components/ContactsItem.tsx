import styled from '@emotion/styled';
import React, { FC } from 'react'
import { IContacts } from '../models/IContact';
import ButtonsContact from './ButtonsContact';

interface ContactsItemProps {
  name: string;
  number: string;
  contact: IContacts
}

const ContactWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: 450,
  alignItems: 'center',
  padding: '10px 20px',
  margin: '35px 0',
  borderRadius: 5,
  background: '#fff',
  boxShadow: '0px 0px 11px #808080',
})

const ContactsItem: FC<ContactsItemProps> = ({ contact, name, number}) => {

  return (
    <ContactWrapper>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <ButtonsContact contact={contact}/>
    </ContactWrapper>
  )
}

export default ContactsItem