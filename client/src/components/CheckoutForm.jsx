import React from 'react'
import { FaMountain } from 'react-icons/fa'
import ItemCard from './ItemCard'

const CheckoutForm = () => {
    return (
        <div>
            <div className='w-full flex justify-center sm:justify-between items-center py-2 px-8 2xl:px-72 text-white bg-stone-800 font-body flex-wrap'>

                {/*----------- Company Logo ------------ */}
                <h1 className='text-2xl font-bold bg-white rounded-full border-slate-300 border-8 px-2 text-stone-800 min-w-max' > Mountain <FaMountain className='mb-1' style={{ display: "inline-block" }} /> Bikes</h1>
            </div>
            <div className='max-w-screen-md mx-auto'>


                {/*----------- Billing Address ------------ */}
                <form className='bg-white p-10 ' action="">
                    <h3 className='text-2xl my-4 uppercase'>Biling Address </h3>
                    <p className=' mb-4 text-zinc-500'>Enter the billing information associated with your credit card.</p>

                    {/*---------- Email ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Email*</p>
                        <input type="email" name="email" className=' w-full p-3 border' />
                    </div>
                    {/*---------- First Name ---------- */}
                    <div className=' mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Frist Name*</p>
                        <input type="text" name="firstName" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Last Name ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Last Name*</p>
                        <input type="text" name="lastName" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Company ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Company</p>
                        <input type="text" name="company" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Address ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Address*</p>
                        <input type="text" name="address" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Address Line 2 ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Address Line 2 (Optional)</p>
                        <input type="text" name="address2" className=' w-full p-3 border' />
                    </div>
                    {/*---------- City ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>City*</p>
                        <input type="text" name="city" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Zip/Postal Code ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Zip/Postal Code*</p>
                        <input type="text" name="zip" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Phone ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Phone*</p>
                        <input type="text" name="phoneNumber" className=' w-full p-3 border' />
                    </div>

                    {/*----------- Shipping Address ------------ */}
                    <h3 className='text-2xl my-4 uppercase'>Shipping Address </h3>
                    <p className='mb-2'>
                        <input type="radio" name="differentShipingAddress" for="shippingSameAsBilling" /> <p className='inline'>Ship to My Billing Address</p>
                    </p>
                    <p className='mb-2'>
                        <input type="radio" name="differentShipingAddress" for="shippingDifferentThenBilling" value="" /> <p className='inline'>Ship to Different Address</p>
                    </p>

                    <p>Enter new shipping address below:</p>

                    {/*---------- First Name ---------- */}
                    <div className=' my-6'>
                        <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Frist Name*</p>
                        <input type="text" name="shippingFirstName" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Last Name ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Last Name*</p>
                        <input type="text" name="shippingLastName" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Company ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Company</p>
                        <input type="text" name="ShippingCompany" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Address ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Address*</p>
                        <input type="text" name="shippingAddress" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Address Line 2 ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Address Line 2 (Optional)</p>
                        <input type="text" name="shippingAddress2" className=' w-full p-3 border' />
                    </div>
                    {/*---------- City ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>City*</p>
                        <input type="text" name="city" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Zip/Postal Code ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Zip/Postal Code*</p>
                        <input type="text" name="zip" className=' w-full p-3 border' />
                    </div>
                    {/*---------- Phone ---------- */}
                    <div className='mb-6'>
                        <p className='text-md font-semibold mb-2 uppercase'>Phone*</p>
                        <input type="text" name="shippingPhoneNumber" className=' w-full p-3 border' />
                    </div>

                    {/*----------- Credit Card Information ------------ */}
                    <h3 className='text-2xl my-4 uppercase'>Credit Card Information</h3>
                    <div className="max-w-sm">
                        <div className='flex justify-between mb-2'>
                            <p>
                                <input type="radio" name="deliveryMethod" for="economy" /> <p className='inline'>Economy</p>
                            </p>
                            <p>
                                $79.99
                            </p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p>
                                <input type="radio" name="deliveryMethod" for="standard" /> <p className='inline'>Standard</p>
                            </p>
                            <p>
                                $79.99
                            </p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p>
                                <input type="radio" name="deliveryMethod" for="twoDay" /> <p className='inline'>Two Business Days</p>
                            </p>
                            <p>
                                $79.99
                            </p>
                        </div>
                    </div>

                    {/*----------- Credit Card ------------ */}
                    <h3 className='text-2xl my-4 uppercase'>Pick a Shipping Option </h3>
                    {/*---------- Card Number ---------- */}
                    <div className="flex">
                        <div className='mb-6 mr-8 w-full'>
                            <p className='text-md font-semibold mb-2 uppercase'>Card Number</p>
                            <input type="text" name="cardNumber" className=' w-full p-3 border' />
                        </div>
                        {/*---------- Card Security Code ---------- */}
                        <div className='mb-6 w-full'>
                            <p className='text-md font-semibold mb-2 uppercase'>Card Security Code</p>
                            <input type="text" name="securtityCode" className=' w-full p-3 border' />
                        </div>
                    </div>
                    {/*---------- Expiration Month---------- */}
                    <p className='text-md font-semibold mb-2 uppercase'>Expiration</p>
                    <div className='mb-6 flex'>
                        <select type="text" name="expiration" className=' w-full p-3 mr-8 border' >
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
                        <select type="text" name="expiration" className=' w-full p-3 border' >
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
                        <div className="col-span-3 flex gap-8 h-24">
                            <img src="https://content.backcountry.com/images/items/1200/YTI/YTIR1DG/TUR.jpg" alt="cart item" />
                            <div>
                                <p className='uppercase font-semibold'>Yeti Cycles SB150 Turq T1 XT Mountain Bike</p>
                                <p>Turquoise</p>
                                <p>XL</p>
                            </div>
                        </div>
                        <div className='col-span-2 flex justify-between'>
                            <p>$6,800</p>
                            <p>1</p>
                            <p>$6,800</p>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Item Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm