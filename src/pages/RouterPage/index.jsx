import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router';
import Home from '../../components/RouterPageComponents/Home';
import Components from '../../components/RouterPageComponents/Components';
import About from '../../components/RouterPageComponents/About';
import LoginForm from '../../components/LoginForm';
import Counter from '../../components/Counter';
import NotFound from '../../components/RouterPageComponents/NotFound';
import BasePage from './BasePage';

function RouterPage () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='/components' element={<Components />}>
            <Route path='loginForm' element={<LoginForm />} />
            <Route path='counter' element={<Counter />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterPage;
