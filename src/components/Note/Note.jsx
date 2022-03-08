import React, { useState } from 'react';
import { MyNote, NoteTitle, NoteText, EditInput } from "./styles";
import { useTheme } from '../ThemeContext/ThemeContext';

export default function Note({ id, title, content, deleteNote, handleUpdateNote }) {
    const [currentNote, setCurrentNote] = useState({
        id: id,
        editTitle: title,
        editContent: content
    })
    const [editNote, setEditNote] = useState(false);

    const darkTheme = useTheme();

    const handleDelete = () => {
        deleteNote(id);
    }

    const handleEdit = () => {
        setEditNote(true);
        setCurrentNote(prevValue => ({...prevValue}));
    }

    const handleInputEdit = (e) => {
        const { name, value } = e.target;

        setCurrentNote(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const updateNote = () => {
        handleUpdateNote({
            id: currentNote.id,
            title: currentNote.editTitle,
            content: currentNote.editContent
        });
        setEditNote(false);
    }

    const { editTitle, editContent } = currentNote;

    const noteStyles = {
        backgroundColor: darkTheme ? "#202124" : "#fff",
        border: darkTheme && "solid 1px #eee",
        color: darkTheme ? "#eee" : "black",
    };

  return (
    <>
      {editNote ? (
          <MyNote>
              <EditInput
                type="text"
                name='editTitle'
                value={editTitle}
                onChange={handleInputEdit}
              />
              <EditInput
                type="text"
                name='editContent'
                value={editContent}
                onChange={handleInputEdit}
              />
              <button onClick={() => setEditNote(false)}>CANCEL</button>
              <button onClick={updateNote}>SAVE</button>
          </MyNote>
      ) 
      : 
      (
        <MyNote style={noteStyles} onDoubleClick={handleEdit}>
          <NoteTitle>{title}</NoteTitle>
          <NoteText>{content}</NoteText>
          <button onClick={handleDelete}>DELETE</button>
        </MyNote>
      )}
    </>
  )
}
