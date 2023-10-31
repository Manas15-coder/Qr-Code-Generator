import React from 'react'

function Banner() {
    return (
        <>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="banner-content">
                                <h1 className="display-1" style={{ fontWeight: 700 }}>
                                    Generate QR Code For Free
                                </h1>
                                <p>
                                    Enter all the information needed in the fields that appear. This
                                    could be a link, contact information, text or any other type of
                                    info. Once you’re done, select “Generate.”
                                </p>
                                <a href="#learn">
                                    <button className="banner-btn">Learn More</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="qr-banner-img">
                                <img
                                    src="https://assets-v2.lottiefiles.com/a/ec4394a2-1151-11ee-ab60-b3dd36237565/iRrhKmHkKY.gif"
                                    className="img-fluid"
                                    alt=""
                                />
                                <h6 className="display-6" style={{ fontWeight: 500 }}>
                                    SCAN ME
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner