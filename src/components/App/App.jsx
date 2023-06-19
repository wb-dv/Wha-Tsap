import Container from '../Container/Container';
import Layout from '../Layout/Layout';

import RegistrationForm from '../RegistrationForm/RegistrationForm';
import WhaTsap from '../WhaTsap/WhaTsap';

import { useInstanceInfo } from '../../hooks/useInstanceInfo';

import './App.css';

function App() {
  const { idInstance, apiTokenInstance } = useInstanceInfo();
  const instanceHasBeenSaved = idInstance && apiTokenInstance;

  return (
    <Layout>
      <Container>{instanceHasBeenSaved ? <WhaTsap /> : <RegistrationForm />}</Container>
    </Layout>
  );
}

export default App;

