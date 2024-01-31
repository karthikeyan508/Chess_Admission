// Inside the CoursesPage.jsx file
import React, { useState, useEffect } from 'react';
import '../assets/css/CoursesPage.css'; // Import your CSS file

import SideBar from '../pages/Sidebar';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../assets/css/CoursesPage.css'; // Import CSS file

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Placeholder data for academy courses
    const academyCourses = [
      {
        id: 1,
        title: 'Chess Fundamentals',
        description: 'Learn the basics of chess from scratch.',
        level: 'Beginner',
        instructor: 'GM Magnus Carlsen',
        image: 'https://www.friscobadminton.com/assets/images/chessclass2.jpg',
      },
      {
        id: 2,
        title: 'Advanced Tactics',
        description: 'Master advanced chess tactics and strategies.',
        level: 'Intermediate',
        instructor: 'GM Vishy Anand',
        image: 'https://krisshchessacademy.com/img/slider/slide1.jpg',
      },
      {
        id: 3,
        title: 'Endgame Mastery',
        description: 'Improve your endgame skills and techniques.',
        level: 'Advanced',
        instructor: 'GM Garry Kasparov',
        image:'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/254238921/original/1bdba02b879c4dda08c73530d13b08df650596b0/be-your-chess-coach-and-give-you-quality-chess-lessons.jpg'
      },
      {
        id: 4,
        title: 'Opening Strategies',
        description: 'Explore various chess openings and understand the principles behind them',
        level: 'Intermediate',
        instructor: 'IM Judit Polgar',
        image:'https://miro.medium.com/v2/resize:fit:1400/1*Ts3sBgx8itXKBfaDKlGYOQ.jpeg'
      },
    ];

    setCourses(academyCourses);
  }, []);

  return (
    <div>
      <SideBar />
      <div className="courses-container">
        <h1>Chess Academy Courses</h1>
        <div className="course-list">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-details">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p>Level: {course.level}</p>
                <p>Instructor: {course.instructor}</p>
                <Link to='/userDetails'>
                  <Button className="register-button">Register</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
