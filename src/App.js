import Dropdown from "./Component/Dropdown";
function App() {
  const items=["option1","options2","options3","options4"]
  return (
    <div style={style.container} ><Dropdown items={items}/></div>
  );
}

export default App;
const style = {
  container: {
    width: "50rem",
    margin: "4rem auto",
    backgroundColor: "aqua",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    height:"20rem"
    
  }
}