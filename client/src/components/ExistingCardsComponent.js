import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';

export const ExistingCardsComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await axios('/v1/accounts');
          if (response.status === 200 && response?.data?.accounts) {
            setData(response.data.accounts);
            setIsLoading(false);
          } 
        })();
    }, []);

    const tableData = <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Card number</th>
                <th>Balance</th>
                <th>Limit</th>
            </tr>                                
        </thead>
        <tbody>
            {data && data.map(account => (
                <tr>
                    <td>{account.name}</td>
                    <td>{account.cardNumber}</td>
                    <td>{account.balance}</td>
                    <td>{account.limit}</td>
                </tr>
            ))}
        </tbody>
    </table>

    return isLoading ? <p>Loading...</p> 
    : <div style={{ margin: "15px "}}> 
        <h4>Existing Cards</h4> 
        {tableData}
    </div>;
};

