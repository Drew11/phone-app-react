import React from 'react';

function  PhoneViewer ({backToCatalog, addPhone, selected, phones , phoneImages}){

    function setNewImage(imgUrl){
       document.querySelector('.phone').src = imgUrl;
    }

    const phonePage = phones.filter((phone)=>phone['id']===selected);
        return(
            <div>
                <img
                    data-element="large-image"
                    className="phone"
                    src={phonePage[0]['imageUrl']}
                    alt={"img"}
                />
                    <button
                        data-back-button="backToCatalog"
                        onClick={backToCatalog}
                    >
                        Back
                    </button>
                    <button
                        data-element={"add-to-cart-view"}
                        onClick={()=>addPhone(selected)}
                    >Add to basket
                    </button>
                <h1>{phonePage[0]['name']}</h1>

                <p>{phonePage[0]['snippet']}</p>

                <ul className="phone-thumbs">
                    { phoneImages.map((imageUrl, index) => {
                    return <li
                        key={index}
                        onClick={()=>setNewImage(imageUrl)}
                    >
                            <img
                            alt={"img"}
                            src={imageUrl}
                            />
                           </li>
                        })
                    }
                </ul>
            </div>
        )
    }

export default PhoneViewer;