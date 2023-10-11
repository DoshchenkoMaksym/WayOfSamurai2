
import './App.css';
import { Header } from './components/Header/Header';
import { NavbarContainer } from './components/Navbar/NavbarContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { DialogsContainer } from './components/Dialogs/DialogContainer';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsersContainer } from './components/Users/UsersContainer';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/" element={<DialogsContainer
              />} />
            <Route path="/profile/*" element={<ProfileContainer
              />} />
            
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;
