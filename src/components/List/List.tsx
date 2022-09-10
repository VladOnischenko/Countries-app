import React from 'react';
import {Wrapper} from "./styles";

export const List = ({children}: any): JSX.Element => {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};
