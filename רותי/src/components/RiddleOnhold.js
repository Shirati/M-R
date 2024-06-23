import { useEffect, useState } from "react";
import * as subjectService from "../services/subjectService";
import * as difficultyService from "../services/difficultyService";
import * as ageService from "../services/ageService";
import SmallRiddle from "./SmallRiddle";
import { useDispatch, useSelector } from "react-redux";
import { getAllRiddles, updateRiddle } from "../store/riddleActions";
import { TextField, Button, Stack, List, Divider } from "@mui/material";

function RiddleOnhold() {
  const [subjects, setSubjects] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [ages, setAges] = useState([]);
  const [ok, setOk] = useState(false);
  const dispatch = useDispatch();
  const riddles = useSelector(st => st.riddles.riddles);

  useEffect(() => {
    getSubject();
    getAge();
    getDifficulty();
  }, []);

  async function getSubject() {
    const subjects = await subjectService.getSubject();
    console.log(subjects);
    setSubjects(subjects);
  }
  async function getDifficulty() {
    const difficulties = await difficultyService.getDifficulty();
    console.log(difficulties);
    setDifficulties(difficulties);
  }
  async function getAge() {
    const ages = await ageService.getAge();
    console.log(ages);
    setAges(ages);
  }
  function searchRiddles(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const parameters = {
      subject: formData.get("subject"),
      difficulty: formData.get("difficulty"),
      age: formData.get("age"),
    };
    console.log(parameters);
    dispatch(getAllRiddles(parameters));
    console.log(riddles);
    //const riddles = await riddleService.getRiddle(parameters);
    // setRiddles(riddles);
    // setOk(true);
  }

  return (
    <>
    <h1 style={{ fontFamily: 'Segoe Print,Arial',textAlign:'center', color:'gray' }}>Filter the Riddles to choose your favorite Riddles</h1>
      <Stack
        component="form"
        sx={{
          width: "75ch",
          "& .MuiTextFieldRoot": { m: 1, width: "75ch" },
          alignContent: "center",
          position: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
        spacing={2}
      // direction="row"
        noValidate
        autoComplete="off"
        onSubmit={(event) => searchRiddles(event)}
      >
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
     
    
      <Button
          sx={{
            alignContent: "center",
            position: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            borderWidth: "2px",
            marginTop: "14px",
          }}
          variant="outlined"
          type="submit"
          color="third"
        >
          תן חידה לעניין
        </Button>
      {/* {ok &&
        <List sx={{ width: '100%', maxWidth: 360, margin: 'auto' }} >
          {riddles.map(i => <SmallRiddle key={i._id} id={i._id} name={i.riddlename} img={i.image} />)}
          <Divider variant="inset" component="li" />
        </List>
      } */}
  </Stack>
  
      {riddles.length &&
        riddles.map((i) => (
          <SmallRiddle
            key={i._id}
            id={i._id}
            name={i.riddlename}
            img={i.image}
          />
        ))}
    </>
  );
}
export default RiddleList;
