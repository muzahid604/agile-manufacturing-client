import React from 'react';
import Footer from '../Common/Footer';

const Contact = () => {
    return (
        <div>
            <div className='flex flex-col lg:items-center'>
                <div>
                    <h1 className='text-3xl my-10'>BUSINESS
                        INQUIRES</h1>

                </div>
                <div className='flex flex-col mx-auto w-96 card shadow-lg px-10'>
                    <form className=''>
                        <input type="text" placeholder="Your Name" className="my-3 input input-bordered input-accent w-full max-w-xs" />
                        <textarea className="my-3 w-full max-w-xs textarea textarea-accent " placeholder="Please enter your inquiry here"></textarea>
                    </form>
                    <p className='my-2 w-full'>Terms: For the purpose of providing services to our customers, and assess statistical information for the implementation of personalized website features, emails of notifications, we may use your personal information. On some occasions we may share your information with Dartekr authorized sales channel and business contractors.
                        By clicking submit you are agreeing to Dartek's site terms & conditions and privacy policy.</p>
                    <small className=' my-3'>For general inquiries please email us at <span className='text-red-500'>niki@alige.com</span></small>
                    <input className='btn btn-xs my-10' type='submit' value='Click to Submit' />
                </div>
            </div>

            <h1 className='text-2xl m-5 mt-10'>Our Location</h1>
            <div className='mx-5 my-10 lg:mx-10 grid grid-cols-3 gap-5'>
                <div>
                    <h1 className='bg-primary btn btn-xs'>Plant-1</h1>
                    <p>No.99 Hehai East Road,
                        Haimen City,
                        Nantong City, Jiangsu, China
                        8am - 5pm, Mon - Sat (UTC/GMT +8)</p>
                </div>
                <div>
                    <h1 className='bg-primary btn btn-xs'>Plant-2</h1>
                    <p>No.699 Xiangjiang Road,
                        Haimen City,
                        Nantong City, Jiangsu, China
                        8am - 5pm, Mon - Sat (UTC/GMT +8)</p>
                </div>
                <div>
                    <h1 className='bg-primary btn btn-xs'>Plant-3</h1>
                    <p>DARTEK TECHNOLOGY UK LIMITED Chase Business Centre, 39-41 Chase Side,London, England, N14 5BP</p>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Contact;