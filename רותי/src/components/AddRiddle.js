import React, { useEffect, useState } from 'react';
import { TextField, Button, Radio, RadioGroup } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { addRiddle } from '../store/riddleActions';
import { useSelector } from 'react-redux';
import * as ageService from '../services/ageService';
import * as difficultyService from '../services/difficultyService';
import * as subjectService from '../services/subjectService';


function AddRiddle() {
	const dispatch = useDispatch();
	const [ok, setOk] = useState("false");
	const [dataURL, setDataURL] = useState("");
	const [subjects, setSubjects] = useState([]);
	const [solutions, setSolutions] = useState([{ isCorrect: true, solution: '' }]);

	const [difficulties, setDifficulties] = useState([]);
	const [ages, setAges] = useState([]);
	const [_certified, setCertified] = useState(false);

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
	const isUser = useSelector(state => state.isUser);

	const handleAddRiddle = (event) => {
		event.preventDefault();

		// Get the form data
		const formData = new FormData(event.target);

		if (isUser)
			setCertified(true);

		const solutionsForSend = solutions
			.filter(({ solution }) => solution !== '')
			.sort(({ isCorrect: ic1 }, { isCorrect: ic2 }) => ic2 - ic1)


		const riddle = {
			name: formData.get('riddlename'),
			question: formData.get('question'),
			solution: solutionsForSend.map(({ solution }) => solution),
			image: dataURL,
			subject: formData.get('subject'),
			difficulty: formData.get('difficulty'),
			age: formData.get('age'),
			certified: _certified
		};

		dispatch(addRiddle(riddle));
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

	function changeSolution(ev, i) {
		const newSolution = ev.target.value;
		solutions[i].solution = newSolution;

		if (solutions[solutions.length - 1].solution !== '')
			solutions.push({ isCorrect: false, solution: '' });

		setSolutions([...solutions]);
	}

	function changeCorrectSolution(ev, i) {
		const newCorrectness = ev.target.checked;

		const copy = solutions.map(sln => ({...sln, isCorrect: false}))
		copy[i].isCorrect = newCorrectness;

		setSolutions([...copy]);
}


return (
	<>
		<Stack
			component="form"
			sx={{
				width: '50ch', '& .MuiTextFieldRoot': { m: 1, width: '50ch' },
				alignContent: 'center',
				position: 'center',
				display: 'flex', justifyContent: 'center', alignItems: 'center',
				margin: 'auto'
			}}
			spacing={2}
			noValidate

			autoComplete="off"
			onSubmit={(event) => handleAddRiddle(event)}
		>

			<TextField htmlFor="riddlename" label="title" id="riddlename" name="riddlename" color="primary" focused />
			<TextField htmlFor="question" label="question" id="question" name="question" color="primary" focused />

			<RadioGroup name='solutions'>
				{solutions.map((sln, i) => <React.Fragment key={i} >
					{/* <Radio defaultChecked={i === 0} radioGroup='solution' name='solution' /> */}
					<Radio
						checked={sln.isCorrect}
						radioGroup='solutions'
						name='solutions'
						onChange={(ev) => changeCorrectSolution(ev, i)}
					/>

					<TextField
						htmlFor={"solution" + (i + 1)}
						label={"solution " + (i + 1)}
						id={"solution" + (i + 1)}
						name={"solution" + (i + 1)}
						color="primary"
						focused
						value={sln.solution}
						onChange={(ev) => changeSolution(ev, i)} />
				</React.Fragment>)}
			</RadioGroup>
			{/* <TextField htmlFor="solution" label="solution" id="solution" name="solution" color="primary" focused
					onChange={addSolution} /> */}

			<TextField htmlFor="img" label="img" id="img" name="img" color="primary" type="file" onChange={handleUpload} focused />
			{dataURL !== '' && <img alt='riddle decription' src={dataURL} style={{
				width: '25ch', '& .MuiTextFieldRoot': { m: 1, width: '25ch' },
				alignContent: 'center',
				position: 'center',
				display: 'flex', justifyContent: 'center', alignItems: 'center',
				margin: 'auto'
			}} />}

			<div
				sx={{
					width: "50ch",
					"& .MuiTextFieldRoot": { m: 1, width: "50ch" },
					alignContent: "center",
					position: "center",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "auto",
				}}
				spacing={2}
				direction="row"
				noValidate
				autoComplete="off">

				<TextField
					htmlFor="subject"
					id="subject"
					name="subject"
					select
					label="Choose an option"
					color="primary"
					focused
					required
					SelectProps={{ native: true }}
				>
					{subjects &&
						subjects.map((subject) => (
							<option key={subject._id} value={subject._id}>
								{subject.subject_riddle}
							</option>
						))}
				</TextField>
				<TextField
					htmlFor="difficulty"
					id="difficulty"
					name="difficulty"
					select
					label="Choose an option"
					color="primary"
					focused
					required
					SelectProps={{ native: true }}
				>
					{difficulties &&
						difficulties.map((difficulty) => (
							<option key={difficulty._id} value={difficulty._id}>
								{difficulty.difficulty_riddle}
							</option>
						))}
				</TextField>

				<TextField
					htmlFor="age"
					id="age"
					name="age"
					select
					label="Choose an option"
					color="primary"
					focused
					required
					SelectProps={{ native: true }}
				>
					{ages &&
						ages.map((age) => (
							<option key={age._id} value={age._id}>
								{age.age_range}
							</option>
						))}
				</TextField>
			</div>
			<Button variant="outlined" type="submit" color='third' sx={{ borderWidth: "2px" }}>add</Button>

		</Stack>
		{ok === "riddle" && <Navigate to='/riddles' replace />}
	</>
);
};

export default AddRiddle
