import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Test from "./Test";
const Main = () => {
  const assetTransactions = useSelector(
    (state) => state.transferAssetReducer.assetTransactions,
  )
  useEffect(() => {
    console.log(assetTransactions)
  }, [assetTransactions])
  
  let [listItem,setListItem] = useState();
  
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      setListItem(listItem=assetTransactions[index])
      if(listItem){
        return (
          <Test listItem={listItem} key={key} style={style} assetTransactions={assetTransactions}/>
        );
      }
    },
    [assetTransactions,listItem]
  );
  return (
      <div/>
  );
};

export default React.memo(Main);
