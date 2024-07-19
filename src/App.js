import './style.css';

import { useEffect, useReducer, useState } from 'react';

import Menu from './components/Menu';
import Diario from './components/Diario';
import Taccuino from './components/Taccuino';
import Crea from './components/Crea';
import Esplora from './components/Esplora';
import User from './components/User';

import JourneyForm from './components/JourneyForm';
import NoteForm from './components/NoteForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import journeyReducer from './reducers/journeyReducer';
import { combineReducers } from 'redux';
import noteReducer from './reducers/noteReducer';
import ExperienceDetail from './components/ExperienceDetail';

const initialState = {
    journeys: [],
    notes: []
}

const rootReducer = combineReducers({
    journeys: journeyReducer,
    notes: noteReducer
})

function App() {
    const [env, setEnv] = useState('Diario');
    const [state, dispatch] = useReducer(rootReducer, initialState)

    const [showJourneyForm, setShowJourneyForm] = useState(false);
    const toggleShowJourneyForm = () => {
        setShowJourneyForm(!showJourneyForm)
    }
    const [showNoteForm, setShowNoteForm] = useState(false);
    const toggleShowNoteForm = () => {
        setShowNoteForm(!showNoteForm)
    }

    const [experienceDetailId, setExperienceDetailId] = useState(false);

    const [likedExpiriences, setLikedExpiriences] = useState([])
    const toggleLikedExperiences = (id) => {
        let newState = []
        const index = likedExpiriences.indexOf(id)
        if (index > -1) {
            newState = likedExpiriences.splice(index + 1, 1)
        } else {
            newState = [...likedExpiriences, id]
        }
        setLikedExpiriences(newState)
    }

    const [ideas, setIdeas] = useState([])
    const toggleIdeas = (id) => {
        let newState = []
        const index = ideas.indexOf(id)
        if (index > -1) {
            newState = ideas.splice(index + 1, 1)
        } else {
            newState = [...ideas, id]
        }
        setIdeas(newState)
    }

    useEffect(() => {
        setShowJourneyForm(false)
        setShowNoteForm(false)
    }, [env])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {
                experienceDetailId ? (
                    <ExperienceDetail id={experienceDetailId} setExperienceDetailId={setExperienceDetailId} likedExperiences={likedExpiriences} toggleLikedExperiences={toggleLikedExperiences} ideas={ideas} toggleIdeas={toggleIdeas}></ExperienceDetail>
                ) : (
                    <div>
                        <div className='my-body'>
                            {
                                showJourneyForm ? 
                                    <JourneyForm toggleShowJourneyForm={toggleShowJourneyForm} dispatch={dispatch}></JourneyForm>
                                : showNoteForm ?
                                    <NoteForm toggleShowNoteForm={toggleShowNoteForm} dispatch={dispatch}></NoteForm>
                                : env === 'Diario' ?
                                    <Diario journeys={state.journeys} toggleShowJourneyForm={toggleShowJourneyForm}></Diario>
                                : env === 'Taccuino' ?
                                    <Taccuino notes={state.notes} ideaIds={ideas} toggleShowNoteForm={toggleShowNoteForm} setExperienceDetailId={setExperienceDetailId}></Taccuino>
                                : env === 'Crea' ?
                                    <Crea 
                                        toggleShowJourneyForm={toggleShowJourneyForm}
                                        toggleShowNoteForm={toggleShowNoteForm}
                                    ></Crea>
                                : env === 'Esplora' ?
                                    <Esplora setExperienceDetailId={setExperienceDetailId}></Esplora>
                                : env === 'User' ?
                                    <User></User>
                                : <div>404</div>
                            }
                        </div>
                        <Menu environment={env} setEnv={setEnv}></Menu>
                    </div>
                )
            }
        </LocalizationProvider>
    );
}

export default App;
