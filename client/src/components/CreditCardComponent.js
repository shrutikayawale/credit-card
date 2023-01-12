import React, {useEffect, useState} from 'react';
import { AddCardComponent } from './AddCardComponent';
import { ExistingCardsComponent } from './ExistingCardsComponent';
import axios from 'axios';

export const CreditCardComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const fetchAccounts = async () => {
        const response = await axios('/v1/accounts');
        if (response.status === 200 && response?.data?.accounts) {
          setData(response.data.accounts);
          setIsLoading(false);
        };
    };

    useEffect(() => {
        (() => {
            fetchAccounts();          
        })();
    }, []);

    return <div>
        <h2>Credit Card System</h2>
        <AddCardComponent fetchAccounts={fetchAccounts}/>
        <ExistingCardsComponent data={data} isLoading={isLoading}/>
    </div>
};
    
