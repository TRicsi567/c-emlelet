import React from 'react';
import './theme/_index.scss';
import Header from 'view/template/Header';
import Content from 'view/template/Content';
import Footer from 'view/template/Footer';
import LessonsScreen from 'view/lessons/LessonListScreen';
import 'view/template/Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LessonScreen from 'view/lessons/LessonScreen';

function App() {
  return (
    <>
      <Header className='header' />
      <Content className='main'>
        <Router>
          <Route path='/' component={LessonsScreen} />
          <Route path='/lesson/:id' exact component={LessonScreen} />
        </Router>
      </Content>
      <Footer className='footer' />
    </>
  );
}

export default App;
