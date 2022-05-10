export function search(input,json){
    const result = json.filter((item) => {
        return Object.keys(item).some(key => {
            if(key === 'merchant_name' || key === 'category_name' || key === 'budget' || key === 'team_member' || key === 'gst' || key === 'amount'){
                console.log(JSON.stringify(item[key]));
                return JSON.stringify(item[key]).toLowerCase().trim().includes(input);
            }
            
        });
    });
    return result;
}
