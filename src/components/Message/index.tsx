import {MessageContainer, MessageContent, MessageText} from "./styles.ts";

type Props = {
    isBot?: boolean
}

export function Message({isBot = false}: Props) {

    return (
        <MessageContainer isBot={isBot}>
            <MessageContent isBot={isBot}>
                <MessageText isBot={isBot}>
                    Teste Mensagem
                </MessageText>
            </MessageContent>
        </MessageContainer>
    )
}