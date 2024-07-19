import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExperiencesGrid from "./ExperiencesGrid";

export default function Taccuino({notes, toggleShowNoteForm, ideaIds, setExperienceDetailId}) {

    const [ideas, setIdeas] = useState([])

    useEffect(() => {
        fetch('./experiences.json')
            .then(response => response.json())
            .then(data => setIdeas(data.filter(idea => ideaIds.includes(idea.id))))
    }, [ideaIds])


    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <h1>Taccuino</h1>
            {
                notes.length === 0 && ideas.length === 0 ? (
                    <Box>
                        <p>Ops, non c'è ancora nessuna nota...</p>
                        <Button 
                            variant='contained'
                            onClick={() => toggleShowNoteForm()}
                            size="large"
                            fullWidth
                        >Crea nota</Button>
                    </Box>
                ) : ( <></> )
            }
            {
                ideas.length ? (
                    <div>
                        <h2>Idee</h2>
                        {
                            <ExperiencesGrid experiences={ideas} setExperienceDetailId={setExperienceDetailId}></ExperiencesGrid>
                        }
                    </div>    
                ) : ( <></> )
            }
            {
                notes.length ? (
                    <div>
                        <h2>Note</h2>
                        {
                            notes.map((note, index) => (
                                <Paper sx={{px: 2, py: 1, mb:2 }} key={`note-${index}`}>
                                    <p>{note.description}</p>
                                    <Typography sx={{fontSize: 12, color: 'text.secondary'}}>
                                        <i>Nota del {note.date.format('DD-MM-YY')}</i>
                                    </Typography>
                                </Paper>
                            ))
                        }
                    </div>    
                ) : ( <></> )
            }
        </Box>
    );
}