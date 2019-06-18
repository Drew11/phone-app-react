import React from 'react';

function PhoneCatalog( {phones,
                           click ,
                           addPhone,
                           getPhoneImg
} ){
        return(
            <ul className="phones">
                {phones.map((phone)=>{
                    return <li
                        className="thumbnail"
                        data-phone-id={phone.id}
                        data-element="phone-element"
                        key={"data-"+phone.id}
                    >
                        <a
                            href={"#!/phones/motorola-xoom-with-wi-fi"}
                            className="thumb"
                            data-element="details-link"
                        >
                        <img
                            alt={phone.name+"™ with Wi-Fi"}
                            src={'./'+phone.imageUrl}
                            onClick={()=>{
                                click(phone.id);
                                getPhoneImg(phone['id'])
                            }}/>
                        </a>

                        <div className="phones__btn-buy-wrapper">
                            <a  href={'#!/phones/motorola-xoom-with-wi-fi'}
                                className={"btn btn-success"}
                                data-element={"add-to-cart"}
                                onClick={()=>addPhone(phone.id)}
                            >
                                Add
                            </a>
                        </div>

                        <a
                            href={"#!/phones/motorola-xoom-with-wi-fi"}
                            data-element="details-link"
                            onClick={()=>click(phone.id)}
                        >{phone.name}
                        </a>
                        <p>{phone.snippet}</p>
                    </li>
                })}
            </ul>
            )
    }

export default PhoneCatalog;