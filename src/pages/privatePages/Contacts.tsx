import styled from '@emotion/styled';
import React, { FC } from 'react';
import ContactsList from '../../components/ContactsList';
import CreateContacts from '../../components/CreateContacts';
import Logout from '../../components/Logout';
import ModalWindowCreateContact from '../../components/ModalWindows/ModalWindowCreateContact';

const ButtonsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: 450
})

const Contacts: FC = () => {
  return (
    <div>
      <ModalWindowCreateContact />
      <ButtonsWrapper>
        <CreateContacts />
        <Logout />
      </ButtonsWrapper>
      <ContactsList />
    </div>
  )
}

export default Contacts