import "./newhotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { busInputs } from "../../formSource";
import axios from "axios";

const NewBus = () => {
  const [file, setFile] = useState("");
  const [info,setInfo] = useState({})


  const handleChange = (e) =>{
    setInfo((prev) => ({...prev,[e.target.id]: e.target.value}));
  };
  
  console.log(file)

  const handleClick = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","upload")
    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dtszkvxdq/image/upload",
      data
      );
      console.log(uploadRes.data); 
      const {url} = uploadRes.data;

      console.log(url);
      

      await axios.post("http://localhost:4300/bus",{
        ...info,
        img: url,
      })

    } catch (error) {
      console.log(error);
    }
  };

  console.log(info);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Bus</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {busInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder}
                  id={input.id}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Availability</label>
                <select id="availability" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="formInput">
                <label>TYPE</label>
                <select id="type" onChange={handleChange}>
                  <option>CLASSIC</option>
                  <option>VIP</option>
                </select>
              </div>
              <div className="formInput">
                <label>SOURCE</label>
                <select id="source" onChange={handleChange}>
                <option >YAOUNDE</option>
                  <option >DOUALA</option>
                  <option >BAMENDA</option>
                  <option >BERTOUA</option>
                  <option >MAROUA</option>
                  <option >BUEA</option>
                  <option >DOUALA</option>
                  <option >NGAOUNDÉRÉ</option>
                  <option >BAFOUSSAM</option>
                  <option >EBOLOWA</option>
                  </select>
              </div>
              <div className="formInput">
                <label>DESTINATION</label>
                <select id="Destination" onChange={handleChange}>
                <option >YAOUNDE</option>
                  <option >DOUALA</option>
                  <option >BAMENDA</option>
                  <option >BERTOUA</option>
                  <option >MAROUA</option>
                  <option >BUEA</option>
                  <option >DOUALA</option>
                  <option >NGAOUNDÉRÉ</option>
                  <option >BAFOUSSAM</option>
                  <option >EBOLOWA</option>
                  </select>
              </div>
              <div className="formInput">
                <label>DAY</label>
                <select id="day" onChange={handleChange}>
                  <option>MONDAY</option>
                  <option>TUESDAY</option>
                  <option>WEDNESDAY</option>
                  <option>THURSDAY</option>
                  <option>FRIDAY</option>
                  <option>SATURDAY</option>
                  <option>SUNDAY</option>
                </select>
              </div>
              <div className="formInput">
                <label>TIME</label>
                <input
                    id="time"
                    onChange={handleChange}
                    type="time"
                    placeholder="Select Time"
                    className="formInput"
                  />
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBus;
