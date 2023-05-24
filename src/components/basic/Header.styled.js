import styled from "@emotion/styled";

const HeaderConteiner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 20px;

  font-size: 20px;
  font-weight: 500;
  color: white;

  background-color: #0074b7;
`;

const NavigationComponent = styled.nav`
  display: flex;

  gap: 15px;

  margin-right: auto;
  margin-left: 200px;
`;

const LogoConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  color: #000;
`;

export { HeaderConteiner, NavigationComponent, LogoConteiner };
