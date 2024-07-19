import '../style.css';

import { Button, Typography } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

import React from "react";

export default function Menu({environment, setEnv}) {
    const envs = [
        {label: 'Diario', icon: ''},
        {label: 'Taccuino', icon: ''},
        {label: 'Crea', icon: ''},
        {label: 'Esplora', icon: ''},
        {label: 'User', icon: ''}
    ];

    return (
        <div className='my-menu' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {
                envs.map(env => (
                    <Button 
                        key={env.label} size="small" variant={environment === env.label ? 'contained' : 'text'}
                        className="my-button" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        onClick={() => setEnv(env.label)}
                    >
                        {
                            env.label === 'Diario' && <MenuBookOutlinedIcon fontSize="small" />
                        }
                        {
                            env.label === 'Taccuino' && <StickyNote2OutlinedIcon fontSize="small" />
                        }
                        {
                            env.label === 'Crea' && <AddOutlinedIcon fontSize="small" />
                        }
                        {
                            env.label === 'Esplora' && <SearchOutlinedIcon fontSize="small" />
                        }
                        {
                            env.label === 'User' && <AccountCircleOutlinedIcon fontSize="small" />
                        }
                        <Typography fontSize="0.6rem" variant="caption">{env.label}</Typography>
                    </Button>
                ))
            }
        </div>
    );
}