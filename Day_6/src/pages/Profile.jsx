import React, { useState } from 'react';

function Profile() {
  const [profileData, setProfileData] = useState({
    image: '',
    name: 'karthikeyan',
    age: '21',
    academy: 'chess Master',
    bio: 'Player',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can add logic to handle the image file, such as displaying a preview
    console.log('Image File:', file);
  };

  return (
    <div>
      <h1>Profile Details</h1>

      <label htmlFor="image">Profile Image:</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={profileData.name}
        onChange={handleChange}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={profileData.age}
        onChange={handleChange}
      />

      <label htmlFor="academy">Academy:</label>
      <input
        type="text"
        id="academy"
        name="academy"
        value={profileData.academy}
        onChange={handleChange}
      />

      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        name="bio"
        value={profileData.bio}
        onChange={handleChange}
        rows={3} // Adjust the number of rows based on your preference
        cols={30} // Adjust the number of columns based on your preference
      ></textarea>

      {/* Add a button to save or update the profile */}
      <button onClick={() => console.log('Save Profile', profileData)}>
        Save Profile
      </button>
    </div>
  );
}

export default Profile;
