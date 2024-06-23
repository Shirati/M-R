
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BottomNavigationAction } from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

//radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
//statistic
import * as statisticService from "../services/statisticService";





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})
  (({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function Riddle() {
  const [expanded, setExpanded] = React.useState(false);
  const [time, setTime] = useState(false);
  const [answer, setAnswer] = useState(false);
  const riddles = useSelector(state => state.riddles.riddles);
  const isUser = useSelector(state => state.users.isUser);

  const { id } = useParams();
  const currentRiddle = riddles.find(a => a._id === id);


  //radio
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');


  // const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const interval = isRunning && setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
    setAnswer(true)
  };

  const convertToMinutes = (seconds) => {
    return Math.floor(seconds / 60);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  //radio

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === currentRiddle.solution[0]) {
      setHelperText('You got it!');
      setError(false);
      statisticService.entryRiddle(currentRiddle._id,1)
    } else if (value === !null) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
      statisticService.entryRiddle(currentRiddle._id,1)
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };
  return (
    // <div>{JSON.stringify(currentRiddle)}</div>
    <>
      {/* time */}
      {/* <BottomNavigationAction
        label="time"
        value="time"
        icon={<HourglassTopIcon color='third' />}
        onClick={setTime(true)}

      />
      {time && <div>
        <h1>Timer: {seconds} seconds</h1>
        <h2>Time in minutes: {convertToMinutes(seconds)} minutes</h2>
        {isRunning && <button onClick={stopTimer}>select ans</button>}
      </div>

      } */}
      <Card sx={{
        maxWidth: 345,
        alignContent: 'center',
        position: 'center',
        color: 'orange',
        justifyContent: 'center', alignItems: 'center',
        margin: 'auto',
        marginTop: '100px',
      }}>
        <CardHeader

          action={
            <BottomNavigationAction
              label="Update Item"
              value="Update Item"
              icon={<CloseOutlinedIcon color="third" />}
              component={Link}
              to={"/riddles/"} />
          }
          title={currentRiddle.riddlename}

        />
        <CardMedia
          component="img"
          height="194"
          image={`http://localhost:5000/uploads/${currentRiddle.image}`}
          alt={currentRiddle.riddlename}
        />
        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            {currentRiddle.question}
          </Typography>
          {(answer || !time) && <Typography variant="body2" color="text.secondary">
            {currentRiddle.solution}
          </Typography>} */}

    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">  {currentRiddle.question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {console.log(currentRiddle.solution)}
          {currentRiddle.solution.map((s, index) => (
        <FormControlLabel
          key={index}
          value={s}
          control={<Radio />}
          label={s}
         
        />
      ))}
          
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
        </CardContent>


        {/* <CardActions disableSpacing>
          <IconButton aria-label="share">
            <BottomNavigationAction
              label="regular"
              value="regular"
              title=''
              icon={<HelpSharpIcon color='third' />}
              onClick={setAnswer(true)} onclick={stopTimer}
            />
          </IconButton>
          <IconButton aria-label="share">
            {isUser && <BottomNavigationAction
              label="Update riddle"
              value="Update riddle"
              icon={<ModeOutlinedIcon />}
              component={Link}
              to={`/UpdateRiddle/${id}`} />}
          </IconButton>
          <IconButton aria-label="share">
            {time && answer && <BottomNavigationAction
              label="statistic"
              value="statistic"
              icon={<ModeOutlinedIcon />}
              component={Link}
              to={`/UpdateRiddle/${id}`} />}
          </IconButton>
        </CardActions> */}

      </Card>

    </>
  )
  // }
}


