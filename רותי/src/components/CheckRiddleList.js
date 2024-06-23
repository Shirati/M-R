import React, { useEffect, useState } from 'react'
// import RiddleList from './RiddleList'
import SmallRiddle from './SmallRiddle'
import * as riddleService from '../services/riddleService';
import RiddleList from './RiddleList';
import { List, Checkbox, Button, Alert } from '@mui/material';

export default function CheckRiddleList() {
    useEffect(() => {
        riddleService.getNotCertified()
            .then(r => setRiddles(r)
            )
    }, [])


    const [riddles, setRiddles] = useState([]);
    const checked = new Set();


    function checkRiddle(id) {
        if (checked.has(id))
            checked.delete(id);
        else
            checked.add(id)
        console.log(checked);
    }

    async function checkRiddles() {
        try {
            const result = await riddleService.checkRiddles(checked);
            setRiddles(result)
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        {riddles && riddles.length ? (<>
            <List>
                {riddles.map((i) => (
                    <React.Fragment key={i._id}>
                        <Checkbox onChange={() => checkRiddle(i._id)} />
                        <SmallRiddle
                            id={i._id}
                            name={i.riddlename}
                            img={i.image}
                        />
                    </React.Fragment>
                ))}
            </List>
            <Button onClick={checkRiddles}>OK</Button>
        </>) : (
            <Alert>No Riddles For Check</Alert>
        )}
    </>
    )
}
