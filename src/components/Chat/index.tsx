import {useState} from "react";

import {ChatContainer, MessagesContainer} from "./styles.ts";

import {Message} from "../Message";
import {MessageSender} from "../MessageSender";

import {MessageDTO} from "../../dtos/MessageDTO.ts";

// ToDo - gerar um timestamp pra usar de key

export function Chat() {
    const [messages, setMessages] = useState<MessageDTO[]>([{
        content: 'Olá! Eu sou o Austin, um chatbot especializado em assuntos relacionados ao TEA, no que posso lhe ajudar?',
        isBot: true
    }]);

    function addMessage(newMassage: MessageDTO) {
        setMessages(prevState => [...prevState, newMassage])
    }

    return (
        <ChatContainer>
            <MessagesContainer>
                {
                    messages.map(message => <Message isBot={message.isBot} content={message.content}/>)
                }
            </MessagesContainer>

            <MessageSender onSendMessage={addMessage}/>
        </ChatContainer>
    )
}