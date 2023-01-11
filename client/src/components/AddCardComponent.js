import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const AddCardComponent = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [limit, setLimit] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const addButtonHandler = async () => {
        
        const response = await axios.post('/v1/accounts', {
            "name" : name,
            "limit": limit,
            "cardNumber": cardNumber
        });

        if (response.status === 200 && response?.data?.accounts) {
          alert('Data added');
        } else {
            setErrorMessage(response?.data?.message);
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
           <input type="text" value={limit} onChange={onLimitChangeHandler} style={{ width: '300px', height: '30px'}} name="limit" />
        </label> 
        </div> 

        <button style={{ marginLeft: '2px', marginTop: '10px'}} onClick={addButtonHandler} disabled={isDisabled}>Add</button> 

        {errorMessage && <p style={{ marginLeft: '2px', marginTop: '10px', color: 'red'}}>{errorMessage}</p>}      
    </div>
};
