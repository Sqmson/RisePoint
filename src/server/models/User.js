const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  personalInfo: {
    fullName: String,
    phone: String,
    location: String,
    gender: String,
    age: Number,
    primaryLanguage: String,
    profileImage: String
  },
  interests: {
    programs: [String],
    volunteerInterest: Boolean,
    supportNeeded: [String],
    skills: [String]
  },
  socioeconomic: {
    currentIncome: String,
    householdSize: Number,
    employment: String,
    education: String,
    challenges: [String]
  },
  programProgress: [{
    programId: {
      type: Schema.Types.ObjectId,
      ref: 'Program'
    },
    status: String,
    completion: Number,
    startDate: Date,
    achievements: [String],
    nextMilestone: String
  }],
  goals: [{
    title: String,
    target: String,
    current: String,
    deadline: Date,
    completed: Boolean
  }],
  support: {
    mentorId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    assignedCaregiverId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    emergencyContact: {
      name: String,
      relationship: String,
      phone: String
    }
  },
  role: {
    type: String,
    enum: ['beneficiary', 'caregiver', 'mentor', 'admin'],
    default: 'beneficiary'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: Date
}, {
  timestamps: true
});

// Add indexes
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ 'personalInfo.location': '2dsphere' });

module.exports = mongoose.model('User', userSchema); 