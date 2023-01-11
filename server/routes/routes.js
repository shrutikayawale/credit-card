const { addAccount } = require("../controller/addAccount");
const { getAccounts } = require("../controller/getAccounts");
const express = require('express');

const router = express.Router()

router.get("/accounts", getAccounts); //This endpoint will fetch all records/accounts from db

router.post("/accounts", addAccount); //This endpoint will create new record/account

module.exports = router;

