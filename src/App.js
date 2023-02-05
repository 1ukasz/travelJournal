import Header from "./components/Header"
import Journal from "./components/Journal"
import data from "./data"

function App() {
  const mapped = data.map(item => {
    return(
      <div><Journal 
      key={item.id}
      {...item}
      /> 
      <hr />
      </div>
    )
  }
  )
  return (
    <div className="App">
      <Header />
      <div className="content">
      {mapped}
      
      </div>
    </div>
  );
}

export default App;
