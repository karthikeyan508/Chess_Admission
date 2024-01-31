import '../assets/css/AdminPage.css'; // Import your CSS file
import React from 'react';

function AdminPage() {
  return (
    <div className="admin-container">
      <h1>Welcome, Admin..!</h1>
      <p>
        Manage and oversee the operations of Chess Academy with the admin tools.
      </p>

      <div className="admin-options">
        <div className="option-card">
        <img
            src="https://img.freepik.com/free-photo/gold-chess-chess-board-game-business-metaphor-leadership-concept_1150-19585.jpg"
            alt="About Chess Academy 1"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
          />
          <h3>User Management</h3>
          <p>Manage user accounts and access permissions.</p>
        </div>

        <div className="option-card">
        <img
            src="https://derikschessschool.com/assets/img/dcs.png"
            alt="About Chess Academy 1"
            style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '20px',height:'95px' }}
          />
          <h3>Course Management</h3>
          <p>Add, edit, or remove courses from the academy.</p>
        </div>

        <div className="option-card">
        <img
            src="https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_640.jpg"
            alt="About Chess Academy 1"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
          />
          <h3>Analytics</h3>
          <p>View analytics and insights about user activity.</p>
        </div>
        <div className="option-card">
        <img
            src="https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_640.jpg"
            alt="About Chess Academy 1"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
          />
          <h3>Analytics</h3>
          <p>View analytics and insights about user activity.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
