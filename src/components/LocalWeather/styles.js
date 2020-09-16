import styled from "styled-components";

const LocalWeatherContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.palette.common.black};
`;

const ImageWidget = styled.img`
  width: 6rem;
`;

const WeatherWidgetContainer = styled.div``;

const Temperature = styled.div`
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
`;

const Title = styled.h1``;

const WeatherState = styled.h2`
  text-align: center;
`;

export {
  LocationContainer,
  LocalWeatherContainer,
  WeatherWidgetContainer,
  ImageWidget,
  Temperature,
  Title,
  WeatherState,
};
