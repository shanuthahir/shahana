import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'


const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20 '>
            <div>
                <h1 className='font-bold text-xl py-7 '>Delivery Address</h1>

                <AddressCard />
            </div>

            <div className='py=20'>
                <OrderTracker activeStep={3}/>

            </div>

              <Grid className='space-y-5' container>
                {[1,1,1,1,1].map((item)=>
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>

                    <Grid items xs={6}>
                        <div className='flex items-center space-x-2'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.meesho.com/images/products/122815106/hhesv_400.webp" alt="" />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>LADIES YELLOW GOWN</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span> Color: yellow</span>
                                <span>Size: M </span>  </p>
                                <p>₹368</p>
                            </div>
                        </div>

                    </Grid>

                </Grid> )}


            </Grid>
        </div>
    )
}

export default OrderDetails