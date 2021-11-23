import Status from './components/Status';
import { Heading } from './components/Heading';
import { OsCar } from './components/Oscar';
import { Greet } from './components/Greet';

const App = () => {
  return (
    <>
      <Status status="error" />
      <Heading>Hello world</Heading>
      <OsCar>
        <Heading>My name is Phon</Heading>
      </OsCar>
      <Greet name="Phon" messageCount={10} isLoggin={true} />
    </>
  );
};

export default App;
