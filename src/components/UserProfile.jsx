import React, { useState, useEffect } from 'react';
import { auth, db } from '../Firebase'; // Assuming you've configured Firebase
import { updateProfile } from 'firebase/auth'; 
import { doc, setDoc } from 'firebase/firestore';

const ProfilePage = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.displayName || '');
  const [email, setEmail] = useState(user.email || '');
  const [bio, setBio] = useState(''); // Optional field
  const [location, setLocation] = useState(''); // Optional field
  const [phone, setPhone] = useState(''); // Optional field

  useEffect(() => {
    if (user) {
      // Set initial values if user data is available
      setName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleSaveChanges = async () => {
    try {
      // Update name and other details in Firebase Auth
      if (name !== user.displayName) {
        await updateProfile(user, { displayName: name });
      }

      // Update user info in Firestore (you can add more fields as needed)
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        bio,
        location,
        phone,
      }, { merge: true });

      setIsEditing(false); // Disable editing mode after saving
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col items-center p-6">
          <img
            src={user.photoURL || '/path-to-default-avatar.jpg'}
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-600"
          />
          <h1 className="text-3xl font-semibold text-white mt-4">{user.displayName}</h1>
          <p className="text-lg text-gray-400 mt-1">{user.email}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6 bg-gray-800 rounded-b-lg">
          <h2 className="text-2xl text-white font-semibold">Profile Details</h2>
          <div className="space-y-6 mt-4">
            <div>
              <label htmlFor="name" className="text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-2 p-3 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                value={name}
                disabled={!isEditing}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-2 p-3 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                value={email}
                disabled
              />
            </div>

            <div>
              <label htmlFor="bio" className="text-gray-300">Bio (Optional)</label>
              <textarea
                id="bio"
                className="mt-2 p-3 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                rows="3"
                value={bio}
                disabled={!isEditing}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="location" className="text-gray-300">Location (Optional)</label>
              <input
                type="text"
                id="location"
                className="mt-2 p-3 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                value={location}
                disabled={!isEditing}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-gray-300">Phone (Optional)</label>
              <input
                type="text"
                id="phone"
                className="mt-2 p-3 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                value={phone}
                disabled={!isEditing}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            {isEditing ? (
              <button
                onClick={handleSaveChanges}
                className="bg-[#FFD700] text-black text-lg font-semibold rounded-xl px-6 py-2 hover:bg-[#FFB400] transition duration-300"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] text-lg font-semibold rounded-xl px-6 py-2 hover:bg-[#333333] hover:border-[#FFB400] transition duration-300"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
