import { Box, Button } from "@mui/material";
import React from "react";

export default function Crea({toggleShowJourneyForm, toggleShowNoteForm}) {
    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <h1>Crea</h1>
            <Box>
                <Button
                    sx={{mb: 2}}
                    variant='contained'
                    onClick={() => toggleShowJourneyForm()}
                    size="large"
                    fullWidth
                >Crea nuovo viaggio</Button>

                <Button
                    sx={{mb: 2}}
                    variant='text'
                    onClick={() => toggleShowNoteForm()}
                    size="large"
                    fullWidth
                >Crea nota</Button>

                <Button
                    sx={{mb: 2}}
                    variant='text'
                    size="large"
                    fullWidth
                    disabled
                >Crea idea</Button>

                <Button
                    variant='text'
                    size="large"
                    fullWidth
                    disabled
                >Crea lista</Button>

            </Box>
        </Box>
    );
}