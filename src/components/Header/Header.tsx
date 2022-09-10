import React, {useState, useEffect} from 'react';
import {Container} from "../Container/Container";
import {HeaderEl,Wrapper,Title,ModeSwitcher} from './styles'
import { IoMoon,IoMoonOutline } from "react-icons/io5";


export const Header: React.FC = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = (): void => setTheme(theme => theme === "light" ? "dark" : "light")

    useEffect(() =>{
        document.body.setAttribute("data-theme", theme)
    },[theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is thr world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        { theme === "light" ? (<IoMoon/>) : (<IoMoonOutline/>)}
                        <span>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};