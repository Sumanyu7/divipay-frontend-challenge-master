import React, {Component} from 'react';
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

class Row extends Component{
    render(){
        const transaction = this.props.transaction;
        const item = this.props.item;
    
        return(
            <Tr>
                <Td>{item+1}</Td>
                <Td>{transaction.merchant_name}</Td>
                <Td>
                    <Select defaultValue={transaction.category_name}> {categories.map((category)=>{
                        return(
                            <option key={category.category_id}>{category.category_name}</option>    
                        )})} 
                    </Select>
                </Td>
                <Td>{transaction.status}</Td>
                <Td>{transaction.date.slice(0,10)}</Td>
                <Td>{transaction.budget}</Td>
                <Td>{transaction.team_member}</Td>
                <Td>${transaction.gst}</Td>
                <Td>${transaction.amount}</Td>
                <Td>
                    <input type="checkbox" defaultChecked={transaction.receipt} disabled/>
                </Td>
                <Td>
                    <input type="checkbox" defaultChecked={transaction.billable} />
                </Td>
            </Tr>
        )}
}


 export default Row;