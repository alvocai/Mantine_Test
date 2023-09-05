// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Title, Text } from '@mantine/core';
import SaturnLogo from '../components/Logo/saturn-logo';

export default function HomePage() {
  return (
    <>
      <Title align="center">
        <SaturnLogo wid={200} /> 
        <br />
        <Text component="span">
          Smartes Arztportal für Betroffene mit unklarer Erkrankung
        </Text>
      </Title>
      
      {/*<Welcome />*/}
      {/*<ColorSchemeToggle />*/}
    </>
  );
}
