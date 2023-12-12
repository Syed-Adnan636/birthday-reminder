import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { data } from './data'


const Birthdays = () => {
    const [info,setInfo] = useState(data)
    const removePerson = (id) =>{
        const newList = info.filter((item)=>{
            return item.id !== id;
        })
        setInfo(newList)
    }
    return (
    <>
        <div className="col-6 mx-auto text-center shadow mt-1 py-3 px-5 rounded rounded-5">
            <h1 className="display-4">{info.length} Birthdays Today</h1>
            {info.map((item)=>{
            return <SingleBirthday key={item.id} {...item} rem={removePerson}/>
        })}
        {info.length == 0 ? (<button onClick={()=>setInfo(data)} className='btn btn-success w-100'>
            Refresh All
            </button>) : 
        (<button onClick={()=>setInfo([])} className='btn btn-danger w-100'>
            Remove All
            </button>)}
        </div>
    </>
)
}

export default Birthdays