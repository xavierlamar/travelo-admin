import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const[dataInfo,setData] = useState({
    email:"",
    password:"",
  })
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = ({currentTarget:input}) => {
    setData({...dataInfo,[input.name]:input.value})
  }
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
  
      setLoading(true)
  
      const {data} = await axios.post("http://localhost:4300/auth/login",
      {
        ...dataInfo
      },
      config
      );
      console.log(data);
      localStorage.setItem("users",JSON.stringify(data))
      setLoading(false)
      navigate('/admin')
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false)
    }
     
  };


  return (
    <div className="login">
      {/* {error && <ErrorMessage Variant="Danger">{error}</ErrorMessage>}
       {loading && <Loading/>} */}
      <form className="lContainer">
        <input
          type="text"
          placeholder="username"
          name = 'username'
          id="username"
          onChange={handleChange}
          className="lInput"
          value={dataInfo.username}
        />
        <input
          type="password"
          placeholder="password"
          name='password'
          id="password"
          onChange={handleChange}
          className="lInput"
          value={dataInfo.password}
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        
      </form>
    </div>
  );
};

export default Login;