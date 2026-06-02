import { Item } from "@/constants/items";
import { useCallback, useState } from "react";

export default function useItem(){

const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState("");

  const addItem = useCallback(() => {
    const name = text.trim();

    if (!name) return;

    const newItem: Item = {
      id: Date.now().toString(),
      name,
      done: false,
    };

    setItems((prev) => [...prev, newItem]);
    setText("");
  }, [text]);

  const toggleItem = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }, []);

  return{
    items,toggleItem,addItem,removeItem,setText,text
  }

}