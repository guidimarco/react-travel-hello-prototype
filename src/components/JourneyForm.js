import { Box, Button, FormControlLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";

export default function JourneyForm({dispatch, toggleShowJourneyForm}) {

    const [validForm, setValidForm] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [initDate, setInitDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [condividi, setCondividi] = useState(false)
    const [condividiCon, setCondividiCon] = useState('Tutti')
    const condividiConOptions = ['Tutti', 'Amici']

    const resetForm = () => {
        setName('')
        setDescription('')
        setInitDate(null)
        setEndDate(null)
        setCondividi(false)
        setCondividiCon('Tutti')
    }

    const closeForm = () => {
        resetForm()
        toggleShowJourneyForm()
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()

        let newId = Math.floor(Math.random() * (100 - 21 + 1)) + 21;

        dispatch({
            type: 'ADD_JOURNEY',
            payload: {
                id: newId,
                name,
                description,
                initDate,
                endDate,
                condividi,
                condividiCon
            }
        })

        closeForm()
    }

    useEffect(() => {
        if (name !== '' && description !== '' && initDate !== null & endDate !== null) {
            setValidForm(true)
        }
        if (name === '' || description === '' || initDate === null || endDate == null) {
            setValidForm(false)
        }
    }, [name, description, initDate, endDate])

    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <h2>Crea Viaggio</h2>

            <Box sx={{my:1}}>
                <TextField
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    required
                    id="name"
                    label="Nome"
                    placeholder="Safari in Africa"
                    fullWidth
                ></TextField>
            </Box>

            <Box sx={{my:1}}>
                <TextField
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                    required
                    id="name"
                    label="Descrizione"
                    placeholder="Sono partito per la Tanzania..."
                    fullWidth
                ></TextField>
            </Box>

            <Box sx={{my:1, display: 'flex', flexDirection: 'row'}}>
                <MobileDatePicker
                    required
                    sx={{mr: 1}}
                    value={initDate}
                    onChange={(newValue) => setInitDate(newValue)}
                    label="Data di inizio"
                ></MobileDatePicker>

                <MobileDatePicker
                    required
                    sx={{ml: 1}}
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                    label="Data di fine"
                ></MobileDatePicker>
            </Box>

            <Box sx={{my:1, display: 'flex', flexDirection: 'column'}}>
                <FormControlLabel
                    value={condividi}
                    onChange={() => setCondividi(!condividi)}
                    control={<Switch />}
                    label="Condividi"
                ></FormControlLabel>

                {
                    condividi && (
                        <Select
                            value={condividiCon}
                            onChange={(ev) => setCondividiCon(ev.target.value)}
                            label="Condividi con"
                        >
                            {
                                condividiConOptions.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))
                            }
                        </Select>
                    )
                }
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