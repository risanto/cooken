import React from 'react'

const Alert = ({ messages, dismissAlert, setDismissAlert, classNames }) => {
    // text-red-700 bg-red-100 border-red-300
    if (dismissAlert) return null
    else return (
        <div className={"flex justify-center items-center font-medium p-2 bg-white rounded border " + classNames }>
            <div slot="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mx-2 feather feather-alert-octagon">
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </div>
            <div className="flex-initial max-w-full font-normal">
                {messages.length === 1 && messages[0]}
                
                {messages.length > 1 && (<ul>
                    {   messages.map(message => {
                        <li>{message}</li>
                    })
                    }
                </ul>)}
            </div>
            <div onClick={() => setDismissAlert(true)} id="x-btn" className="flex flex-row-reverse flex-auto">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 rounded-full cursor-pointer feather feather-x hover:text-red-400">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Alert
