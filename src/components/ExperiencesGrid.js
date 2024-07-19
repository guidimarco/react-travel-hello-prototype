import React from "react";
import { Box } from "@mui/material";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesGrid({experiences, setExperienceDetailId}) {

    return (
        <Box
            sx={{
                display: 'flex',
                overflowX: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none'  // Nasconde la barra di scorrimento su Webkit
                },
                msOverflowStyle: 'none',  // Nasconde la barra di scorrimento su IE e Edge
                scrollbarWidth: 'none'  // Nasconde la barra di scorrimento su Firefox
            }}
        >
            {
                experiences.map((experience, index) => (
                    <Box key={`experience-index-${index}`} sx={{mr: 1}} width={140} minWidth={140}>
                        <ExperienceCard 
                            experience={experience} setExperienceDetailId={setExperienceDetailId} 
                        ></ExperienceCard>
                    </Box>
                ))
            }
        </Box>
    );
}