import styled from "@emotion/styled";

const HistoryConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 500px;
  width: 800px;

  padding: 20px;

  border: 1px solid blue;
  border-radius: 8px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    color: transparent;
  }
`;

export { HistoryConteiner };
