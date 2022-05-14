import React, {useState} from 'react';
import categories from '../data/categories.json';
import merchants from '../data/merchants.json';
import transactions from '../data/transactions.json';
import Table from './Table';
import SearchBar from './SearchBar';
import {search} from '../helpers/search'

// join the three json together
var combinedJson = transactions.map(x => Object.assign(x, merchants.find(y => y.merchant_id === x.merchant)));
combinedJson.map(x => Object.assign(x, categories.find(y => y.category_id === x.category)));

const FilterableTable = () => {
    const [data, setData] = useState(combinedJson);

    const handleSearch = (e) => {
        e.preventDefault();
        const input = e.target.value;
        const result = search(input, combinedJson);
        setData(result);
    }

    return (
            <div>
                <SearchBar update={handleSearch}/>
                <Table data ={data}/>
            </div>
    )
}

 export default FilterableTable;