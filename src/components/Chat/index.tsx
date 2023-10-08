import {ChatContainer, MessagesContainer} from "./styles.ts";

import {Message} from "../Message";
import {MessageSender} from "../MessageSender";


export function Chat() {
    return (
        <ChatContainer>
            <MessagesContainer>
                <Message isBot={true}/>
                <Message/>
                <Message/>
                <Message isBot={true}/>
                <Message isBot={true}/>
                <Message/>
                <Message/>
                <Message isBot={true}/>
                <Message isBot={true}/>
                <Message/>
                <Message/>
                <Message isBot={true}/>
                <Message isBot={true}/>
                <Message/>
                <Message/>
                <Message isBot={true}/>
            </MessagesContainer>

            <MessageSender />
        </ChatContainer>
    )
}