import styled, {css} from "styled-components";

type MessageProps = {
    isBot?: boolean
}

export const MessageContainer = styled.div<MessageProps>`
  display: flex;

  ${props => !props.isBot && css`
    justify-content: flex-end;
  `}
`

export const MessageContent = styled.div<MessageProps>`
  display: flex;
  grid-gap: 8px;

  ${props => !props.isBot && css`
    flex-direction: row-reverse;
  `}
`

export const MessageText = styled.span<MessageProps>`
  padding: 8px;
  font-size: 18px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .10);

  ${props => !props.isBot && css`
    background-color: ${props.theme['blue-500']};
  `}

  ${props => props.isBot && css`
    background-color: ${props.theme['green-500']};
  `}
`

// Antes do refactor
// div {
//     display: flex;
//     grid-gap: 8px;
//
//     ${props => !props.isBot && css`
//       flex-direction: row-reverse;
//     `}
//     span {
//         padding: 8px;
//         font-size: 18px;
//         border-radius: 7px;
//         box-shadow: 0 3px 6px rgba(0, 0, 0, .10);
//
//         ${props => !props.isBot && css`
//           background-color: ${props.theme['blue-500']};
//         `}
//
//       ${props => props.isBot && css`
//         background-color: ${props.theme['green-500']};
//       `}
//     }
//   }