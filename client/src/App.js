import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, Muscles, AllExercises, ErrorPage, RandomExercise, Favorites } from './pages'
import Layout from './components/Layout.js'

function App() {
  const isLoggedIn = localStorage.getItem('user');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/muscles" element={<Muscles />} />
          <Route path="/exercises" element={<AllExercises />} />
          <Route path="/random-exercise" element={<RandomExercise />} />
          {isLoggedIn && (<Route path="/favorites" element={<Favorites/>} />)}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
