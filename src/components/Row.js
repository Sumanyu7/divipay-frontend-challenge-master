import React from 'react';
import styled from 'styled-components';
import categories from '../data/categories.json';

const Tr = styled.tr`
    border-bottom: 1px solid #dddddd;
`;

const Td = styled.td`
    padding: 12px 15px;
`;

const Select = styled.select`
    padding: 0 30px 0 10px;
    border: 1px solid #e0e0e0;
    margin: 0 5px 5px 0;
`;

const Row = (props) => {
        return(
            <Tr>
                <Td>{props.item+1}</Td>
                <Td>{props.transaction.merchant_name}</Td>
                <Td>
                    <Select defaultValue={props.transaction.category_name}> {categories.map((category)=>{
                        return(
                            <option key={category.category_id}>{category.category_name}</option>    
                        )})} 
                    </Select>
                </Td>
                <Td>{props.transaction.status}</Td>
                <Td>{props.transaction.date.slice(0,10)}</Td>
                <Td>{props.transaction.budget}</Td>
                <Td>{props.transaction.team_member}</Td>
                <Td>${props.transaction.gst}</Td>
                <Td>${props.transaction.amount}</Td>
                <Td>
                    <input type="checkbox" defaultChecked={props.transaction.receipt} disabled/>
                </Td>
                <Td>
                    <input type="checkbox" defaultChecked={props.transaction.billable} />
                </Td>
            </Tr>
        )
}


 export default Row;