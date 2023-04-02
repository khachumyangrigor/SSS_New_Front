import axios from 'axios';

export default function loadData(path){
  return axios.post(path)
      .then(res => {
            if (res.status === 200) {
                return res.data;
            }
        })
      .catch(err => {
          console.error(err.response?err.response.data.msg:err);
          return null;
      });
};