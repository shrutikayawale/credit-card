const Redis = require("ioredis");

// Create a Redis instance (it will connect to localhost:6379.)

const redis = new Redis();
const myKey = 'accounts';

const getDataFromCache = async () => {
  console.log('Fetching data from cache');
  const cachedDetails = await redis.get(myKey);
  return cachedDetails;
};

const setDataInCache = async (accounts, expiryTime) => {
  console.log('Data is set in cache');
  await redis.set(myKey, accounts, 'ex', expiryTime);
};

module.exports = { getDataFromCache, setDataInCache };
