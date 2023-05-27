import styled from "@emotion/styled";

const HistoryConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  height: 500px;

  padding: 20px;

  border: 1px solid blue;
  border-radius: 8px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    color: transparent;
  }
`;

export { HistoryConteiner };
