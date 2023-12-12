import React from 'react'

const SingleBirthday = ({id,image,name,age,rem}) => {
return (
    <>
        <div className='d-flex align-items-center mb-3'>
            <div className="col-10 row">
                <div className="left">
                <img style={{
                    width:'50px',
                    clipPath: 'circle()',
                    objectFit: 'cover',
                    marginRight:'10px',
                }} src={image} alt="" />
                </div>
                <div className="right">
                    <h5>{name}</h5>
                    <h6>{age}</h6>
                </div>
            </div>
            <div className="col-2">
                <button onClick={()=>rem(id)} className='btn btn-danger rounded-pill'>Remove</button>
            </div>
            </div>
    </>
)
}

export default SingleBirthday