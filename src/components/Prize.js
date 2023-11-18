import React from 'react'

const Prize = () => {
    return (
        <>
            <section className="section" id='prizes'>
                <div className="prize-section">
                    <h1 className='common-title'>Prizes & Perks</h1>
                    <div className="prize-boxes">
                        <div className="prz-box">
                            <img src="../pr-1.svg" alt="" />
                            <p>Prizes worth 5 Lakh+ INR to top performers</p>
                        </div>
                        <div className="prz-box">
                            <img src="../pr-2.svg" alt="" />
                            <p>Swags, Merchandise & Coupons for Participants</p>
                        </div>
                        <div className="prz-box">
                            <img src="../pr-3.svg" alt="" />
                            <p>Internship & full-time role opportunity</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Prize
