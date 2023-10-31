import React from 'react'

function Learn() {
    return (
        <>
            <section id="learn">
                <div className="container">
                    <div className="row">
                        <h2
                            className="display-2 text-center"
                            style={{ color: "#1b294b", fontWeight: "bold" }}
                        >
                            How do I create a free QR Code?
                        </h2>
                        <div className="col-md-4">
                            <div className="learn-card">
                                <b className="steps">1</b>
                                <div className="card-body">
                                    <h6
                                        className="display-6"
                                        style={{ color: "#1b294b", fontWeight: 500 }}
                                    >
                                        Fill in the details
                                    </h6>
                                    <p>
                                        Enter all the information needed in the fields that appear. This
                                        could be a link, contact information, text or any other type of
                                        info. Once you’re done, select “Generate.”
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="learn-card">
                                <b className="steps">2</b>
                                <div className="card-body">
                                    <h6
                                        className="display-6"
                                        style={{ color: "#1b294b", fontWeight: 500 }}
                                    >
                                        Customize the QR Code
                                    </h6>
                                    <p>
                                    Get creative with your QR code's look. Opt for a traditional black and white style, or add some personality with colors and frames. When you're done, download your unique QR code
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="learn-card">
                                <b className="steps">3</b>
                                <div className="card-body">
                                    <h6
                                        className="display-6"
                                        style={{ color: "#1b294b", fontWeight: 500 }}
                                    >
                                        Download the QR Code
                                    </h6>
                                    <p>
                                    You may choose to have a standard black and white design or choose colors and frames to help you attract more scans. If not, proceed to download your finished Code.
                                    </p>
                                </div>
                            </div>
                        </div>
                       <a href='#qr'><button className='try-now text-center'>Try Now</button></a> 
                    </div>
                </div>
            </section>

        </>
    )
}

export default Learn