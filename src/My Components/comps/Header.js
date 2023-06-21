import React from 'react';
import '../css/revision.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function name(props) {

    return (
        <div className='header'>

            <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <span className='logo-span'>.in</span>



            <div className='header_search'>
                <input placeholder='Search Amazon.in' className='h_searchInp' type='text' />
                <SearchOutlinedIcon className='header_searchicon' />

            </div>



            <div className='header-nav'>
                <div className='h_option'>
                    <div className='h_o_one'>
                        Hello om!
                    </div>
                    <div className='h_o_two'>
                        Accounts & Lists

                    </div>
                </div>
                <div className='h_option'>
                    <div className='h_o_one'>
                        Returns
                    </div>
                    <div className='h_o_two'>
                        & Orders

                    </div>
                </div>
                <div className='h_option'>
                    <div className='h_o_one'>
                        Your
                    </div>
                    <div className='h_o_two'>
                        Prime

                    </div>
                </div>
                <div className='h_optioncart'>
                    <div>
                        <ShoppingCartOutlinedIcon className='h_o_carticon' />
                        <span className='h_o_count'>0</span>
                    </div>

                </div>

            </div>


        </div>

    );
}
export default name;