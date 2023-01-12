import React from 'react';
import '../App.css';

/** ExistingCardsComponent will get all accounts details in props and display in tabular format */

export const ExistingCardsComponent = props => {
    const { isLoading, data } = props;   

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

