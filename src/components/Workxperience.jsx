
import React from 'react';
import Aos from 'aos';
const Workexperience = ({data}) => {
    return (
        <div className='mb-4'>
            {data.map((job, index) => (
                <div key={index} className='jobContainer' data-aos="fade-up">
                    <h5>{job.position} at <span className='text-gradient'>{job.company}</span></h5>
                    <p>{job.duration}</p>
                    <ul>
                        {job.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default Workexperience;
