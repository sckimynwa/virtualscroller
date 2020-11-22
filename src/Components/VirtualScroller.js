import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useScroll from "../Hooks/useScroll";
import Item from "./Item";
import { fetchItem } from "../API/api";

const VirtualScroller = () => {
  const [scrollTop, ref] = useScroll();
  const [page, setPage] = useState(0);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = useCallback(async () => {
    const data = await fetchItem(page);
    setItemList(data);
  }, [page]);

  // scroll variables
  const itemHeight = 30;
  const scrollContainerHeight = itemHeight;

  return (
    <ScrollViewport ref={ref}>
      <ScrollContainer height={scrollContainerHeight}>
        <VisibleNodesWrapper>
          {itemList.map((item, index) => (
            <Item key={item.idx} index={item.idx} height={itemHeight} />
          ))}
        </VisibleNodesWrapper>
      </ScrollContainer>
    </ScrollViewport>
  );
};

/* 
  Styled-components
*/

const ScrollViewport = styled.div`
  height: 600px;
  width: 300px;
  border: 1px solid black;
  margin: auto;
`;

const ScrollContainer = styled.div`
  height: ${(props) => props.height};
  overflow-y: auto;
`;

const VisibleNodesWrapper = styled.div``;

export default VirtualScroller;
