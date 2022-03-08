import React from 'react';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import { MyHeader, Title } from "./styles";
import { useTheme, useUpdateTheme } from '../ThemeContext/ThemeContext';

export default function Header() {
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    const theme = {
        backgroundColor: darkTheme ? "#202124" : "#f5ba13",
        border: darkTheme && "solid 1px #eee"
    }

  return (
    <div>
        <MyHeader style={theme}>
            <Title>Keep</Title>
            <div onClick={toggleTheme}>
                {darkTheme ? (
                    <Brightness4Icon fontSize='large' sx={{color:"white"}}/>
                ) : (
                    <ModeNightIcon fontSize='large' sx={{color:"white"}}/>
                )}
            </div>
        </MyHeader>
    </div>
  )
}
