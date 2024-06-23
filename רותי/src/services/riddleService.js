// const apiUrl = process.env.REACT_APP_API
//const instance = axios.create();
// import axios from "axios";
import instance from "./instance";

// useEffect(() => {
//   console.log('use effect');
//   async function fetchData() {
// You can await here
//     const r = await axios.get('http://localhost:5000/riddle/65e8382cfa0d47432331bb0e/65b15bdc87ea325b85d9341c/65b154669d23c5f8089be1eb');
//     console.log(r.data);
//   }
//   fetchData();
// }, []); // Or [] if effect doesn't need props or state

export async function getManagerRiddles() {
  try {
    const result = await instance.get(
      `/riddle/not-certified`
    );
    return result.data;
  } catch (error) {
    console.error("Error in getRiddle:", error);
    throw error;
  }
}
export async function getRiddle({ subject, difficulty, age }) {
  try {
    const result = await instance.get(
      `/riddle?age=${age}&subject=${subject}&difficulty=${difficulty}`
    );
    return result.data;
  } catch (error) {
    console.error("Error in getRiddle:", error);
    throw error;
  }
}
export async function getCountSatisfied() {
  try {
    const result = await instance.get(`/riddle/getCountSatisfied`);
    return result.data;
  } catch (error) {
    console.error('Error in getCount:', error);
    throw error;
  }
}
export async function getCountUnSatisfied() {
  try {
    const result = await instance.get(`/riddle/getCountUnSatisfied`);
    return result.data;
  } catch (error) {
    console.error('Error in getCount:', error);
    throw error;
  }
}
export async function getNotCertified() {
  try {
    const result = await instance.get(`/riddle/not-certified`);
    return result.data;
  } catch (error) {
    console.error('Error in getCount:', error);
    throw error;
  }
}
export async function getAllCertified() {
  try {
    const result = await instance.get(`/riddle/getAllCertified`);
    return result.data;
  } catch (error) {
    console.error('Error in getCount:', error);
    throw error;
  }
}
export async function addRiddle(riddle) {
  try {
    console.log("addRiddle", riddle);
    const result = await instance.post(`/riddle`, riddle);
    return result;
  } catch (error) {
    console.error("Error in addRiddle:", error);
    console.log("error")
    throw error;
  }
}

export async function checkRiddles(riddles) {
  try {
    console.log("checkRiddles", [...riddles]);
    const result = await instance.patch(`/riddle/check`, { riddles: [...riddles] });
    return result;
  } catch (error) {
    console.error("Error in checkRiddles:", error);
    throw error;
  }
}

export async function setRiddle(id, riddle) {
  try {
    console.log("setRiddle", { id, riddle });
    const result = await instance.put(`/riddle/${id}`, { riddle });
    return result;
  } catch (error) {
    console.error("Error in setRiddle:", error);
    throw error;
  }
}

export async function deleteRiddle(id) {
  try {
    const result = await instance.delete(`/riddle/${id}`);
    console.log("deleteRiddle");
    return result;
  } catch (error) {
    console.error("Error in Riddle:", error);
    throw error;
  }
}

export async function entryRiddle(id, status) {
  try {
    const result = await instance.entryRiddle(`/riddle/entryRiddle/${id}`, status);
    console.log("EntryRiddle");
    return result;
  } catch (error) {
    console.error("Error in Riddle:", error);
    throw error;
  }
}
export async function setCertified(id, status) {
  try {
    const result = await instance.entryRiddle(`/riddle/setCertified/${id}`, status);
    console.log("EntryRiddle");
    return result;
  } catch (error) {
    console.error("Error in Riddle:", error);
    throw error;
  }
}