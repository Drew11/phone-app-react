import React from 'react';

class ShoppingCart extends React.Component{

    render(){
        const {phones , selectedPhones, removePhone} = this.props;
        const arrPhones = Object.entries(selectedPhones);
        return(
            <>
            <p>Shopping Cart:</p>
            <ul
            data-element="add-phones"
            >
                { this._renderList(arrPhones, removePhone )}

            </ul>
            </>
    )
    }

    _renderList(arrPhones, removePhone){
       return arrPhones.map((phone)=>{
            return <li>
                <button onClick={()=>removePhone(phone[0])}>x</button>
                {phone[0]}: {phone[1]}
                </li>
        });
    }

}


export default ShoppingCart;