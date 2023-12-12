import React, { useState } from 'react'

const Count = () => {
    const [num,setNum] = useState(0)

    const handleClick = (e) => {
        if (e.target.innerHTML === 'Increase') {
            setNum(num+1)
        }
        else if (e.target.innerHTML === 'Reset') {
            setNum(0)
        }
        else{
            setNum(num-1)
        }
    }
return (
    <>
    <div className="container text-center shadow mt-3 shadow p-3">
        <h1 className="display-1">
            Counter
        </h1>
        <h2 className={`display-1 ${num > 0 ? 'text-success' : num < 0 ? 'text-danger' : 'text-warning'}`}>
            {num}
        </h2>
        <button onClick={handleClick} className='btn btn-danger mx-2'>Decrease</button>
        <button onClick={handleClick} className='btn btn-warning mx-2'>Reset</button>
        <button onClick={handleClick} className='btn btn-success mx-2'>Increase</button>
    </div>
    </>
)
}

export default Count