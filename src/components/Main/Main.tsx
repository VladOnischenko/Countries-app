import React from 'react';
import {Container} from "../Container/Container";
import {Wrapper} from "./styles";

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