import React from 'react';
import LessonPreviewCard from 'view/lessons/LessonPreviewCard';
import 'view/lessons/lessonListScreen.scss';

const LessonListScreen = () => {
  return (
    <>
      <h3>Lessons</h3>
      <ul>
        <li>
          <LessonPreviewCard></LessonPreviewCard>
        </li>
        <li>
          <LessonPreviewCard></LessonPreviewCard>
        </li>
        <li>
          <LessonPreviewCard></LessonPreviewCard>
        </li>
        <li>
          <LessonPreviewCard></LessonPreviewCard>
        </li>
        <li>
          <LessonPreviewCard></LessonPreviewCard>
        </li>
        <li>
          <LessonPreviewCard></LessonPreviewCard>
        </li>
      </ul>
    </>
  );
};

export { LessonListScreen as default };
