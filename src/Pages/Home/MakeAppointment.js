import React from 'react';
import appoinment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-xl text-primary'>Appointment</h2>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cum qui voluptatibus unde debitis a dolor quaerat. Perferendis unde eligendi voluptates laboriosam accusamus, praesentium aspernatur aperiam cum corporis. Laborum, quae?</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppointment;