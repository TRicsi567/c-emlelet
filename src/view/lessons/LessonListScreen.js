import React, { useState } from 'react';
import LessonPreviewCard from 'view/lessons/LessonPreviewCard';
import 'view/lessons/lessonListScreen.scss';

const LessonListScreen = () => {
  const lessons = useState(getLessons())[0].lessons; // kurvára nem vágom miért de valamiért a setState azon felül h visszatér azzal amivel amivel kéne hozzábasz egy functiont is és egy tömbbe rakja őket, ezért van ott a [0]. az az adat ami kell, a [1] meg vmi kutyafaszom függvény
  console.log(lessons);

  function getLessons() {
    return require('view/lessons/lessons.json');
  }

  return (
    <>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <LessonPreviewCard lesson={lesson} />
          </li>
        ))}
      </ul>
    </>
  );
};

export { LessonListScreen as default };
