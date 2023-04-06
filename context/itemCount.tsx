import React, { useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
  itemSet: (value: number) => void;
};

const ItemCountContext = React.createContext<ContextProps>({
  itemCount: 0,
  setItemCount: () => {},
  itemSet: () => {},
});

export const ItemCountProvider: React.FC<Props> = ({ children }) => {
  const [itemCount, setItemCount] = useState<number>(0);

  const handleItemSet = (value: number) => {
    setItemCount(value);
  };

  const value = { itemCount, setItemCount, itemSet: handleItemSet };
  return (
    <ItemCountContext.Provider value={value}>
      {children}
    </ItemCountContext.Provider>
  );
};

export const ItemCountValue = () => useContext(ItemCountContext);
