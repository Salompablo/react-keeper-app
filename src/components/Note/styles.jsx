import styled from "styled-components";

export const MyNote = styled.div`
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 300px;
    margin: 16px;
    float: left;
`;

export const NoteTitle = styled.h2`
    font-size: 1.1em;
    margin-bottom: 6px;
`;

export const NoteText = styled.p`
    font-size: 1.1em;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
`;

export const EditInput = styled.input`
    boder: solid 1px;
    border-color: #f5ba13;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
`;