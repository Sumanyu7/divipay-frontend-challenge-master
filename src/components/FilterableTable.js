import React, {Component} from 'react';
import styled from 'styled-components';
import categories from '../data/categories.json';
import merchants from '../data/merchants.json';
import transactions from '../data/transactions.json';
import Row from './Row';
import {search} from '../helpers/search'

const Input = styled.input`
    display: block;
    width: 300px;
    margin: auto;
    margin-bottom:20px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
`;

const Table = styled.table`
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
// join the three json together
var combinedJson = transactions.map(x => Object.assign(x, merchants.find(y => y.merchant_id === x.merchant)));
combinedJson.map(x => Object.assign(x, categories.find(y => y.category_id === x.category)));

class FilterableTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            filteredData : combinedJson 
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    async handleSearch(event) {
        event.preventDefault();
        const input = event.target.value;
        const result = search(input, combinedJson);
        this.setState({filteredData : result})
    }

        render() {
            return (
                <div>
                    <div>
                        <Input type="text" placeholder='Search' onChange={this.handleSearch}/>
                    </div>
                    <Table className="table">
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
                            {this.state.filteredData.map(
                            (info,i)=>{
                            return(
                            <Row key={i} transaction={info} item = {i}/>
                            )})}
                        </tbody>
                    </Table>
                </div>
            );
        }  
    }

 
 export default FilterableTable;