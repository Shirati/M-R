import { TextField, Button } from '@mui/material';
//import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import { addRiddle } from '../store/riddleActions';
import * as ageService from '../services/ageService';
import * as difficultyService from '../services/difficultyService';
import * as subjectService from '../services/subjectService';
import { useSelector } from 'react-redux';
import SelectBoxes from './SelectBoxes';

function ActionCategory() {
  const [subjects, setSubjects] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [ages, setAges] = useState([]);
  const [ok, setOk] = useState(false);
  const isUser = useSelector(state => state.users.isUser);

  //const dispatch = useDispatch();
  useEffect(() => {
    getSubject();
    getAge();
    getDifficulty();
  }, [])

  async function getSubject() {
    const subjects = await subjectService.getSubject();
    setSubjects(subjects);
  }

  async function getDifficulty() {
    const difficulties = await difficultyService.getDifficulty();
    setDifficulties(difficulties);
  }

  async function getAge() {
    const ages = await ageService.getAge();
    setAges(ages);
  }

  async function add(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const parametrim = {
      subject: formData.get('subject'),
      difficulty: formData.get('difficulty'),
      age: formData.get('age')
    };
    console.log(parametrim);
    ageService.addAge(parametrim.age);
    difficultyService.addDifficulty(parametrim.difficulty)
    subjectService.addSubject(parametrim.subject)
    setOk(true);

  }
  async function deleteSubject(id) {
    await subjectService.deleteSubject(id);

  }
  async function updateSubject(value) {
    await subjectService.setSubject(value._id, value);

  }
  async function addSubject(value) {
    return await subjectService.addSubject(value);
  }
  async function deleteDifficulty(id) {
    await difficultyService.deleteDifficulty(id);

  }
  async function updateDifficulty(id, value) {
    await difficultyService.setDifficulty(id, value);
  }

  async function addDifficulty(value) {
    return await difficultyService.addDifficulty(value);
  }
  async function deleteAge(id) {
    await ageService.deleteAge(id);

  }
  async function updateAge(id, value) {
    await ageService.setAge(id, value);
  }
  async function addAge(value) {
    return await ageService.addAge(value);
  }


  if (!isUser)
    return <Navigate to={`/Home`} replace />;

  return (
    <>
      <Stack
        component="form"
        sx={{
          width: '25ch', '& .MuiTextFieldRoot': { m: 1, width: '25ch' },
          alignContent: 'center',
          position: 'center',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          margin: 'auto',
        }}
        spacing={2}
        direction="row"
        noValidate
        autoComplete="off"
        onSubmit={(event) => add(event)}
      >

        {
          subjects && subjects.length &&
          <SelectBoxes label='subject' list={subjects} itemKey='_id' itemValue='subject_riddle'
            onUpdate={updateSubject}
            onDelete={deleteSubject}
            onAdd={addSubject} />
        }

        {
          difficulties && difficulties.length &&
          <SelectBoxes label='difficulty' list={difficulties} itemKey='_id' itemValue='difficulty_riddle'
            onUpdate={updateDifficulty}
            onDelete={deleteDifficulty}
            onAdd={addDifficulty} />
        }
        {
          ages && ages.length &&
          <SelectBoxes label='age' list={ages} itemKey='_id' itemValue='age_range' 
          onUpdate={updateAge} 
          onDelete={deleteAge}
          onAdd={addAge} />
        }

        {/* 
        <Button sx={{
          alignContent: 'center',
          position: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          borderWidth: "2px",
          marginTop: '14px',
        }}
          variant="outlined"
          type="submit"
          color='third'
        >
          הוסף בחירה
        </Button> */}
      </Stack>

      {ok && <Navigate to={`/Home`} replace />}
    </>
  );
};

export default ActionCategory
