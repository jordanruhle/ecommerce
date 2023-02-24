import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CheckoutNav from './CheckoutNav';
import BillingInfo from './BillingInfo';
import ShippingAddressForm from './ShippingAddressForm';
import RedButton from '../RedButton';
import CheckoutItemCard from './CheckoutItemCard';


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
        zip: 0,
        phone: 0,
    });

    const [shippingForm, setShippingForm] = useState(false);
    const [errors, setErrors] = useState([]);

    // const changeHandler = (e) => {
    //     // if billing form then do this:
    //     // if sameAddress === true then
    //     // check for e.target.name in shippingInfo
    //     // if name exist update billing and shipping

    //     setBillingInfo({
    //         ...billingInfo,
    //         [e.target.name]: e.target.value
    //     })
    //     console.log(billingInfo)
    // }

    const lowercaseFirstLetter = (string) => {
        return string.charAt(0).toLowerCase() + string.slice(1);
      }

    const changeHandler = (e) => {
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
                [lowercaseFirstLetter((name.substring(7)))]: value }));
          }
        } else if (name.startsWith('shipping')) {
          setShippingInfo(prevState => ({ 
            ...prevState,
            [lowercaseFirstLetter((name.substring(8)))]: value }));
        } else if (name.startsWith('stripe')) {
          setStripeInfo(prevState => ({ 
            ...prevState,
            [lowercaseFirstLetter((name.substring(6)))]: value }));
        } else {
          setOrderInfo(prevState => ({
            ...prevState,
            [name]: value }));
        }
        console.log(billingInfo)
        console.log(shippingInfo)
        console.log(stripeInfo)
      };

    const boolCheckboxHandler = (e) => {
        const bool = e.target.value === "true" ? true : false;
        setBillingInfo({
            ...billingInfo,
            [e.target.name]: bool
        })
        console.log(billingInfo)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/order")
    }

    // useEffect(() => {
    //     console.log("Same Shipping Address " + billingInfo.sameAddress)
    // }, [billingInfo.sameAddress])


    return (
        <div>
            <CheckoutNav />
            <div className='max-w-screen-md mx-auto'>

                <form className='bg-white p-10 ' action="">

                    {/*----------- Billing Information Form ------------ */}
                    <BillingInfo changeHandler={changeHandler} />


                    {/*----------- Shipping Address Same as Billing? ------------ */}
                    <h3 className='text-2xl my-4 uppercase'>Shipping Address </h3>
                    <div className='mb-2'>
                        <input onChange={boolCheckboxHandler} type="checkbox" name="sameAddress" htmlFor="shippingSameAsBilling" value="true" checked={billingInfo.sameAddress === true} /> <p className='inline'>Ship to My Billing Address</p>
                    </div>
                    <div className='mb-2'>
                        <input onChange={boolCheckboxHandler} type="checkbox" name="sameAddress" htmlFor="shippingDifferentThenBilling" value="false" checked={billingInfo.sameAddress === false} /> <p className='inline'>Ship to Different Address</p>
                    </div>


                    {/*----------- Shipping Information Form ------------ */}
                    {billingInfo.sameAddress === true ? <div></div>
                        : <ShippingAddressForm changeHandler={changeHandler} />
                    }


                    {/*----------- Shipping Type ------------ */}
                    <h3 className='text-2xl my-4 uppercase'>Pick a Shipping Option</h3>
                    <div className="max-w-sm">
                        <div className='flex justify-between mb-2'>
                            <div>
                                <input onChange={changeHandler} type="radio" name="deliveryMethod" htmlFor="economy" value="economy" /> <p className='inline'>Economy</p>
                            </div>
                            <p>
                                $79.99
                            </p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <div>
                                <input onChange={changeHandler} type="radio" name="deliveryMethod" htmlFor="standard" value="standard" defaultChecked /> <p className='inline'>Standard</p>
                            </div>
                            <p>
                                $79.99
                            </p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <div>
                                <input onChange={changeHandler} type="radio" name="deliveryMethod" htmlFor="twoDay" value="twoDay" /> <p className='inline'>Two Business Days</p>
                            </div>
                            <p>
                                $79.99
                            </p>
                        </div>
                    </div>

                    {/*----------- Credit Card Information ------------ */}
                    {/*----------- Credit Card ------------ */}
                    <h3 className='text-2xl my-4 uppercase'>Credit Card Information</h3>
                    {/*---------- Card Number ---------- */}
                    <div className="flex">
                        <div className='mb-6 mr-8 w-full'>
                            <p className='text-md font-semibold mb-2 uppercase'>Card Number</p>
                            <input onChange={changeHandler} type="text" name="stripeCardNumber" className=' w-full p-3 border' />
                        </div>
                        {/*---------- Card Security Code ---------- */}
                        <div className='mb-6 w-full'>
                            <p className='text-md font-semibold mb-2 uppercase'>Card Security Code</p>
                            <input onChange={changeHandler} type="text" name="stripeSecurityCode" className=' w-full p-3 border' />
                        </div>
                    </div>
                    {/*---------- Expiration Month---------- */}
                    <p className='text-md font-semibold mb-2 uppercase'>Expiration</p>
                    <div className='mb-6 flex'>
                        <select onChange={changeHandler} placeholder="Month" type="text" name="stripeExpirationMonth" className=' w-full p-3 mr-8 border' >
                            <option value="01">01-January</option>
                            <option value="02">02-February</option>
                            <option value="03">03-March</option>
                            <option value="04">04-April</option>
                            <option value="05">05-May</option>
                            <option value="06">06-June</option>
                            <option value="07">07-July</option>
                            <option value="08">08-August</option>
                            <option value="09">09-September</option>
                            <option value="10">10-October</option>
                            <option value="11">11-November</option>
                            <option value="12">12-December</option>
                        </select>
                        {/*---------- Expiration Year---------- */}
                        <select onChange={changeHandler} placeholder="Year" type="text" name="stripeExpirationYear" className=' w-full p-3 border' >
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-5">
                        <p className='col-span-3 uppercase font-semibold'>Item Description</p>
                        <div className='col-span-2 flex justify-between'>
                            <p className='uppercase font-semibold'>Each</p>
                            <p className='uppercase font-semibold'>Quantity</p>
                            <p className='uppercase font-semibold'>Total</p>
                        </div>
                    </div>
                    {cart.map((product, i) => (
                    // console.log(product.product_id)
                    <CheckoutItemCard key={i} id={product.product_id} />
                ))}
                    <RedButton buttonText="Submit Your Order" />
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm