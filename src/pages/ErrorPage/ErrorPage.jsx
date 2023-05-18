import React from 'react';
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div className='md:w-[1240px] mx-auto flex justify-center'>
            <div className=""><img src={error} alt="" /> <h1 className='text-2xl font-semibold mt-4'>Oops! The page you are looking for could not be found. Please check the URL and try again.</h1></div>
        </div>
    );
};

export default ErrorPage;