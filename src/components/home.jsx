import React, { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=abb8adac46d2d259df571b1782dbefea`;
  const searchlocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="max-w-[1400px]  h-screen ">
      <div className="absolute w-full h-full">
        <img
          className=" w-full h-full object-cover items-center "
          src="https://images.pexels.com/photos/12705385/pexels-photo-12705385.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="weather"
        />
      </div>

      <div className="relative w-full h-full bg-black/20 text-white z-10 p-2 pt-10 flex flex-col justify-between">
        {/**Top part */}
        <div className="relative flex justify-center bg-transparent p-2 text-center items-center text-black">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            className="p-2 rounded-2xl bg-transparent border border-green-400 outline-none text-white"
          />
          <AiOutlineSearch onClick={searchlocation} />
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-bold">{data.name}</h1>
          </div>
          <div>
            <h3 className="text-6xl font-bold p-2">60°F</h3>
          </div>
          <div>
            <p className="text-2xl font-bold p-2">Clouds</p>
          </div>
        </div>
        {/**Bottom part */}
        <div className="flex  justify-evenly text-center  border p-2 m-4 bg-cyan-300/40 outline-none rounded-lg ">
          <div>
            <p className="text-2xl font-bold">65°F</p>
            <p className="sm:text-xl font-bold">Feels Like</p>
          </div>
          <div>
            <p className="text-2xl font-bold">20%</p>
            <p className="sm:text-xl font-bold">Humidity</p>
          </div>
          <div>
            <p className="text-2xl font-bold">12MPH</p>
            <p className="sm:text-xl font-bold">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
