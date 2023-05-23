import styled from "@emotion/styled";

const ShopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
  padding: 20px;
  border: 1px solid blue;
  border-radius: 8px;

  ::-webkit-scrollbar {
    color: transparent;
  }
`;

export { ShopContent };
