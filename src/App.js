import React from 'react';
import './theme/_index.scss';
import Header from 'view/template/Header';
import Content from 'view/template/Content';
import Footer from 'view/template/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from 'view/auth/Register';
import Login from 'view/auth/Login';
import LessonsScreen from 'view/Lessons';
import LessonScreen from 'view/Lesson';
import AppProvider from 'state/App';

function App() {
  return (
    <AppProvider>
      <Header className='header' />
      <Content className='main'>
        <Router>
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/' exact component={LessonsScreen} />
            <Route path='/:id' exact component={LessonScreen} />
          </Switch>
        </Router>
      </Content>
      <Footer className='footer' />
    </AppProvider>
  );
}

export default App;
