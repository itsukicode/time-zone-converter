import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './style/Global';
import TimeZoneRow from './App/TimeZoneRow/index';

const Header = styled.h1`
    font-size: 35px;
    font-style: italic;
`;
const App: React.FC = () => (
    <>
        <GlobalStyle />
        <Header> Time Zone Covnerter</Header>
        <TimeZoneRow />
        <TimeZoneRow />
    </>
);
export default App;
