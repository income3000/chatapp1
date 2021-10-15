import React from 'react'

export default function TheirMessage({lastMessage, messagg}) {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== MessageChannel.sender.username

    return (
        <div>
            
        </div>
    )
}
