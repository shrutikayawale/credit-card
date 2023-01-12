import React, {useEffect, useState} from 'react';
import axios from 'axios';

/** AddCardComponent is responsible for dislaying Add Card UI and handling API request/error handling */
export const AddCardComponent = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [limit, setLimit] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (name && cardNumber && limit) {
            setIsDisabled(false);
        }
    }, [name, cardNumber, limit]);
    
    const onNameChangeHandler = event => {
        setName(event.target.value);
    };

    const onCardNumberChangeHandler = event => {
        setCardNumber(event.target.value);
    };

    const onLimitChangeHandler = event => {
        setLimit(event.target.value);
    };

    const clearSuccessMessage = (message) => {
        setSuccessMessage(message);
        props.fetchAccounts(); //update the accounts on UI
        setName('');
        setCardNumber('');
        setLimit('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);        
    };

    const clearErrorMessage = (message) => {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage('');
        }, 3000);        
    };

    const addButtonHandler = async () => {        
        try {
            const response = await axios.post('/v1/accounts', {
                "name" : name,
                "limit": limit,
                "cardNumber": cardNumber
            });
    
            if (response.status === 201) {
              clearSuccessMessage(response?.data?.message);              
            } else {
                clearErrorMessage(response?.data?.message);                
            }
        } catch (error) {
            clearErrorMessage(error?.response?.data?.message);                      
        }
    };

    return <div style={{ margin: "15px "}}>
        <h4>Add</h4>
        <div>
        <label>
           <p>Name</p>
           <input type="text" value={name} onChange={onNameChangeHandler} style={{ width: '300px', height: '30px'}} name="name" />
        </label>
        <label>
           <p>Card number</p>
           <input type="text" value={cardNumber} onChange={onCardNumberChangeHandler} style={{ width: '300px', height: '30px'}} name="cardnumber" />
        </label>
        <label>
           <p>Limit</p>
           <input type="number" value={limit} onChange={onLimitChangeHandler} style={{ width: '300px', height: '30px'}} name="limit" />
        </label> 
        </div> 

        <button style={{ marginLeft: '2px', marginTop: '10px'}} onClick={addButtonHandler} disabled={isDisabled}>Add</button> 

        {errorMessage && <p style={{ marginLeft: '2px', marginTop: '10px', color: 'red'}}>{errorMessage}</p>} 
        {successMessage && <p style={{ marginLeft: '2px', marginTop: '10px', color: 'green'}}>{successMessage}</p>}      
    </div>
};
