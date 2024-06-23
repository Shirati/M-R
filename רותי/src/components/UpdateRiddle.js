import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { updateRiddle } from '../store/riddleActions';

const UpdateRiddle = (params) => {

    const { id } = useParams();
    const [ok, setOk] = useState("false");
    const [dataURL, setDataURL] = useState("")



    const riddleStore = useSelector(state =>state.riddles.riddles );
  const isUser = useSelector(state =>state.users.isUser );

    const currentRiddle = riddleStore.find(a => a.id === id)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Get the form data
        const formData = new FormData(event.target);
        const riddle = {
            id: id,
            name: formData.get('riddlename') !== "" ? formData.get('riddlename') : currentRiddle.riddlename,
            question: formData.get('question') !== "" ? formData.get('question') : currentRiddle.question,
            solution: formData.get('solution') !== "" ? formData.get('solution') : currentRiddle.solution,
            img: dataURL !== "" ? dataURL : currentRiddle.image
        };

        dispatch(updateRiddle(riddle));
        setOk("riddle");
    };

    function handleUpload(event) {
        event.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setDataURL(reader.result);
        };
        reader.onerror = (error) => {
            console.error('There was a problem with the file upload', error);
        };
    };

    if (!isUser)
        return <Navigate to={`/Home`} replace />;

    return (<><Stack
        component="form"
        sx={{
            width: '25ch', '& .MuiTextFieldRoot': { m: 1, width: '25ch' },
            alignContent: 'center',
            position: 'center',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            margin: 'auto'
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        onSubmit={(event) => handleSubmit(event)}
    >

        <TextField htmlFor="riddlename" defaultValue={currentRiddle.riddlename} label="riddlename" id="riddlename" name="riddlename" color="primary" focused />
        <TextField htmlFor="question" defaultValue={currentRiddle.question} label="question" id="question" name="question" color="primary" focused />
        <TextField htmlFor="solution" defaultValue={currentRiddle.solution} label="solution" id="solution" name="solution" color="primary" focused />
        <TextField htmlFor="img" label="img" id="img" name="img" color="primary" type="file" onChange={handleUpload} focused />
        <img src={dataURL !== "" ? dataURL : currentRiddle.image} style={{
            width: '25ch', '& .MuiTextFieldRoot': { m: 1, width: '25ch' },
            alignContent: 'center',
            position: 'center',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            margin: 'auto'
        }} alt='' />
        <Button variant="outlined" type="submit" color='third' sx={{ borderWidth: "2px" }}>update Riddle</Button>
    </Stack>
        {ok === "riddle" && <Navigate to={`/riddles/${id}`} replace />}
    </>
    );
};

export default UpdateRiddle
