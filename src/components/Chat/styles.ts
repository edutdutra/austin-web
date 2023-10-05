import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 640px;
  height: 480px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .1);

  > :nth-child(1) {
    flex-grow: 1;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: calc(100vh - 84px);
  }
`


export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  grid-gap: 8px;

  overflow: auto;

  background-color: ${props => props.theme['gray-100']};
`