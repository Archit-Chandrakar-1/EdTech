import React, { useState } from 'react';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  Grid3X3, 
  Settings, 
  Bell, 
  User,
  Star,
  Trophy,
  ChevronRight,
  Laptop,
  Briefcase,
  Play,
  Package,
  ChevronDown
} from 'lucide-react';
import Navbar from './Navbar';

interface Course {
  id: string;
  title: string;
  category: string;
  rating: number;
  students: number;
  color: string;
  icon: React.ReactNode;
  instructors: string[];
}

interface MyCourse {
  id: string;
  title: string;
  category: string;
  rating: number;
  students: number;
  color: string;
  icon: React.ReactNode;
  instructors: string[];
}

function StudentHomepage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activityYear, setActivityYear] = useState('Year');

  const categories = [
    { name: 'All', icon: Grid3X3 },
    { name: 'IT & Software', icon: Laptop },
    { name: 'Media Training', icon: Play },
    { name: 'Business', icon: Briefcase },
    { name: 'Interior', icon: Package }
  ];

  const popularCourses: Course[] = [
    {
      id: '1',
      title: 'CCNA 2020 200-125 Video Boot Camp',
      category: 'IT & Software',
      rating: 4.8,
      students: 9530,
      color: 'bg-pink-200',
      icon: <Laptop className="w-5 h-5" />,
      instructors: ['instructor1', 'instructor2']
    },
    {
      id: '2',
      title: 'Powerful Business Writing: How to Write Concisely',
      category: 'Business',
      rating: 4.9,
      students: 1463,
      color: 'bg-orange-200',
      icon: <Briefcase className="w-5 h-5" />,
      instructors: ['instructor3', 'instructor4']
    },
    {
      id: '3',
      title: 'Certified Six Sigma Yellow Belt Training',
      category: 'Media Training',
      rating: 4.9,
      students: 6726,
      color: 'bg-purple-200',
      icon: <Play className="w-5 h-5" />,
      instructors: ['instructor5', 'instructor6']
    },
    {
      id: '4',
      title: 'How to Design a Room in 10 Easy Steps',
      category: 'Interior',
      rating: 5.0,
      students: 8735,
      color: 'bg-green-200',
      icon: <Package className="w-5 h-5" />,
      instructors: ['instructor7']
    }
  ];

  const myCourses: MyCourse[] = [
    {
      id: '1',
      title: 'Flutter Masterclass (Dart, APIs, Firebase & More)',
      category: 'IT & Software',
      rating: 4.8,
      students: 9530,
      color: 'bg-pink-200',
      icon: <Laptop className="w-5 h-5" />,
      instructors: ['instructor1', 'instructor2']
    },
    {
      id: '2',
      title: 'Advanced Business Strategy',
      category: 'Business',
      rating: 4.9,
      students: 3245,
      color: 'bg-orange-200',
      icon: <Briefcase className="w-5 h-5" />,
      instructors: ['instructor3']
    }
  ];

  const activityData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 30 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 40 },
    { month: 'Jul', value: 65 },
    { month: 'Aug', value: 50 },
    { month: 'Sep', value: 70 },
    { month: 'Oct', value: 60 },
    { month: 'Nov', value: 80 },
    { month: 'Dec', value: 90 }
  ];

  return (
    <div className="min-h-screen bg-[#FFFAA0]">
      {/* Navbar */}
      <Navbar userType="student" userName="Annette Black" />

      <div className="flex">
        {/* Sidebar */}
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-20 bg-white/80 backdrop-blur-sm shadow-lg flex flex-col items-center py-6 space-y-6">
          {/* Logo */}
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          
          {/* Navigation Icons */}
          <div className="flex flex-col space-y-4">
            <button className="w-12 h-12 bg-[#FFFF8F] rounded-xl flex items-center justify-center hover:bg-[#FFFF8F]/80 transition-colors">
              <Grid3X3 className="w-6 h-6 text-gray-700" />
            </button>
            <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Calendar className="w-6 h-6 text-gray-600" />
            </button>
            <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
              <BookOpen className="w-6 h-6 text-gray-600" />
            </button>
            <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Grid3X3 className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Bottom Icons */}
          <div className="flex-1 flex flex-col justify-end space-y-4">
            <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-20 flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-2">
                Invest in your<br />education
              </h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold text-gray-800">Annette Black</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>274 Friends</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
              <Settings className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - Course Categories and Popular Courses */}
            <div className="col-span-2 space-y-8">
              {/* Category Filters */}
              <div className="flex space-x-4">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                        selectedCategory === category.name
                          ? 'bg-black text-white'
                          : 'bg-[#FFFF8F] text-gray-700 hover:bg-[#FFFF8F]/80'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Most Popular Section */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Most popular</h2>
                <div className="grid grid-cols-2 gap-6">
                  {popularCourses.map((course) => (
                    <div key={course.id} className={`${course.color} p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {course.icon}
                          <span className="text-sm font-medium text-gray-700">{course.category}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-orange-400 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{course.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
                        <div className="flex -space-x-2">
                          {course.instructors.map((instructor, index) => (
                            <div key={index} className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Course */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Featured course</h2>
                <div className="bg-[#FFFF8F] p-6 rounded-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <Laptop className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-700">IT & Software</span>
                    <div className="flex items-center space-x-1 ml-auto">
                      <Star className="w-4 h-4 text-orange-400 fill-current" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Advanced React Development</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">12,450 students</span>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Activity and My Courses */}
            <div className="space-y-8">
              {/* Activity Section */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-gray-700">Activity</span>
                  <button className="flex items-center space-x-1 text-sm text-gray-600">
                    <span>{activityYear}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-800">3.5h</span>
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Great result!</span>
                  </div>
                </div>
                <div className="flex justify-between items-end h-24 space-x-1">
                  {activityData.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center space-y-1">
                      <div 
                        className={`w-6 rounded-t ${
                          index === activityData.length - 1 ? 'bg-black' : 'bg-gray-300'
                        }`}
                        style={{ height: `${data.value}%` }}
                      ></div>
                      <span className="text-xs text-gray-500">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Courses Section */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">My courses</h2>
                <div className="space-y-4">
                  {myCourses.map((course) => (
                    <div key={course.id} className={`${course.color} p-4 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer`}>
                      <div className="flex items-center space-x-2 mb-3">
                        {course.icon}
                        <span className="text-sm font-medium text-gray-700">{course.category}</span>
                        <div className="flex items-center space-x-1 ml-auto">
                          <Star className="w-4 h-4 text-orange-400 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{course.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{course.students.toLocaleString()} students</span>
                        <div className="flex -space-x-1">
                          {course.instructors.map((instructor, index) => (
                            <div key={index} className="w-6 h-6 rounded-full bg-gray-400 border border-white"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHomepage;