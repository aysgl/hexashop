import React from 'react'


//Props örneği.
export const AAText = ({ style, ...props }) => {
    return (
        <p className={`${style}`}>{props.children}</p>
    )
}