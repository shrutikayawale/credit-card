const { getDataFromCache } = require('../helpers/cache');
const { fetchAccountsAndUpdateCache } = require('../helpers/queries');

const getAccounts = async (request, response) => {
    try {
        //check if data exists in cache
        const cacheResults = await getDataFromCache();
        const parsedCacheResults = JSON.parse(cacheResults);
        if (cacheResults) {
            response.send({
                status: 200,
                accounts: parsedCacheResults,
            });
        } else {
            const accounts = await fetchAccountsAndUpdateCache();   

            response.status(200).send({
                status: 200,
                accounts: accounts                  
            });
        }        
    } catch (error) {
        response.status(400).send({
            status: 400,
            message: "Something went wrong. Please try again.",
            error: error
        })
    }
};

module.exports = { getAccounts }; 