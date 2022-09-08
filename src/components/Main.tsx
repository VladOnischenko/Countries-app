import React from 'react';
import styled from 'styled-components'
import {Container} from "./Container/Container";


const Wrapper = styled.main`
padding: 2rem 0;
  
  @media(min-width: 767px) {
    padding: 4rem 0;
  }
`

interface Props {
    children?: JSX.Element | JSX.Element[]
}

export const Main = ({children}: Props) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
};