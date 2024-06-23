// import axios from 'axios';

// const apiUrl = process.env.REACT_APP_API
// const apiUrl=5000;
// const instance = axios.create();
import instance from './instance';


export async function getSubject() {
  try {
    const result = await instance.get(`/Subject`);
    return result.data;
  } catch (error) {
    console.error('Error in getSubject:', error);
    throw error;
  }
}

export async function addSubject(subject) {
  try {
    console.log('addSubject', subject);
    const result = await instance.post(`/Subject`, { subject_riddle: subject });
    return result;
  } catch (error) {
    console.error('Error in addSubject:', error);
    throw error;
  }
}

export async function setSubject(id, subject) {
  try {
    console.log('setSubject', { id, subject });
    const result = await instance.put(`/Subject/${id}`, { subject });
    return result;
  } catch (error) {
    console.error('Error in setSubject:', error);
    throw error;
  }
}

export async function deleteSubject(id) {
  try {
    const result = await instance.delete(`/Subject/${id}`);
    console.log('deleteSubject');
    return result;
  } catch (error) {
    console.error('Error in deleteSubject:', error);
    throw error;
  }
}

