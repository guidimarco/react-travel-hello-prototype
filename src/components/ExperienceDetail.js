import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ExperienceDetail({id, setExperienceDetailId, likedExperiences, toggleLikedExperiences, ideas, toggleIdeas}) {

    const [experience, setExpirience] = useState(null)

    const [liked, setLiked] = useState(false)
    const handleToggleLikedExperiences = () => {
        setLiked(!liked)
        toggleLikedExperiences(experience.id)
    }

    const [idea, setIdea] = useState(false)
    const handleToggleLikedIdeas = () => {
        setIdea(!idea)
        toggleIdeas(experience.id)
    }

    useEffect(() => {
        if (likedExperiences.includes(id)) {
            setLiked(true)
        }

        if (ideas.includes(id)) {
            setIdea(true)
        }

        fetch('./experiences.json')
            .then(response => response.json())
            .then(data => {
                setExpirience(data.find(exp => exp.id === id))
            })
    }, [likedExperiences, ideas, id])

    return (
        <>
            {
                experience && 
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
                    <Card sx={{ width: '100%', height: '100%' }}>
                        <Box sx={{ position: 'absolute', top: 0, left: 0, margin: '12px', display: 'flex', alignItems: 'center' }}>
                            <IconButton sx={{ color: '#FFFFFF' }} onClick={() => setExperienceDetailId(0)}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="body1" sx={{ display: 'inline-flex', color: '#FFFFFF' }}>
                                Indietro
                            </Typography>
                        </Box>
                        <CardMedia
                            component="img"
                            image={`https://picsum.photos/600?random=${experience.id+100}`}
                            alt="Reel image"
                            sx={{ height: '80%', objectFit: 'cover' }}
                        />
                        <CardContent sx={{ height: '20%', overflowY: 'auto', padding: '4px 8px' }}>
                            <Box>
                                {
                                    !liked ? (
                                        <IconButton sx={{ padding: '4px' }} onClick={() => handleToggleLikedExperiences()}>
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                    ) : (
                                        <IconButton color="error" sx={{ padding: '4px' }} onClick={() => handleToggleLikedExperiences()}>
                                            <FavoriteIcon />
                                        </IconButton>
                                    )
                                }
                                <IconButton sx={{ padding: '4px', mx: 1 }} disabled>
                                    <ChatBubbleOutlineIcon />
                                </IconButton>
                                {
                                    !idea ? (
                                        <IconButton sx={{ padding: '4px' }} onClick={() => handleToggleLikedIdeas()}>
                                            <LightbulbOutlinedIcon />
                                        </IconButton>
                                    ) : (
                                        <IconButton sx={{color: "#ffea00", padding: '4px'}} onClick={() => handleToggleLikedIdeas()}>
                                            <LightbulbIcon />
                                        </IconButton>
                                    )
                                }
                            </Box>
                            <Typography variant="caption" color="#808080" style={{ fontStyle: 'italic' }}>
                                {experience.date}
                            </Typography>
                            <Typography variant="body1" sx={{mb: 1}}>
                                {experience.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            }
        </>
    );
}