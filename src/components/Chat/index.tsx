import {useState} from "react";

import {ChatContainer, MessagesContainer} from "./styles.ts";

import {Message} from "../Message";
import {MessageSender} from "../MessageSender";

import {http} from "../../service/api.ts";
import {MessageDTO} from "../../dtos/MessageDTO.ts";

// ToDo - adicionar loading + possivel toast

export function Chat() {
    const [messages, setMessages] = useState<MessageDTO[]>([{
        id: '0',
        content: 'Olá! Eu sou o Austin, um chatbot especializado em assuntos relacionados ao TEA, no que posso lhe ajudar?',
        isBot: true
    }]);

    const sessionID = new Date().getTime()

    async function sendMessage(newMassage: MessageDTO) {
        setMessages(prevState => [...prevState, newMassage]);

        try {
            const {data} = await http.post(`/chat/${sessionID}`, {message: newMassage.content})

            if (data.message === 'text') {
                const {text} = data.text;

                setMessages(prevState => [...prevState, {content: text, isBot: true, id: data.id}]);
            }

            if (data.message === 'payload') {
                console.log('PAYLOAD WITH IMAGE')
            }

        } catch (error) {
            console.log('ERROR ON SEND MESSAGE => ', error)
        }
    }

    return (
        <ChatContainer>
            <MessagesContainer>
                {
                    messages.map(message => <Message key={message.id} isBot={message.isBot} content={message.content}/>)
                }
            </MessagesContainer>

            <MessageSender onSendMessage={sendMessage}/>
        </ChatContainer>
    )
}