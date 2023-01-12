const Model = require('../model/model');
const { setDataInCache } = require('../helpers/cache');

const fetchAccountsAndUpdateCache = async () => {
    const data = await Model.find();
    const accounts = data.map(account => ({
        id: account._id,
        name: account.name,
        cardNumber: account.cardNumber,
        limit: `£ ${account.limit}`,
        balance: `£ ${account.balance}`
    }));

    await setDataInCache(JSON.stringify(accounts), 60); //save data in cache for 60 sec (expiry time)

    console.log(`Cache is refreshed with the latest data at - ${new Date().toISOString()}`)

    return accounts;
};

module.exports = { fetchAccountsAndUpdateCache };