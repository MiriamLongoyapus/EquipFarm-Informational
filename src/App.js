import './App.css';
import Layout from './components/Layout';
import Landingpage from './components/Landingpage'
import Teams from './components/teams';
import ServicesSection from './components/Services-Client';
function App() {
  return (
    <div>
      <Layout>
      <Landingpage/>
      <ServicesSection/>
      <Teams/>
      </Layout>
    </div>
  );
}
export default App;


