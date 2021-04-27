import axios from "axios";

export default UserApi = {
  tokenLogin: (user) =>
    axios
      .post(`http://mydoctor.local/api/login`, user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => alert(err)),

  getInfos: (token) =>
    axios
      .get(`http://mydoctor.local/api/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        //alert(JSON.stringify(res.data))
        return res.data;
      })
      .catch((err) => alert(err)),

  register: (data) =>
    axios
      .post(`http://mydoctor.local/api/register`, data)
      .then((res) => {
        return res.data;
        //alert(JSON.stringify(res.data));
      })
      .catch((err) => alert(err)),
};
