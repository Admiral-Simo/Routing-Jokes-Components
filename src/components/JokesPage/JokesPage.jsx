import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://icanhazdadjoke.com/";

function JokesPage() {
    const [joke, setJoke] = useState("random dad joke");
  
    const fetchDadJoke = async () => {
      try {
        const { data } = await axios(url, {
          headers: {
            Accept: "application/json",
          },
        });
        setJoke(data.joke);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchDadJoke();
    }, []);
  
    return (
      <main className="h-screen mx-10">
        <h1 className="pt-10 text-3xl text-center uppercase font-poppins md:text-5xl lg:text-7xl">
          <span className="text-blue-500">Axios</span> Tutorial
        </h1>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={fetchDadJoke}
            className="px-3 py-1 mt-10 tracking-widest text-blue-500 uppercase transition-all duration-300 bg-blue-300 rounded-lg hover:text-blue-300 hover:bg-blue-500"
          >
            Random joke
          </button>
        </div>
        <h2 className="pt-10 text-xl text-center uppercase font-poppins md:text-3xl lg:text-5xl">
          {joke}
        </h2>
      </main>
    );
  }
  
  export default JokesPage