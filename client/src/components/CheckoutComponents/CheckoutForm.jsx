import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CheckoutNav from './CheckoutNav';
import BillingInfo from './BillingInfo';
import ShippingAddressForm from './ShippingAddressForm';
import RedButton from '../RedButton';
import { DeliveryMethod } from './DeliveryMethod';
import CreditCardForm from './CreditCardForm';
import CheckoutOrderSummary from './CheckoutOrderSummary';
import SameAddressCheckbox from './SameAddressCheckbox';


const CheckoutForm = ({ cart }) => {
    const [orderInfo, setOrderInfo] = useState({
        name: "",
        email: "",
        shipping: {},
        billing: {},
        status: 'pending',
        products: [],
        subTotal: 0.00,
        deliveryMethod: 'standard',
        shippingCost: 0.00,
        taxes: 0.00,
        total: 0.00
    })

    const [billingInfo, setBillingInfo] = useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        address2: "",
        city: "",
        zip: 0,
        phone: 0,
        sameAddress: true,
    });

    const [stripeInfo, setStripeInfo] = useState({
        cardNumber: 0,
        securityCode: 0,
        expirationMonth: "01",
        expirationYear: 2023
    });

    const [shippingInfo, setShippingInfo] = useState({
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        address2: "",
        city: "",
        zip: 0
    });

    const [shippingForm, setShippingForm] = useState(false);
    const [errors, setErrors] = useState([]);

    const lowercaseFirstLetter = (string) => {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    const CheckoutChangeHandler = (e) => {
        const { name, value } = e.target;
        // Update the appropriate object based on the input name
        if (name.startsWith('billing')) {
            setBillingInfo(prevState => ({
                ...prevState,
                [lowercaseFirstLetter((name.substring(7)))]: value
            }));
            if (billingInfo.sameAddress && shippingInfo.hasOwnProperty(lowercaseFirstLetter(name.substring(7)))) {
                setShippingInfo(prevState => ({
                    ...prevState,
                    [lowercaseFirstLetter((name.substring(7)))]: value
                }));
            }
        } else if (name.startsWith('shipping')) {
            setShippingInfo(prevState => ({
                ...prevState,
                [lowercaseFirstLetter((name.substring(8)))]: value
            }));
        } else if (name.startsWith('stripe')) {
            setStripeInfo(prevState => ({
                ...prevState,
                [lowercaseFirstLetter((name.substring(6)))]: value
            }));
        } else {
            setOrderInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
        console.log(billingInfo)
        console.log(shippingInfo)
        console.log(orderInfo)
    };

    const boolCheckboxHandler = (e) => {
        const bool = e.target.value === "true" ? true : false;
        setBillingInfo({
            ...billingInfo,
            [e.target.name]: bool
        })
        if (bool === true) {
            setShippingInfo({
                firstName: billingInfo.firstName,
                lastName: billingInfo.lastName,
                company: billingInfo.company,
                address: billingInfo.address,
                address2: billingInfo.address2,
                city: billingInfo.city,
                zip: billingInfo.zip
            })
        }
        if (bool === false) {
            setShippingInfo({
                firstName: "",
                lastName: "",
                company: "",
                address: "",
                address2: "",
                city: "",
                zip: 0
            })
        }
        console.log(billingInfo)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/order")
    }

    return (
        <div>
            <CheckoutNav />
            <div className='max-w-screen-md mx-auto'>

                <form className='bg-white p-10 ' action="">

                    {/*----------- Billing Information Form ------------ */}
                    <BillingInfo CheckoutChangeHandler={CheckoutChangeHandler} />

                    {/*----------- Shipping Address Same as Billing? ------------ */}
                    <SameAddressCheckbox boolCheckboxHandler={boolCheckboxHandler} billingInfo={billingInfo}/>

                    {/*----------- Shipping Information Form ------------ */}
                    {
                        billingInfo.sameAddress === true
                            ? null
                            : <ShippingAddressForm CheckoutChangeHandler={CheckoutChangeHandler} />
                    }

                    {/*----------- Shipping Type ------------ */}
                    <DeliveryMethod CheckoutChangeHandler={CheckoutChangeHandler} />

                    {/*----------- Credit Card Information ------------ */}
                    <CreditCardForm CheckoutChangeHandler={CheckoutChangeHandler} />
                    {/*----------- Product Cards/Order Summary ------------ */}
                    <CheckoutOrderSummary cart={cart} />

                    <RedButton buttonText="Submit Your Order" />
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm