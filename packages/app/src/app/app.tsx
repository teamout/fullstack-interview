import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Flight } from '@fullstack-itw/models';

const StyledApp = styled.div`
  // Your style here
`;

const flight: Flight = {
  id: 'unknownId',
  model: 'Airbus A380',
  numberOfPassengers: 525,
};

const FlightCard: React.FC<{ flight: Flight }> = ({ flight }) => (
  <div>
    <div>
      <span>Id: </span>
      <span>{flight.id}</span>
    </div>
    <div>
      <span>Model: </span>
      <span>{flight.model}</span>
    </div>
    <div>
      <span>Number of passengers: </span>
      <span>{flight.numberOfPassengers}</span>
    </div>
  </div>
);

export function App() {
  return (
    <StyledApp>
      <FlightCard flight={flight} />
      <NxWelcome title="app" />
    </StyledApp>
  );
}

export default App;
