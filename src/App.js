import BookContextProvider from "./contexts/BookContext";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
