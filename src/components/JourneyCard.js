import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function JourneyCard({journey}) {
    const {id, name, description} = journey

    return (
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://picsum.photos/600?random=${id}`}
                ></CardMedia>
                <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Typography sx={{color: 'white', fontWeight: 'bold'}} gutterBottom variant="h5" component="div" align="center">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}