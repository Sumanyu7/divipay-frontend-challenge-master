import React from 'react';
import styled from 'styled-components';
import Row from './Row';

const StyledTable = styled.table`
    border-collapse: collapse;
    min-width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    margin: auto;
`;

const Tr = styled.tr`
    background-color: #009879;
    color: #ffffff;
    text-align: left;
`;

const Th = styled.th`
    padding: 12px 15px;
`;

const Table = (props) => {

    return (
        <div>
            <StyledTable>
                <thead>
                    <Tr>
                        <Th>No.</Th>
                        <Th>Merchant</Th>
                        <Th>Category</Th>
                        <Th>Status</Th>
                        <Th>Date</Th>
                        <Th>Budget</Th>
                        <Th>Team member</Th>
                        <Th>GST</Th>
                        <Th>Amount</Th>
                        <Th>Receipt</Th>
                        <Th>Billable</Th>
                    </Tr>
                </thead>
                <tbody>
                    {props.data.map(
                    (info,i)=>{
                    return(
                    <Row key={i} transaction={info} item = {i}/>
                    )})}
                </tbody>
            </StyledTable>
        </div>
    );      
}
 
 export default Table;