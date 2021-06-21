import React from 'react';

const Scroll = (props) => {
    return (
        <div className='center pa2 overflow-y-scroll ba bw2 vh-75 w-75'>
            { props.children }
        </div>
    );
}

export default Scroll;