import React, { useState } from 'react'

const ChangeTitle = () => {

    const [title,setTitle] = useState('Ali')

    const handleClick = () =>{
        if (title === 'Ali') {
            setTitle('Usman')
        }
        else{
            setTitle('Ali')
        }
    }

return (
    <>
        <div className="container text-center">
            <h1 className='display-1'>
                {title}
            </h1>
            <button onClick={handleClick} className='btn btn-success'>
                Change Title
            </button>
        </div>
    </>
    )
}


export default ChangeTitle