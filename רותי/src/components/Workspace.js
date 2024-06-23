import Login from "./Login"
import { Routes, Route } from "react-router-dom";

import UpUser from "./UpUser";
import Home from "./Home";

import RiddleList from "./RiddleList";
import Thanks from "./Thanks";
import Register from "./Register";
import Riddle from "./Riddle";
import UpdateRiddle from "./UpdateRiddle";
import AddRiddle from "./AddRiddle";
import ActionCategory from "./ActionCategory";
import Statistic from "./Statistic";
import CheckRiddleList from "./CheckRiddleList";

export default function WorkSpace() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/Home/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/UpUser/" element={<UpUser />} />
                <Route path="/thanks/:id" element={<Thanks />} />
                
                <Route path="/statistic" element={<Statistic />} />

                <Route path="/riddles" element={<RiddleList />} />
                <Route path="/check-riddles" element={<CheckRiddleList />} />
                <Route path="/riddles/:id" element={<Riddle />} />
               
                <Route path="/updateriddle/:id" element={<UpdateRiddle />} />
                <Route path="/addriddle" element={<AddRiddle />} />
                <Route path="/action_category" element={<ActionCategory />} />
            </Routes>
        </>
    )
}