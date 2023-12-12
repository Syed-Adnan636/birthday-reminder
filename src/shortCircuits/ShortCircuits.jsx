import React, { useState } from 'react'

const ShortCircuits = () => {
    const [test,SetTest] = useState(5)
    // const first = test && 'Hello from the AND operator';
    // const second = test || 'Hello from the OR operator';
    return (
    <>
        {/* <div className="container text-center">
        <h1>{first}</h1>
        <h1>{second}</h1>
        </div> */}
                {
                    test >= 5 ? <h1 className='text-success'>Test is greater than 5</h1> : test < 5 ? <h1 className='text-danger'>Test is less than 5</h1> : <h1 className='text-warning'>Test is equal to 0</h1>
                }
    </>
)
}

export default ShortCircuits