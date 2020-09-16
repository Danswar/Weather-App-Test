import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 0.4rem 0;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const AppTitle = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.titleApp.main};
`;

const LocationContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  color: ${({ theme }) => theme.palette.titleApp.main};
`;

export { HeaderContainer, LogoContainer, Logo, AppTitle, LocationContainer };
