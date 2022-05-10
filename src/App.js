import React from 'react';
import styled from 'styled-components';
import FilterableTable from './components/FilterableTable';

const PageContainer = styled.div`
    max-width: 1200px;
    padding: 24px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
`;

const App = () => (
    <PageContainer>
        <Title>Transactions</Title>
        <FilterableTable/>
    </PageContainer>
)

export default App;