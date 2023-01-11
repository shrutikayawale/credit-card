import React, {useEffect, useState} from 'react';
import { AddCardComponent } from './AddCardComponent';
import { ExistingCardsComponent } from './ExistingCardsComponent';

export const CreditCardComponent = () => {
    return <div>
        <h2>Credit Card System</h2>
        <AddCardComponent />
        <ExistingCardsComponent />
    </div>
};

