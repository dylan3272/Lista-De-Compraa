import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import useItem from "@/hooks/useItem";
import Producto from "@/components/Producto";

export default function App() {
  const {
    items,
    toggleItem,
    addItem,
    removeItem,
    setText,
    text,
  } = useItem();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        🛒 Lista de Compras
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Agregar producto"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={addItem}
        />

        <Pressable
          style={styles.addBtn}
          onPress={addItem}
        >
          <Text style={styles.addTxt}>
            Agregar
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Producto
            {...item}
            onToggle={toggleItem}
            onRemove={removeItem}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Sin productos. ¡Agregá el primero! 😊
          </Text>
        }
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 12,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  addBtn: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addTxt: {
    color: "#fff",
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
  },
  empty: {
    textAlign: "center",
    marginTop: 24,
    color: "#777",
  },
});