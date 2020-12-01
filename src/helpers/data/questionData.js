import axios from 'axios';

const baseUrl = 'https://prept-template-ae8e7.firebaseio.com';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/.json`).then((res) => {
    resolve(Object.values(res.data));
  }).catch((err) => reject(err));
});

const createQuestion = (data) => axios.post(`${baseUrl}.json`, data).then((res) => {
  const firebaseKey = { firebaseKey: res.data.name };
  axios.patch(`${baseUrl}/{res.data.name}.json`, firebaseKey);
}).catch((err) => console.warn(err));

export default { getQuestions, createQuestion };
