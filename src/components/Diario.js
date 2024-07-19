import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import JourneysGrid from "./JourneysGrid";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Diario({journeys, toggleShowJourneyForm}) {
    const [search, setSearch] = useState('')
    const [filteredJourneys, setFilteredJourneys] = useState([])
    
    useEffect(() => {
        setFilteredJourneys(journeys.filter(journey => journey.name.toLowerCase().includes(search.toLowerCase())))
    }, [journeys, search])

    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <h1>Diario</h1>
            {
                journeys.length === 0 ? (
                    <Box>
                        <p>Ciao Marco, non hai ancora nessun viaggio...</p>
                        <Button 
                            variant='contained'
                            onClick={() => toggleShowJourneyForm()}
                            size="large"
                            fullWidth
                        >Crea viaggio</Button>
                    </Box>
                ) : (
                    <>
                        <OutlinedInput 
                            type="text"
                            value={search}
                            onChange={(ev) => setSearch(ev.target.value)}
                            placeholder="Viaggio a Berlino"
                            fullWidth
                            sx={{mb:2}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchOutlinedIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        >
                        </OutlinedInput>
                        <JourneysGrid journeys={filteredJourneys}></JourneysGrid>
                    </>
                )
            }
        </Box>
    );
}