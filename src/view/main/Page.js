import React from 'react';
import Header from 'view/main/Header';
import Content from 'view/main/Content';
import Footer from 'view/main/Footer';
import LessonsScreen from 'view/lessons/LessonListScreen';
import 'view/main/Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LessonPage from 'view/lessons/LessonScreen';

const Page = () => {
  return (
    <>
      <Header className='header' />
      <Content className='main'>
        <Router>
          <Route path='/' exact>
            <LessonsScreen className='lessonsScreen'></LessonsScreen>
          </Route>
          <Route path='/Lesson' exact>
            <LessonPage></LessonPage>
          </Route>
        </Router>
      </Content>
      <Footer className='footer' />
    </>
  );
};

export { Page as default };
