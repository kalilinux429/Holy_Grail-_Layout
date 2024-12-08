
import './App.css';
import Data from './Data'

function App() {
  return(
    <>
    <header>Header</header>
      <div className="middle">
        <nav>Navigation</nav>
        <main>Main
          <Data/>
        </main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>

    </>
  )
};
    
    

export default App;
