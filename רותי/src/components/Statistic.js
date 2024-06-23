
import * as statisticService from "../services/statisticService";

import { useEffect, useState } from "react";
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';

import { axisClasses } from '@mui/x-charts/ChartsAxis';
//import * as React from 'react';

export default function Statistic() {
   const [labels, setLabels] = useState([]);
   const [lData, setLData] = useState([]);
   const [rData, setRData] = useState([]);
    // let labels = await statisticService.getAllRiddlesName()// let labelsriddles
    // let lData  = await statisticService.getAllRiddlesSatisfied()// lDatasatisfied
    // let rData  = await statisticService.getAllRiddlesUnSatisfied()// unsatisfied
    let colors = ['#f78e23', '#116783'];

   // const popular=statisticService.popular();
    useEffect( () => {
		statisticService
			.getAllRiddlesName()
			.then(data=>{setLabels(data);console.log(data);});//  labelsriddles
		
		statisticService
			.getAllRiddlesSatisfied()
			.then(data=>{setLData(data);console.log(data);});// lDatasatisfied
		statisticService
			.getAllRiddlesUnSatisfied()
			.then(data=>{setRData(data);console.log(data);});// unsatisfied
		// console.log(riddles);
		//console.log(lData);
		//console.log(rData);
      }, []);
    
      async function getCountSatisfied(index) {
        const count = await statisticService.getCountSatisfied(index);
        console.log(count);
        return count;
      
      }
      async function getCountUnSatisfied(index) {
        const count = await statisticService.getCountUnSatisfied(index);
        console.log(count);
        return count;
      
      }
      async function getCountRiddles() {
        const count = await statisticService.getCount();
        console.log(count);
        return count;
      
      }
      async function percent(index) {
        const p =(getCountSatisfied(index)+getCountUnSatisfied(index))*100/getCountRiddles();
        console.log(p);
        return p;
      
      }
      
      
      // const labels = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];
      // const lData = [42, 24, 56, 45, 3];
      // const rData = [57, 7, 19, 16, 22];
       
    return (
        <>
           <BarChart
     		sx={(theme) => ({
        [`.${barElementClasses.root}`]: {
          fill: theme.palette.background.paper,
          strokeWidth: 2,
        },
        [`.MuiBarElement-series-l_id`]: {
          stroke: colors[0],
        },
        [`.MuiBarElement-series-r_id`]: {
          stroke: colors[1],
        },
        [`.${axisClasses.root}`]: {
          [`.${axisClasses.tick}, .${axisClasses.line}`]: {
            stroke: '#006BD6',
            strokeWidth: 3,
          },
          [`.${axisClasses.tickLabel}`]: {
            fill: '#006BD6',
          },
        },
        border: `1px solid rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1)`,
        backgroundImage: `linear-gradient(rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1) 1px, transparent 1px)`,
        backgroundSize: '35px 35px',
        backgroundPosition: '20px 20px, 20px 20px',
      })}
      xAxis={[{ scaleType: 'band', data: labels }]}
      series={[
        { data: lData, label: 'l', id: 'l_id' },
        { data: rData, label: 'r', id: 'r_id' },
      ]}
      colors={colors}
      width={500}
      height={300}
    />

    
        </>
      
    )
}

// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import Stack from '@mui/material/Stack';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// const Tableau10 = [
//   '#4e79a7',
//   '#f28e2c',
//   '#e15759',
//   '#76b7b2',
//   '#59a14f',
//   '#edc949',
//   '#af7aa1',
//   '#ff9da7',
//   '#9c755f',
//   '#bab0ab',
// ];

// const chartsParams = {
//   margin: { bottom: 20, left: 25, right: 5 },
//   height: 300,
// };
// export default function BasicColor() {
//   const [color, setColor] = React.useState('#4e79a7');

//   const handleChange = (event, nextColor) => {
//     setColor(nextColor);
//   };

//   return (
  
//   );
// }
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
// import Rating from '@mui/material/Rating';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
// import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
// import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// const StyledRating = styled(Rating)(({ theme }) => ({
//   '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
//     color: theme.palette.action.disabled,
//   },
// }));

// const customIcons = {
//   1: {
//     icon: <SentimentVeryDissatisfiedIcon color="error" />,
//     label: 'Very Dissatisfied',
//   },
//   2: {
//     icon: <SentimentDissatisfiedIcon color="error" />,
//     label: 'Dissatisfied',
//   },
//   3: {
//     icon: <SentimentSatisfiedIcon color="warning" />,
//     label: 'Neutral',
//   },
//   4: {
//     icon: <SentimentSatisfiedAltIcon color="success" />,
//     label: 'Satisfied',
//   },
//   5: {
//     icon: <SentimentVerySatisfiedIcon color="success" />,
//     label: 'Very Satisfied',
//   },
// };

// function IconContainer(props) {
//   const { value, ...other } = props;
//   return <span {...other}>{customIcons[value].icon}</span>;
// }

// IconContainer.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// export default function RadioGroupRating() {
//   return (
//     <StyledRating
//       name="highlight-selected-only"
//       defaultValue={2}
//       IconContainerComponent={IconContainer}
//       getLabelText={(value) => customIcons[value].label}
//       highlightSelectedOnly
//     />
//   );
// }
