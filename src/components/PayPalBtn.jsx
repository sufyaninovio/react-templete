import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from "react-router-dom";

const PayPalBtn = () => {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: '500',
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            // const { payer } = details;
            window.location.href = '/thank-you';
        });
    };

    const options = {
        'client-id': import.meta.env.VITE_PAYPAL_API,
        'disable-funding': 'card,paylater', 
    }

    return (
        <PayPalScriptProvider options={options}>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </PayPalScriptProvider>
    );
};

export default PayPalBtn;
