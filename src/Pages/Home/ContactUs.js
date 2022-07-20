import React from 'react';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
       <section style={{
        background: `url(${appoinment})`
    }}>
         <div className='grid justify-items-center p-10 gap-5'>
            
            {/* <!-- xs --> */}
            <input type="email" placeholder="Email Address" className="input input-bordered input-xs w-full max-w-xs" />
            {/* <!-- sm --> */}
            <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" />
            
            {/* <!-- lg --> */}
            <textarea name="" id="" cols="30" rows="10"  placeholder="Your message"  className="input input-bordered input-lg w-full max-w-xs" ></textarea>
            <PrimaryButton>Submit</PrimaryButton>
            
                    </div>
       </section>
    );
};

export default ContactUs;