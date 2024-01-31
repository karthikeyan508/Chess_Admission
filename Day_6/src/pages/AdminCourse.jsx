import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import SideBar from '../pages/Sidebar';
import '../assets/css/AdminCourse.css'; // Import CSS file

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Placeholder data for academy courses
    const academyCourses = [
      {
        id: 1,
        title: 'Chess Fundamentals',
        description: 'Learn the basics of chess from scratch.',
        level: 'Beginner',
        instructor: 'GM Magnus Carlsen',
        image: 'https://kingchessacademy.com/wp-content/uploads/2021/03/banner.jpg',
      },
      {
        id: 2,
        title: 'Chess Fundamentals',
        description: 'Learn the basics of chess from scratch.',
        level: 'Beginner',
        instructor: 'GM Magnus Carlsen',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMPHrbvAW5OU0tUd5uxLUtzF7uZPk0D-WvOrByu=w1080-h608-p-no-v0',
      },
      {
        id: 3,
        title: 'Chess Fundamentals',
        description: 'Learn the basics of chess from scratch.',
        level: 'Beginner',
        instructor: 'GM Magnus Carlsen',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQ43le7YCn7d8ga5pYvOIjIHmRG4-qVCNoUPqCQYiKBFqDsLyDkCur15hbRUkcwfY-hw&usqp=CAU',
      },
      // ... (add other course objects)
    ];

    setCourses(academyCourses);
  }, []);

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedCourse(null);
  };

  const handleUpdate = () => {
    // Perform update logic (simulated)
    handleEditDialogClose();
  };

  const handleDelete = (course) => {
    // Perform delete logic (simulated)
    setCourses(courses.filter((c) => c.id !== course.id));
    handleEditDialogClose();
  };

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
                <Button
                  className="edit-button"
                  onClick={() => handleEditClick(course)}
                >
                  Edit
                </Button>
                <Button
                  className="delete-button"
                  onClick={() => handleDelete(course)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit {selectedCourse ? selectedCourse.title : ''}</DialogTitle>
        <DialogContent>
          {/* Add fields for editing other course details if needed */}
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CoursesPage;