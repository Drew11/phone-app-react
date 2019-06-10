import React from 'react';

class PhoneViewer extends React.Component{
    render(){
        const {backToCatalog, addPhone, selected, phones} = this.props;
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

                <h1>{}</h1>

                <p>{}</p>

                <ul className="phone-thumbs">
                    {/*${this._phoneDetails.images.map((imageUrl) => {*/}
                    {/*return `<li>*/}
            {/*<img*/}
            {/*data-element="small-image"*/}
            {/*src="${imageUrl}"*/}
             {/*></li>`*/}
                {/*}).join('')}*/}

                </ul>
            </div>
        )
    }
}

export default PhoneViewer;