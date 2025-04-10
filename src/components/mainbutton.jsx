import React from 'react'

export default function Mainbutton ({children}) {
    return (
        <button className={`bg-primary text-white w-52  border-0 hover:border hover:bg-blur p-2.5 rounded-4xl `}>
            {children}
        </button>
    )
}
