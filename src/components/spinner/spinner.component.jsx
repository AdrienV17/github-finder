import React from 'react';
import './spinner.styles.scss';


const Spinner = () => {
    return (  
        <div className="spinner">
            <div className='loader'>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    );
}
 
export default Spinner;