import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import BookList from "../components/BookList";

export default function BooksListPage() {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("Failed");
      }
      const data = await response.json();

      const booksArray = Object.values(data);

      setBooks(booksArray);
      setGenres(booksArray.map((book) => book.genre));
    } catch (error) {}
  };

  const [filterTerm, setFilterTerm] = useState("");

  const updateFilterTerm = (value) => {
    setFilterTerm(value);
  };

  const getFilteredList = () => {
    let filteredList = [...books];
    if (selectedGenre !== "") {
      filteredList = filteredList.filter((book) => {
        return book.genre === selectedGenre;
      });
    }
    if (filterTerm)
      filteredList = filteredList.filter((book) => {
        return (
          book.title.toLowerCase().includes(filterTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(filterTerm.toLowerCase())
        );
      });
    return filteredList;
  };

  const updateSelectedGenre = (value) => {
    setSelectedGenre(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Livros</Text>
      <BookList
        books={getFilteredList()}
        inputValue={filterTerm}
        updateFilterTerm={(event) => updateFilterTerm(event)}
        updateSelectedGenre={(event) => updateSelectedGenre(event)}
        selectedGenre={selectedGenre}
        genres={genres}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
