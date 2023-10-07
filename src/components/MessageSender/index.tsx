import {MessageSenderButton, MessageSenderContainer, MessageSenderInput} from "./styles.ts";

export function MessageSender() {
    return (
        <MessageSenderContainer>
            <MessageSenderInput/>
            <MessageSenderButton>Enviar</MessageSenderButton>
        </MessageSenderContainer>
    )
}