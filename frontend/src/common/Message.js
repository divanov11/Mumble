import React from 'react'
import '../styles/common/_message.css'
const Message = ({variant, children}) => {
    return (
        <div className={`message message--${variant}`} variant={variant}>
            {children}
        </div>
    )
}

export default Message
