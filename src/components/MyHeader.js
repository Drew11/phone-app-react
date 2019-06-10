import React from 'react';

function MyHeader(props) {
   const {greetName, greetWord , handleClick} = props;
   console.log(props);

   
    return (
        <div style={{color:"red"}}>
            <h1>{greetWord}, {greetName}</h1>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}

MyHeader.defaultProps = {
    greetWord : 'Hi',
    handleClick: function () {
        console.log('111')
    }
};
export default MyHeader;