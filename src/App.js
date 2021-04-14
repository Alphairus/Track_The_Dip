import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <div className="app_header">
        <Header />
      </div>
      < div className="app_body">
        <div className="app_container">
          <Newsfeed />
          {/* stats */}
          <Stats />
        </div>
      </div>
      {/* Body */}
    </div>
  );
}

export default App;
