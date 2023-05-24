import {useState} from 'react'

export const Message = () => {
    const [message, setMessage] =  useState('Welcome User')
    return(
        <div className="sms">
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank you for liking 🚀')}>Like</button>
        </div>
    )
}