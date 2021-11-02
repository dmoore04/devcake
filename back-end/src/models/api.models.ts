const endpoints: string = require('../endpoints.json');

console.log(endpoints);

const fetchEndpoints = async (): Promise<string> => endpoints;

export default fetchEndpoints;
