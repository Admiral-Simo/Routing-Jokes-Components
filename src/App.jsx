import { useState } from "react";
import axios from "axios";
import JokesPage from "./components/JokesPage/JokesPage";

const url = "https://course-api.com/axios-tutorial-post";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLoging] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {name:  name, email:email})
      setLoging(true);
    } catch (err) {
      console.log(err)
    }
  };
  if (login) {
    return <JokesPage />
  }
  return (
    <main className="h-screen px-5 bg-gray-100">
      <h1 className="pt-10 text-3xl text-center uppercase font-poppins md:text-5xl lg:text-7xl">
        <span className="text-blue-500">Axios</span> Tutorial
      </h1>
      <form
        className="max-w-lg p-5 mx-auto mt-10 space-y-10 bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-between">
          <label className="tracking-wider font-poppins" htmlFor="name">
            Name :{" "}
          </label>
          <input
            className="px-3 py-1 mt-1 bg-gray-300 rounded-lg w-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
          />
        </div>
        <div className="flex flex-col justify-between">
          <label className="tracking-wider font-poppins" htmlFor="email">
            Email :{" "}
          </label>
          <input
            className="px-3 py-1 mt-1 bg-gray-300 rounded-lg w-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />
        </div>
        <button className="w-full py-1 mt-10 tracking-widest text-blue-500 uppercase transition-all duration-300 bg-blue-300 rounded-lg hover:text-blue-300 hover:bg-blue-500">
          Log In
        </button>
      </form>
    </main>
  );
}

export default App;
