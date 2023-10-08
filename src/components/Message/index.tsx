import {MessageContainer, MessageContent, MessageText} from "./styles.ts";

type Props = {
    isBot?: boolean,
    content: string
}

export function Message({isBot = false, content}: Props) {

    return (
        <MessageContainer isBot={isBot}>
            <MessageContent isBot={isBot}>
                <MessageText isBot={isBot}>
                    {content}
                </MessageText>
            </MessageContent>
        </MessageContainer>
    )
}