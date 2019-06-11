import React from 'react';

class ShoppingCart extends React.Component{

    render(){
        const {selectedPhones, removePhone} = this.props;
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
       return arrPhones.map((phone, index)=>{
            return <li
                 key={'add-phone'+index}
            >
                <button onClick={()=>removePhone(phone[0])}>x</button>
                {phone[0]}: {phone[1]}
                </li>
        });
    }

}


export default ShoppingCart;