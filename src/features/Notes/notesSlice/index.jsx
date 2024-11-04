import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const noteAdapter = createEntityAdapter({
    selectId : (note) => note.id,
})

export const notesSlice = createSlice({
    name: 'notes',
    initialState: noteAdapter.getInitialState(),
    reducers : {
        addNote: noteAdapter.addOne,
        removeNote: noteAdapter.removeOne,
        updateNote: noteAdapter.updateOne,
    }
})

export const notesSelectors = noteAdapter.getSelectors((state) => state.notes);