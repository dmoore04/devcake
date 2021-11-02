const endpoints: string = require('../endpoints.json');

const fetchEndpoints = async (): Promise<string> => endpoints;

export default fetchEndpoints;
