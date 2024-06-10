import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.meesho.com/images/products/336139234/oypfg_400.webp" alt="" />
                <div className='ml-5 space-y-2'>
                    <p className=''>Urbane Fashionista Women Dresses</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>     
                    <p className='opacity-50 text-xs font-semibold'>Color: Grey</p> 

                </div>
            </div>

        </Grid>

        <Grid item xs={2}>
            <p>₹220</p>

        </Grid>


        <Grid item xs={4}>
           {true &&  <div>
            <p>

                <span>
                    Delivered on April 04
                </span>

            </p>

            <p className='text-xs'>
                Your Item Has Been Delivered
            </p>

           </div> }

          {false && <p>
                <span>
                    Expected Delivery on June 12
                </span>
            </p>}

        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard