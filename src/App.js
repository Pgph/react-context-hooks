import BookContextProvider from "./contexts/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
