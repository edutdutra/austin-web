import React, {useState} from "react";
import {MessageSenderButton, MessageSenderContainer, MessageSenderInput} from "./styles.ts";

import {MessageDTO} from "../../dtos/MessageDTO.ts";

type Props = {
    onSendMessage: (message: MessageDTO) => void
}

export function MessageSender({onSendMessage}: Props) {
    const [newMessage, setNewMessage] = useState('');

    function handleSendMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (newMessage.trim().length > 0) {
            onSendMessage({content: newMessage, isBot: false, id: new Date().getTime().toString()});

            setNewMessage('');
        }
    }

    function handleNewMessage(message: string) {
        setNewMessage(message)
    }

    return (
        <MessageSenderContainer action="" onSubmit={handleSendMessage} onDragEnter={handleSendMessage}>
            <MessageSenderInput
                placeholder="Pergunte algo para o Austin..."
                onChange={(event) => handleNewMessage(event.target.value)}
                value={newMessage}
            />

            <MessageSenderButton
                type="submit"
            >
                Enviar
            </MessageSenderButton>
        </MessageSenderContainer>
    )
}