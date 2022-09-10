import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "../components/Button/Button";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 2rem;
    font-weight: var(--fw-bold);
`

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <section>
            <Button onClick={() => navigate("/", {replace: true})}>
                Go Home
            </Button>
            <Wrapper>
                Page not found, please go to the Home page!
            </Wrapper>
        </section>
    );
};
