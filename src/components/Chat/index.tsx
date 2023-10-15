import {useState} from "react";

import {ChatContainer, MessagesContainer} from "./styles.ts";

import {Message} from "../Message";
import {MessageSender} from "../MessageSender";

import {http} from "../../service/api.ts";
import {MessageDTO} from "../../dtos/MessageDTO.ts";

// ToDo - gerar um timestamp pra usar de key
// ToDo - adicionar loading + possivel toast

export function Chat() {
    const [messages, setMessages] = useState<MessageDTO[]>([{
        content: 'Olá! Eu sou o Austin, um chatbot especializado em assuntos relacionados ao TEA, no que posso lhe ajudar?',
        isBot: true
    }]);

    async function sendMessage(newMassage: MessageDTO) {
        setMessages(prevState => [...prevState, newMassage]);

        try {
            const {data} = await http.post(`/chat/test123`, {message: newMassage.content})

            if (data.message === 'text') {
                const {text} = data.text;

                setMessages(prevState => [...prevState, {content: text, isBot: true}]);
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
                    messages.map(message => <Message isBot={message.isBot} content={message.content}/>)
                }
            </MessagesContainer>

            <MessageSender onSendMessage={sendMessage}/>
        </ChatContainer>
    )
}