import logo from './logo.svg';
import './App.css';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section6 from './Components/Section6/Section6';
import Section5 from './Components/Section5/Section5';
import Section7 from './Components/Section7/Section7';
import Navbar from './Components/Navbar/Navbar';
import Twitter from './Components/Twitter/Twitter';
import Menu from './Components/Menu/Menu';
import Tag from './Components/Tag/Tag';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Twitter/>
      <Menu/>
      <Tag value="IANS Live"/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Tag value="IANS News Point"/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Tag value="IANS News Point"/>
    </div>
  );
}

export default App;
