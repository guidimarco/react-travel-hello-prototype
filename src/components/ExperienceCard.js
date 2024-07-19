import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

export default function ExperienceCard({experience, setExperienceDetailId}) {
    const {id} = experience

    const openExperienceDetail = () => {
        setExperienceDetailId(id)
    }

    return (
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                <CardActionArea
                    onClick={openExperienceDetail}
                >
                    <CardMedia
                        component="img"
                        width="120"
                        height="180"
                        image={`https://picsum.photos/600?random=${id+100}`}
                    ></CardMedia>
                </CardActionArea>
            }
        </Card>
    );
}