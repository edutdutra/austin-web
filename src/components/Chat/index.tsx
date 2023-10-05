import {ChatContainer, MessagesContainer} from "./styles.ts";

import {Message} from "../Message";


export function Chat() {
    return (
        <ChatContainer>
            <MessagesContainer>
                <Message isBot={true}/>
                <Message/>
                <Message/>
                <Message isBot={true}/>
            </MessagesContainer>
        </ChatContainer>
    )
}