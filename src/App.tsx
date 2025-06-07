import React, { useState } from 'react';
import { GraduationCap, BookOpen, Settings, User, LogIn } from 'lucide-react';
import StudentHomepage from './components/StudentHomepage';
import TutorHomepage from './components/TutorHomepage';

function App() {
  const [currentView, setCurrentView] = useState<'login' | 'student' | 'tutor'>('login');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  if (currentView === 'student') {
    return <StudentHomepage />;
  }

  if (currentView === 'tutor') {
    return <TutorHomepage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-[#FFFF8F] shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#93C572] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                STUDENTS<span className="text-[#93C572]">FAV</span>
              </span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-yellow-300 hover:border-yellow-400">
                <LogIn className="w-4 h-4 text-gray-700" />
                <span className="text-gray-700 font-medium">Login/Signup</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-yellow-300 hover:border-yellow-400">
                <Settings className="w-4 h-4 text-gray-700" />
                <span className="text-gray-700 font-medium">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-[#93C572]">STUDENTSFAV</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your role to access your personalized dashboard and connect with our learning community
            </p>
          </div>

          {/* Login Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Student Login Card */}
            <div
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredCard === 'student' ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard('student')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setCurrentView('student')}
            >
              <div className="bg-gradient-to-br from-[#FFFF8F] to-[#FFFF8F]/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 hover:border-yellow-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <GraduationCap className="w-10 h-10 text-[#93C572]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Login as Student</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Access your courses, assignments, grades, and connect with tutors to enhance your learning journey
                  </p>
                  <button className="w-full bg-[#93C572] hover:bg-[#7AB359] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                    Continue as Student
                  </button>
                </div>
              </div>
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFFF8F] to-[#93C572] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Tutor Login Card */}
            <div
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredCard === 'tutor' ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard('tutor')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setCurrentView('tutor')}
            >
              <div className="bg-gradient-to-br from-[#93C572] to-[#93C572]/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-300 hover:border-green-400">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <BookOpen className="w-10 h-10 text-[#93C572]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Login as Tutor</h2>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Manage your classes, track student progress, create assignments, and build meaningful connections
                  </p>
                  <button className="w-full bg-white hover:bg-gray-50 text-[#93C572] font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                    Continue as Tutor
                  </button>
                </div>
              </div>
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#93C572] to-[#FFFF8F] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Don't have an account? 
              <button className="text-[#93C572] hover:text-[#7AB359] font-medium ml-1 underline">
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 STUDENTSFAV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;