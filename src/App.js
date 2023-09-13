import './App.css';
import Layout from './components/Layout';
import Landingpage from './components/Landingpage'
import Teams from './components/teams';
function App() {
  return (
    <div>
      <Layout>
      <Landingpage/>
      <Teams/>
      </Layout>
    </div>
  );
}
export default App;
