import React, { useEffect, useState } from 'react'
import '../App.css'
function Qr() {
    const [temp, setTemp] = useState('');
    const [word, setWord] = useState('');
    const [size, setSize] = useState('300');
    const [bgColor, setBgColor] = useState('fffff');
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]); // Only run the effect when these dependencies change

    function handleClick() {
        setWord(temp);
    }

    function handleBackgroundColor(color) {
        setBgColor(color);
    }

    return (
        <>
            <section id="qr">
                <div className="container">
                    <div className="row">
                        <h2 className='display-2' style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '5%' }}>Generate Your Qr Code</h2>
                        <div className="col-md-6 text-center">
                            <div className="input-box">
                                <div className="gen">
                                    <p style={{ color: '#1b294b', fontWeight: 'bold' }}>Generate a QR Code from a Text or Link....</p>
                                    <input type="text" className='input' onChange={(e) => { setTemp(e.target.value) }} placeholder='Enter URL or Text' />
                                    <button className='button' onClick={handleClick}>Generate <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            <h6 className='display-6' style={{ fontWeight: 'bold' }}> Customize</h6>
                            <div className="customize">
                                <div className="color-select">
                                    <button className='color-1' id='color-btn' onClick={() => handleBackgroundColor('08a7f8')}></button>
                                    <button className='color-2' id='color-btn' onClick={() => handleBackgroundColor('2fc736')}></button>
                                    <button className='color-3' id='color-btn' onClick={() => handleBackgroundColor('ffa807')}></button>
                                    <button className='color-4' id='color-btn' onClick={() => handleBackgroundColor('ff1135')}></button>
                                </div>
                                <div className="size-select">
                                <h5>Size</h5>
                                <input type="range" value={size} onChange={(e) => { setSize(e.target.value) }} min="200" max="600" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="extra">

                                <div className="output-box">
                                    <img src={qrCode} className='qr-img' alt="" />
                                </div>
                            </div>
                        </div>
                        <a href={qrCode} download="QRCode" className='text-center'><button className='download-btn'>Download Qr <i class="fa-solid fa-download"></i></button></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Qr