import React from 'react'

const CreditCardForm = ({CheckoutChangeHandler}) => {
    return (
        <>
            {/*----------- Credit Card ------------ */}
            <h3 className='text-2xl my-4 uppercase'>Credit Card Information</h3>
            {/*---------- Card Number ---------- */}
            <div className="flex">
                <div className='mb-6 mr-8 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase'>Card Number</p>
                    <input onChange={CheckoutChangeHandler} type="text" name="stripeCardNumber" className=' w-full p-3 border' />
                </div>
                {/*---------- Card Security Code ---------- */}
                <div className='mb-6 w-full'>
                    <p className='text-md font-semibold mb-2 uppercase'>Card Security Code</p>
                    <input onChange={CheckoutChangeHandler} type="text" name="stripeSecurityCode" className=' w-full p-3 border' />
                </div>
            </div>
            {/*---------- Expiration Month---------- */}
            <p className='text-md font-semibold mb-2 uppercase'>Expiration</p>
            <div className='mb-6 flex'>
                <select onChange={CheckoutChangeHandler} placeholder="Month" type="text" name="stripeExpirationMonth" className=' w-full p-3 mr-8 border' >
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
                <select onChange={CheckoutChangeHandler} placeholder="Year" type="text" name="stripeExpirationYear" className=' w-full p-3 border' >
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
        </>
    )
}

export default CreditCardForm