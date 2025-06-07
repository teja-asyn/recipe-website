import NavBar from "./components/NavBar"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
  return (
    <div className="p-5 w-screen h-screen bg-gray-800 font-thin text-white">
      <NavBar/>
<MainRoutes/>
    </div>
  )
}

export default App
