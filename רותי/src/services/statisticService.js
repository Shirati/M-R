import instance from './instance';

export async function getAllRiddlesName() {
    try {
      const result = await instance.get(`/statistic/getAllRiddlesName`);
      return result.data;
    } catch (error) {
      console.error('Error in getCount:', error);
      throw error;
    }
  }
  export async function getAllRiddlesSatisfied() {
    try {
      const result = await instance.get(`/statistic/getAllRiddlesSatisfied`);
      return result.data;
    } catch (error) {
      console.error('Error in getCount:', error);
      throw error;
    }
  }
  export async function getAllRiddlesUnSatisfied() {
    try {
      const result = await instance.get(`/statistic/getAllRiddlesUnSatisfied`);
      return result.data;
    } catch (error) {
      console.error('Error in getCount:', error);
      throw error;
    }
  }
export async function getCountSatisfied() {
    try {
      const result = await instance.get(`/statistic/getCountSatisfied`);
      return result.data;
    } catch (error) {
      console.error('Error in getCount:', error);
      throw error;
    }
  }
  export async function getCountUnSatisfied() {
    try {
      const result = await instance.get(`/statistic/getCountUnSatisfied`);
      return result.data;
    } catch (error) {
      console.error('Error in getCount:', error);
      throw error;
    }
  }
  export async function entryRiddle(id,status) {
    try {
      const result = await instance.entryRiddle(`/statistic/entryRiddle/${id}`,status);
      console.log("EntryRiddle");
      return result;
    } catch (error) {
      console.error("Error in Riddle:", error);
      throw error;
    }
  }
  export async function getCount() {
    try {
      const result = await instance.get(`/statistic/getCount`);
      return result.data;
    } catch (error) {
      console.error('Error in getCount:', error);
      throw error;
    }
  }
  export async function popular() {
    try {
      const result = await instance.get(`/statistic/popular`);
      return result.data;
    } catch (error) {
      console.error('Error in getCount:', error);
      throw error;
    }
  }
  export async function useSite ()  {
    try {
       await instance.useSite(`/statistic/useSite`);
      console.log('UseSite');
     
    } catch (error) {
      console.error('Error in edit:', error);
      throw error;
    }
  }
