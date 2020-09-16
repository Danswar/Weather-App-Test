import styled from "styled-components";

const SummaryWeekContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & > :not(:last-child) {
    margin-right: 20px;
    border-right: 1px solid ${({ theme }) => theme.palette.divider};
  }
`;

const DayWeatherContnainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem 1.5rem;
`;

const DayIcon = styled.img`
  width: 65px;
`;

const DayName = styled.p``;

export { SummaryWeekContainer, DayWeatherContnainer, DayIcon, DayName };
