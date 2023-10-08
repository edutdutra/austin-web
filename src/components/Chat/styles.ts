import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 150vh;
  height: 90vh;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
  background-color: ${props => props.theme['gray-600']};
  
  > :nth-child(1) {
    flex-grow: 1;
  }

  ::-webkit-scrollbar {
    width: 0.60rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme['blue-700']};
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

  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  background-color: ${props => props.theme['gray-100']};
`