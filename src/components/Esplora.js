import { Box, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import React, { useEffect, useState } from "react";
import JourneysGrid from "./JourneysGrid";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExperiencesGrid from "./ExperiencesGrid";

export default function Esplora({setExperienceDetailId}) {
    const [search, setSearch] = useState('')
    const [journeys, setJourneys] = useState([])
    const [experiences, setExperiences] = useState([])
    const [filteredJourneys, setFilteredJourneys] = useState([])
    const [filteredExperiences, setFilteredExperiences] = useState([])

    useEffect(() => {
        fetch('./journeys.json')
            .then(response => response.json())
            .then(data => setJourneys(data))

        fetch('./experiences.json')
            .then(response => response.json())
            .then(data => setExperiences(data))
    }, [])
    
    useEffect(() => {
        setFilteredJourneys(journeys.filter(journey => journey.name.toLowerCase().includes(search.toLowerCase())))
        setFilteredExperiences(experiences.filter(experience => experience.description.toLowerCase().includes(search.toLowerCase())))
    }, [journeys, experiences, search])

    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <h1>Esplora</h1>
            <OutlinedInput 
                type="text"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                placeholder="Parigi"
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

            {
                filteredExperiences.length ? (
                    <>
                        <h2>Esplora</h2>
                        <ExperiencesGrid experiences={filteredExperiences} setExperienceDetailId={setExperienceDetailId}></ExperiencesGrid>
                    </>
                ) : (<></>)
            }

            {
                filteredJourneys.length ? (
                    <>
                        <h2>Viaggi</h2>
                        <JourneysGrid journeys={filteredJourneys}></JourneysGrid>
                    </>
                ) : (<></>)
            }

            {
                filteredExperiences.length === 0 && filteredJourneys.length === 0 && (
                    <div>Ops, non abbiamo trovato niente.</div>
                )
            }
        </Box>
    );
}