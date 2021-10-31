import React from 'react'
import QrReader from 'react-qr-reader';

const Reader = () => {
    const handleScan = (result) => {
        if(result){
            window.location.replace(result);
        }
    }
    return (
        <div>
            <QrReader
                delay={300}
                onError={(error) => console.log(error)}
                onScan={handleScan}/>
        </div>
    )
}

export default Reader
