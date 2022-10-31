import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { List } from "react-virtualized";
import Test from "./Test";
const Main = () => {
  const assetTransactions = useSelector(
    (state) => state.transferAssetReducer.assetTransactions
  );
  useEffect(() => {
    console.log(assetTransactions.length);
  }, [assetTransactions]);

  let [listItem, setListItem] = useState();

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      setListItem((listItem = assetTransactions[index]));
      if (listItem) {
        return (
          <Test
            listItem={listItem}
            key={key}
            style={style}
            assetTransactions={assetTransactions}
          />
        );
      }
    },
    [assetTransactions, listItem]
  );
  return (
    <List
      className="Main"
      width={1622}
      height={1500}
      rowCount={assetTransactions.length}
      rowHeight={64}
      rowRenderer={rowRenderer}
      list={assetTransactions}
      style={{ outline: "none" }}
    />
  );
};

export default React.memo(Main);
