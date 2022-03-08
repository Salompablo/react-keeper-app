import React, { useState } from 'react';
import * as S from "./styles";
import { useTheme } from "../ThemeContext/ThemeContext";

import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export default function CreateArea({ addNote }) {
    const [noteText, setNoteText] = useState({
        title: "",
        content: ""
    });
    const [error, setError] = useState(null);
    const [expandedNote, setExpandedNote] = useState(false);

    const darkTheme = useTheme();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNoteText(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("agregando nota");

        if (!title || !content) {
            console.log("Debes rellenar todos los campos");
            setError("Debes rellenar todos los campos");
            return;
        } else {
            setError(null);
        }

        addNote(noteText);
        setNoteText({
            title: "",
            content: ""
        });
    }

    const { title, content } = noteText;

    const inputStyles = {
        backgroundColor: darkTheme ? "#202124" : "#eee",
        color: darkTheme ? "#eee" : "black",
    };

  return (
    <div>
        <S.Formulario>
            {expandedNote && (
                <S.NoteTitle
                type="text"
                name='title'
                value={title}
                onChange={handleChange}
                placeholder="Title"
                style={inputStyles} 
                />
            )}
            <S.NoteContent
            type="text"
            name='content'
            value={content}
            placeholder="Take a note..."
            style={inputStyles} 
            onChange={handleChange}
            onClick={() => { setExpandedNote(true) }}
            />
            <p>{error}</p>
            <Zoom in={expandedNote}>
                <Fab onClick={handleClick}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </S.Formulario>
    </div>
  )
}
