import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
function CardBook({ book }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{book.title}</Text>
      <Text>Autor: {book.author}</Text>
      <Text>Gênero: {book.genre}</Text>
      <Text>Ano: {book.publication_year}</Text>
    </View>
  );
}

export default function BookList({
  books,
  inputValue,
  updateFilterTerm,
  updateSelectedGenre,
  selectedGenre,
  genres,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Text>Pesquisar: </Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={updateFilterTerm}
          placeholder="Digite um título ou autor"
        />
        <Picker
          selectedValue={selectedGenre}
          onValueChange={updateSelectedGenre}
          style={styles.picker}
        >
          <Picker.Item label="Selecione um gênero" value="" />
          {genres.map((genre, index) => (
            <Picker.Item key={index} label={genre} value={genre} />
          ))}
        </Picker>
      </View>
      <ScrollView>
        {books.map((book) => (
          <CardBook book={book} key={book.ISBN} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "bold",
  },
});
