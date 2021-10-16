import React from 'react'
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
import { PictureOutlined, SendOutlined } from '@ant-design/icons';
export default function MessageForm(props) {
    const [value, setValue] = useState('');
    const {chatId, creds} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        
        
        sendMessage(creds, chatId, { text })
        setValue(' ')
    }
    const handleChange = (event) =>{
        setValue(event.target.value);
        isTyping(props, chatId);
        console.log(value)
    }
    const handleUpload = (event) => {
        sendMessage(props, chatId, { files: event.target.files, text: " "})
    }
    return (
        <form className='message-form' onSubmit={handleSubmit}>
           <input 

               className="message-input"
               placeholder="TEXT HERE..."
               value={value}
               onChange={handleChange}
               onSubmit={handleSubmit}
           />
            <label htmlFor="upload-button">
                <span className="image-button">

                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload=button"
                style={{ display: 'none'}}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">

                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}
