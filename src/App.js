import BookContextProvider from "./contexts/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import NewBookForm from "./Components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
