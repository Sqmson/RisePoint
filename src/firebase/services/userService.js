import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection,
  query,
  where,
  getDocs 
} from 'firebase/firestore';
import { db } from '../config';

export const userService = {
  // Create new user document
  async createUser(userId, userData) {
    try {
      await setDoc(doc(db, 'users', userId), {
        username: userData.username,
        email: userData.email,
        personalInfo: {
          fullName: userData.personalInfo.fullName,
          phone: userData.personalInfo.phone,
          location: userData.personalInfo.location,
          gender: userData.personalInfo.gender,
          age: userData.personalInfo.age,
          primaryLanguage: userData.personalInfo.primaryLanguage,
          profileImage: userData.personalInfo.profileImage
        },
        interests: {
          programs: userData.interests.programs || [],
          volunteerInterest: userData.interests.volunteerInterest || false,
          supportNeeded: userData.interests.supportNeeded || [],
          skills: userData.interests.skills || []
        },
        socioeconomic: {
          currentIncome: userData.socioeconomic.currentIncome,
          householdSize: userData.socioeconomic.householdSize,
          employment: userData.socioeconomic.employment,
          education: userData.socioeconomic.education,
          challenges: userData.socioeconomic.challenges || []
        },
        programProgress: [],
        goals: [],
        support: {
          mentorId: null,
          assignedCaregiverId: null,
          emergencyContact: null
        },
        role: 'beneficiary',
        status: 'active',
        createdAt: new Date(),
        lastLogin: new Date()
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Get user by ID
  async getUserById(userId) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        return { id: userDoc.id, ...userDoc.data() };
      }
      return null;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },

  // Update user profile
  async updateUser(userId, updateData) {
    try {
      await updateDoc(doc(db, 'users', userId), updateData);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  // Get users by role
  async getUsersByRole(role) {
    try {
      const q = query(collection(db, 'users'), where('role', '==', role));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting users by role:', error);
      throw error;
    }
  },

  // Update program progress
  async updateProgramProgress(userId, programProgress) {
    try {
      await updateDoc(doc(db, 'users', userId), {
        programProgress: programProgress
      });
    } catch (error) {
      console.error('Error updating program progress:', error);
      throw error;
    }
  },

  // Add user goal
  async addUserGoal(userId, goal) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      const currentGoals = userDoc.data().goals || [];
      await updateDoc(doc(db, 'users', userId), {
        goals: [...currentGoals, { ...goal, createdAt: new Date() }]
      });
    } catch (error) {
      console.error('Error adding goal:', error);
      throw error;
    }
  }
}; 