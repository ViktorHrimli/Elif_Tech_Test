import styled from "@emotion/styled";

const HeaderConteiner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 20px 20px 20px 200px;

  font-size: 20px;
  font-weight: 500;
  color: white;

  background-color: #0074b7;
`;

const Navigation = styled.nav`
  display: flex;

  gap: 15px;

  margin-right: auto;
`;

export { HeaderConteiner, Navigation };
