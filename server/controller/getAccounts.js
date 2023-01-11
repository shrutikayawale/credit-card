const { getDataFromCache, setDataInCache } = require('../helpers/cache');
const Model = require('../model/model');

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
            const data = await Model.find();
            const accounts = data.map(account => ({
              id: account._id,
              name: account.name,
              cardNumber: account.cardNumber,
              limit: account.limit,
              balance: `£ ${account.balance}`
            })); 

            await setDataInCache(JSON.stringify(accounts), 60); //save data in cache for 60 sec (expiry time)

            response.send({
                status: 200,
                accounts: accounts
            });
        }        
    } catch (error) {
        response.send({
            status: 400,
            message: "Something went wrong. Please try again.",
            error: error
        })
    }
};

module.exports = { getAccounts }; 