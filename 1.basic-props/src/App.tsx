import Welcome from "./components/Welcome"
import Profile from "./components/Profile";
import Header from "./components/Header";

type Teacher = {
  name :string;
  age : number;
  address : string;
  job : string;
  id : number;
};

const teachers: Teacher[] = [
  {
    name : "rosan",
    age : 20,
    address : "Indonesia",
    job : "Cyber security",
    id : 1,

  },
    {
    name : "fikri",
    age : 21,
    address : "Indonesia",
    job : "FOrensik ",
    id : 2,

  },

    {
    name : "Khaslis",
    age : 43,
    address : "Indonesia",
    job : "Tess",
    id : 3,

  }
]

function App() {
  return (
    <>
      <Header />
      <div style={{ gap: "8px", display: "flex", }}>

        {teachers.map((teacher) => {
          return <Profile
          name={teacher.name}
          age={teacher.age}
          address={teacher.address}
          job={teacher.job}
          key={teacher.id}
          />


        } )}


      </div>

      <Welcome />

    </>
  );

}

export default App
