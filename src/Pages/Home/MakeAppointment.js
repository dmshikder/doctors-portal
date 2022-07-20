import React from 'react';
import appoinment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex flex-col lg:flex-row justify-center items-center mt-20 p-10'>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-xl text-primary'>Appointment</h2>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white pt-4 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cum qui voluptatibus unde debitis a dolor quaerat. Perferendis unde eligendi voluptates laboriosam accusamus, praesentium aspernatur aperiam cum corporis. Laborum, quae?</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppointment;