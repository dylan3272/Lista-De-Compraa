import ShoppingItem from "./ShoppingItem";

type Props = {
  id: string;
  name: string;
  done: boolean;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function Producto(props: Props) {
  return <ShoppingItem {...props} />;
}