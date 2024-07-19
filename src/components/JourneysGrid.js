import React from "react";
import JourneyCard from "./JourneyCard";
import { Box } from "@mui/material";

export default function JourneysGrid({journeys}) {

    return (
        <div>
            {
                journeys.map((journey, index) => (
                    <Box key={`journey-index-${index}`} sx={{mb: 2}}>
                        <JourneyCard 
                            journey={journey}
                        ></JourneyCard>
                    </Box>
                ))
            }
        </div>
    );
}