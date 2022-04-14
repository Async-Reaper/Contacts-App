import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteWrapper from './components/RouteWrapper';

const AppWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 20px'
})

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <RouteWrapper />
      </AppWrapper>
    </BrowserRouter>    
  );
}

export default App;
