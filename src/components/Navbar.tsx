import React from 'react';
import { GraduationCap, Settings } from 'lucide-react';

interface NavbarProps {
  userType: 'student' | 'tutor';
  userName: string;
}

function Navbar({ userType, userName }: NavbarProps) {
  return (
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

          {/* User Info and Settings */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="font-semibold text-gray-800">{userName}</p>
                <p className="text-sm text-gray-600 capitalize">{userType}</p>
              </div>
              <div className="w-10 h-10 bg-[#93C572] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {userName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-yellow-300 hover:border-yellow-400">
              <Settings className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700 font-medium">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;