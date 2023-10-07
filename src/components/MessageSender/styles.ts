import styled from "styled-components";

export const MessageSenderContainer = styled.div`
  display: flex;
  grid-gap: 8px;
  padding: 16px;

  background-color: ${props => props.theme['gray-600']};
`

export const MessageSenderInput = styled.input`
  flex-grow: 1;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  
  color: ${props => props.theme['black']};
  background-color: ${props => props.theme['blue-300']};

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }
`

export const MessageSenderButton = styled.button`
  padding: 0 1.25rem;
  border-radius: 0.5rem;
  border: 0;

  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;

  color: ${props => props.theme['black']};
  background: ${props => props.theme['blue-500']};

  &:hover {
    background: ${props => props.theme['blue-400']};
    transition: background-color 0.2s;
  }
`