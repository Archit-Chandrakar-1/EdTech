import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  ClipboardList, 
  Presentation, 
  GraduationCap, 
  MessageSquare, 
  Brain,
  Home
} from 'lucide-react';
import Navbar from './Navbar';

type SidebarOption = 
  | 'dashboard' 
  | 'study-material' 
  | 'test-series' 
  | 'assignments' 
  | 'presentation' 
  | 'course-model' 
  | 'discussion-board' 
  | 'mindmaps';

function TutorHomepage() {
  const [selectedOption, setSelectedOption] = useState<SidebarOption>('dashboard');

  const sidebarOptions = [
    { id: 'dashboard' as SidebarOption, label: 'Dashboard', icon: Home },
    { id: 'study-material' as SidebarOption, label: 'Study Material', icon: BookOpen },
    { id: 'test-series' as SidebarOption, label: 'Test Series', icon: FileText },
    { id: 'assignments' as SidebarOption, label: 'Assignments', icon: ClipboardList },
    { id: 'presentation' as SidebarOption, label: 'Presentation', icon: Presentation },
    { id: 'course-model' as SidebarOption, label: 'Course Model', icon: GraduationCap },
    { id: 'discussion-board' as SidebarOption, label: 'Discussion Board', icon: MessageSquare },
    { id: 'mindmaps' as SidebarOption, label: 'Mindmaps', icon: Brain }
  ];

  const renderContent = () => {
    switch (selectedOption) {
      case 'dashboard':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to your <span className="text-[#93C572]">Tutor Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Manage your classes, track student progress, and create engaging content
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#FFFF8F] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">My Classes</h3>
                <p className="text-gray-600">Manage your active courses and students</p>
                <div className="mt-4 text-2xl font-bold text-[#93C572]">12</div>
                <p className="text-sm text-gray-500">Active Courses</p>
              </div>
              
              <div className="bg-[#FFFF8F] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Students</h3>
                <p className="text-gray-600">Track how your students are performing</p>
                <div className="mt-4 text-2xl font-bold text-[#93C572]">248</div>
                <p className="text-sm text-gray-500">Enrolled Students</p>
              </div>
              
              <div className="bg-[#FFFF8F] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Reviews</h3>
                <p className="text-gray-600">Assignments waiting for your review</p>
                <div className="mt-4 text-2xl font-bold text-[#93C572]">15</div>
                <p className="text-sm text-gray-500">Need Attention</p>
              </div>
            </div>
          </div>
        );
      case 'study-material':
        return (
          <div className="text-center py-20">
            <BookOpen className="w-24 h-24 text-[#93C572] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">This is your Study Material</h2>
            <p className="text-lg text-gray-600">Upload, organize, and manage all your course materials here.</p>
          </div>
        );
      case 'test-series':
        return (
          <div className="text-center py-20">
            <FileText className="w-24 h-24 text-[#93C572] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">This is your Test Series</h2>
            <p className="text-lg text-gray-600">Create and manage tests, quizzes, and examinations for your students.</p>
          </div>
        );
      case 'assignments':
        return (
          <div className="text-center py-20">
            <ClipboardList className="w-24 h-24 text-[#93C572] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">This is your Assignments</h2>
            <p className="text-lg text-gray-600">Create, distribute, and grade assignments for your courses.</p>
          </div>
        );
      case 'presentation':
        return (
          <div className="text-center py-20">
            <Presentation className="w-24 h-24 text-[#93C572] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">This is your Presentation</h2>
            <p className="text-lg text-gray-600">Create and manage interactive presentations for your classes.</p>
          </div>
        );
      case 'course-model':
        return (
          <div className="text-center py-20">
            <GraduationCap className="w-24 h-24 text-[#93C572] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">This is your Course Model</h2>
            <p className="text-lg text-gray-600">Design and structure your course curriculum and learning paths.</p>
          </div>
        );
      case 'discussion-board':
        return (
          <div className="text-center py-20">
            <MessageSquare className="w-24 h-24 text-[#93C572] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">This is your Discussion Board</h2>
            <p className="text-lg text-gray-600">Facilitate discussions and Q&A sessions with your students.</p>
          </div>
        );
      case 'mindmaps':
        return (
          <div className="text-center py-20">
            <Brain className="w-24 h-24 text-[#93C572] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">This is your Mindmaps</h2>
            <p className="text-lg text-gray-600">Create visual learning aids and concept maps for better understanding.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFAA0]">
      {/* Navbar */}
      <Navbar userType="tutor" userName="John Smith" />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-[#93C572] shadow-lg overflow-y-auto">
          <div className="p-4">
            <h2 className="text-white text-lg font-semibold mb-6">Tutor Panel</h2>
            <nav className="space-y-2">
              {sidebarOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      selectedOption === option.id
                        ? 'bg-white text-[#93C572] shadow-md'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{option.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorHomepage;