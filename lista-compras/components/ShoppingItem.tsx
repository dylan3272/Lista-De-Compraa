import { memo } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  id: string;
  name: string;
  done: boolean;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

function ShoppingItem({
  id,
  name,
  done,
  onToggle,
  onRemove,
}: Props) {
  return (
    <Pressable
      onPress={() => onToggle(id)}
      onLongPress={() => onRemove(id)}
      style={styles.row}
    >
      <Text style={[styles.rowText, done && styles.done]}>
        {name}
      </Text>

      <Text
        style={[
          styles.pill,
          done ? styles.pillDone : styles.pillTodo,
        ]}
      >
        {done ? "✔" : "•"}
      </Text>
    </Pressable>
  );
}

export default memo(ShoppingItem);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowText: {
    fontSize: 16,
  },
  done: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
  },
  pillTodo: {
    backgroundColor: "#eee",
    color: "#666",
  },
  pillDone: {
    backgroundColor: "#2ecc71",
    color: "#fff",
  },
});