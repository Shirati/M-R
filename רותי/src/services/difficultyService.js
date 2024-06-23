// import axios from 'axios';

// const apiUrl = process.env.REACT_APP_API
//const instance = axios.create();
import instance from './instance';


export async function getDifficulty() {
  try {
    const result = await instance.get(`/Difficulty`);
    return result.data;
  } catch (error) {
    console.error('Error in getDifficulty:', error);
    throw error;
  }
}

export async function addDifficulty(difficulty) {
  try {
    console.log('addDifficulty', difficulty);
    const result = await instance.post(`/Difficulty`, { difficulty });
    return result;
  } catch (error) {
    console.error('Error in addDifficulty:', error);
    throw error;
  }
}

export async function setDifficulty(id, difficulty) {
  try {
    console.log('setDifficulty', { id, difficulty });
    const result = await instance.put(`/Difficulty/${id}`, { difficulty });
    return result;
  } catch (error) {
    console.error('Error in setDifficulty:', error);
    throw error;
  }
}

export async function deleteDifficulty(id) {
  try {
    const result = await instance.delete(`/Difficulty/${id}`);
    console.log('deleteDifficulty');
    return result;
  } catch (error) {
    console.error('Error in deleteDifficulty:', error);
    throw error;
  }
}
