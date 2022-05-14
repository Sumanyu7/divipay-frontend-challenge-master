const SearchableFields = ['merchant_name', 'category_name', 'budget', 'team_member', 'gst', 'amount'];

export function search(input,json){
    let result = json.filter((item) => {
        return Object.keys(item).some(key => {
            if(SearchableFields.includes(key)){
                return JSON.stringify(item[key]).toLowerCase().trim().includes(input);
            }
            
        });
    });
    return result;
}
