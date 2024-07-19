import { Box, Button, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";

export default function NoteForm({dispatch, toggleShowNoteForm}) {

    const [validForm, setValidForm] = useState(false)
    const [date, setDate] = useState(null)
    const [description, setDescription] = useState('')

    const resetForm = () => {
        setDate(null)
        setDescription('')
    }

    const closeForm = () => {
        resetForm()
        toggleShowNoteForm()
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()

        dispatch({
            type: 'ADD_NOTE',
            payload: {
                date,
                description
            }
        })

        closeForm()
    }

    useEffect(() => {
        if (description !== '' && date !== null) {
            setValidForm(true)
        }
        if (description === '' || date == null) {
            setValidForm(false)
        }
    }, [description, date])

    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <h2>Crea Nota</h2>

            <Box sx={{my:1}}>
                <MobileDatePicker
                    sx={{width: '100%'}}
                    required
                    value={date}
                    id="date"
                    onChange={(newValue) => setDate(newValue)}
                    label="Data"
                    fullWidth
                ></MobileDatePicker>
            </Box>

            <Box sx={{my:1}}>
                <TextField
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                    required
                    id="name"
                    label="Nota"
                    placeholder="Ricordati di chiudere la porta..."
                    fullWidth
                ></TextField>
            </Box>

            <Box sx={{my:1, display: 'flex', flexDirection: 'column'}}>
                <Button
                    onClick={(ev) => handleSubmit(ev)}
                    sx={{mb: 1}}
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={!validForm}
                >Crea</Button>

                <Button
                    variant="text"
                    onClick={() => closeForm()}
                    size="small"
                    fullWidth
                >Annulla</Button>
            </Box>
        </Box>
    );
}