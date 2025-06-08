import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  File, 
  FileSpreadsheet, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Eye, 
  Download,
  X,
  Plus,
  Calendar,
  Tag,
  FolderOpen,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCw
} from 'lucide-react';

interface StudyMaterial {
  id: string;
  title: string;
  fileName: string;
  type: 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx';
  size: string;
  tags: string[];
  uploadDate: string;
  downloadCount: number;
  description?: string;
  fileUrl?: string;
}

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (material: Omit<StudyMaterial, 'id' | 'uploadDate' | 'downloadCount'>) => void;
}

interface FileViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  material: StudyMaterial | null;
}

function FileViewerModal({ isOpen, onClose, material }: FileViewerModalProps) {
  const [zoom, setZoom] = useState(100);

  if (!isOpen || !material) return null;

  const renderFileContent = () => {
    switch (material.type) {
      case 'pdf':
        return (
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <FileText className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">PDF Document</h3>
              <p className="text-gray-600 mb-4">{material.fileName}</p>
              <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto text-left">
                <h4 className="font-semibold mb-3">Sample PDF Content:</h4>
                <div className="space-y-3 text-sm">
                  <p><strong>Chapter 1: Introduction to Algebra</strong></p>
                  <p>Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.</p>
                  <p><strong>1.1 Variables and Constants</strong></p>
                  <p>A variable is a symbol that represents a number whose value is not known.</p>
                  <p><strong>1.2 Basic Operations</strong></p>
                  <p>• Addition: a + b</p>
                  <p>• Subtraction: a - b</p>
                  <p>• Multiplication: a × b or ab</p>
                  <p>• Division: a ÷ b or a/b</p>
                  <p><strong>Example Problems:</strong></p>
                  <p>1. Solve for x: 2x + 5 = 15</p>
                  <p>2. Simplify: 3(x + 4) - 2x</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'doc':
      case 'docx':
        return (
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <File className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Word Document</h3>
              <p className="text-gray-600 mb-4">{material.fileName}</p>
              <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto text-left">
                <h4 className="font-semibold mb-3">Sample Document Content:</h4>
                <div className="space-y-3 text-sm">
                  <p><strong>Physics Laboratory Manual</strong></p>
                  <p><em>Experiment 1: Measuring Acceleration Due to Gravity</em></p>
                  <p><strong>Objective:</strong> To determine the acceleration due to gravity using a simple pendulum.</p>
                  <p><strong>Materials Required:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Pendulum bob</li>
                    <li>String (1 meter)</li>
                    <li>Stopwatch</li>
                    <li>Measuring tape</li>
                    <li>Protractor</li>
                  </ul>
                  <p><strong>Procedure:</strong></p>
                  <ol className="list-decimal list-inside ml-4">
                    <li>Set up the pendulum with a length of 1 meter</li>
                    <li>Displace the bob by 10 degrees</li>
                    <li>Release and measure the time for 20 oscillations</li>
                    <li>Repeat the experiment 5 times</li>
                    <li>Calculate the average period</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'xls':
      case 'xlsx':
        return (
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <FileSpreadsheet className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Excel Spreadsheet</h3>
              <p className="text-gray-600 mb-4">{material.fileName}</p>
              <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
                <h4 className="font-semibold mb-3">Sample Spreadsheet Content:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">Student ID</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Name</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Math</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Physics</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Chemistry</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Average</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">001</td>
                        <td className="border border-gray-300 px-3 py-2">John Smith</td>
                        <td className="border border-gray-300 px-3 py-2">85</td>
                        <td className="border border-gray-300 px-3 py-2">78</td>
                        <td className="border border-gray-300 px-3 py-2">92</td>
                        <td className="border border-gray-300 px-3 py-2">85.0</td>
                        <td className="border border-gray-300 px-3 py-2">B+</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">002</td>
                        <td className="border border-gray-300 px-3 py-2">Emma Johnson</td>
                        <td className="border border-gray-300 px-3 py-2">92</td>
                        <td className="border border-gray-300 px-3 py-2">88</td>
                        <td className="border border-gray-300 px-3 py-2">95</td>
                        <td className="border border-gray-300 px-3 py-2">91.7</td>
                        <td className="border border-gray-300 px-3 py-2">A-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">003</td>
                        <td className="border border-gray-300 px-3 py-2">Michael Brown</td>
                        <td className="border border-gray-300 px-3 py-2">76</td>
                        <td className="border border-gray-300 px-3 py-2">82</td>
                        <td className="border border-gray-300 px-3 py-2">79</td>
                        <td className="border border-gray-300 px-3 py-2">79.0</td>
                        <td className="border border-gray-300 px-3 py-2">B-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">004</td>
                        <td className="border border-gray-300 px-3 py-2">Sarah Davis</td>
                        <td className="border border-gray-300 px-3 py-2">94</td>
                        <td className="border border-gray-300 px-3 py-2">91</td>
                        <td className="border border-gray-300 px-3 py-2">88</td>
                        <td className="border border-gray-300 px-3 py-2">91.0</td>
                        <td className="border border-gray-300 px-3 py-2">A-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">005</td>
                        <td className="border border-gray-300 px-3 py-2">David Wilson</td>
                        <td className="border border-gray-300 px-3 py-2">88</td>
                        <td className="border border-gray-300 px-3 py-2">85</td>
                        <td className="border border-gray-300 px-3 py-2">90</td>
                        <td className="border border-gray-300 px-3 py-2">87.7</td>
                        <td className="border border-gray-300 px-3 py-2">B+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  <p><strong>Summary Statistics:</strong></p>
                  <p>Class Average: 86.9 | Highest Score: 95 | Lowest Score: 76</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <File className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">File Preview</h3>
              <p className="text-gray-600">Preview not available for this file type</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            {material && (
              <>
                <div className="p-2 bg-gray-100 rounded-lg">
                  {material.type === 'pdf' && <FileText className="w-6 h-6 text-red-500" />}
                  {(material.type === 'doc' || material.type === 'docx') && <File className="w-6 h-6 text-blue-500" />}
                  {(material.type === 'xls' || material.type === 'xlsx') && <FileSpreadsheet className="w-6 h-6 text-green-600" />}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{material.title}</h2>
                  <p className="text-sm text-gray-600">{material.fileName}</p>
                </div>
              </>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setZoom(Math.max(50, zoom - 10))}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600 min-w-[60px] text-center">{zoom}%</span>
            <button
              onClick={() => setZoom(Math.min(200, zoom + 10))}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Rotate"
            >
              <RotateCw className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Open in New Tab"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div 
          className="flex-1 overflow-auto"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
        >
          {renderFileContent()}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>Size: {material?.size}</span>
              <span>Downloads: {material?.downloadCount}</span>
              <span>Uploaded: {material && new Date(material.uploadDate).toLocaleDateString()}</span>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-[#93C572] text-white rounded-lg hover:bg-[#7AB359] transition-colors">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadModal({ isOpen, onClose, onUpload }: UploadModalProps) {
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    fileName: '',
    type: 'pdf' as StudyMaterial['type'],
    size: '',
    tags: [] as string[],
    description: ''
  });
  const [tagInput, setTagInput] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const allowedTypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    if (fileExtension && allowedTypes.includes(fileExtension)) {
      setFormData(prev => ({
        ...prev,
        fileName: file.name,
        title: file.name.replace(/\.[^/.]+$/, ""),
        type: fileExtension as StudyMaterial['type'],
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      }));
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fileName && formData.title) {
      onUpload(formData);
      setFormData({
        title: '',
        fileName: '',
        type: 'pdf',
        size: '',
        tags: [],
        description: ''
      });
      setTagInput('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Upload Study Material</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
              dragActive 
                ? 'border-[#93C572] bg-[#93C572]/5' 
                : 'border-gray-300 hover:border-[#93C572]'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700 mb-2">
              {formData.fileName || 'Drop your file here or browse'}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Supports: PDF, DOC, DOCX, XLS, XLSX (Max 10MB)
            </p>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-4 py-2 bg-[#93C572] text-white rounded-lg hover:bg-[#7AB359] transition-colors cursor-pointer"
            >
              Browse Files
            </label>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent"
              placeholder="Enter material title"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags / Categories
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-[#FFFF8F] text-gray-700 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent"
                placeholder="Add tag and press Enter"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent"
              placeholder="Brief description of the material"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!formData.fileName || !formData.title}
              className="flex-1 px-6 py-3 bg-[#93C572] text-white rounded-lg hover:bg-[#7AB359] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Upload Material
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function StudyMaterials() {
  const [materials, setMaterials] = useState<StudyMaterial[]>([
    {
      id: '1',
      title: 'Algebra Fundamentals',
      fileName: 'algebra-notes.pdf',
      type: 'pdf',
      size: '1.2 MB',
      tags: ['Math', 'Notes', 'Chapter 1'],
      uploadDate: '2025-01-15',
      downloadCount: 45,
      description: 'Basic algebra concepts and formulas'
    },
    {
      id: '2',
      title: 'Physics Lab Manual',
      fileName: 'physics-lab.docx',
      type: 'docx',
      size: '2.8 MB',
      tags: ['Physics', 'Lab', 'Experiments'],
      uploadDate: '2025-01-14',
      downloadCount: 32,
      description: 'Complete lab manual for physics experiments'
    },
    {
      id: '3',
      title: 'Student Grades Sheet',
      fileName: 'grades-q1.xlsx',
      type: 'xlsx',
      size: '0.5 MB',
      tags: ['Grades', 'Assessment', 'Q1'],
      uploadDate: '2025-01-13',
      downloadCount: 12,
      description: 'First quarter student grades and analysis'
    },
    {
      id: '4',
      title: 'Chemistry Formulas Reference',
      fileName: 'chemistry-formulas.pdf',
      type: 'pdf',
      size: '0.8 MB',
      tags: ['Chemistry', 'Reference', 'Formulas'],
      uploadDate: '2025-01-12',
      downloadCount: 28,
      description: 'Essential chemistry formulas and equations'
    },
    {
      id: '5',
      title: 'Assignment Template',
      fileName: 'assignment-template.docx',
      type: 'docx',
      size: '0.3 MB',
      tags: ['Template', 'Assignment', 'Format'],
      uploadDate: '2025-01-11',
      downloadCount: 67,
      description: 'Standard template for student assignments'
    },
    {
      id: '6',
      title: 'Attendance Tracker',
      fileName: 'attendance-tracker.xlsx',
      type: 'xlsx',
      size: '0.4 MB',
      tags: ['Attendance', 'Tracking', 'Records'],
      uploadDate: '2025-01-10',
      downloadCount: 19,
      description: 'Monthly attendance tracking spreadsheet'
    }
  ]);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isViewerModalOpen, setIsViewerModalOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterial | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const getFileIcon = (type: StudyMaterial['type']) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-6 h-6 text-red-500" />;
      case 'doc':
      case 'docx':
        return <File className="w-6 h-6 text-blue-500" />;
      case 'xls':
      case 'xlsx':
        return <FileSpreadsheet className="w-6 h-6 text-green-600" />;
      default:
        return <File className="w-6 h-6 text-gray-500" />;
    }
  };

  const handleUpload = (newMaterial: Omit<StudyMaterial, 'id' | 'uploadDate' | 'downloadCount'>) => {
    const material: StudyMaterial = {
      ...newMaterial,
      id: Date.now().toString(),
      uploadDate: new Date().toISOString().split('T')[0],
      downloadCount: 0
    };
    setMaterials(prev => [material, ...prev]);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this material?')) {
      setMaterials(prev => prev.filter(material => material.id !== id));
    }
  };

  const handleView = (material: StudyMaterial) => {
    setSelectedMaterial(material);
    setIsViewerModalOpen(true);
    // Increment download count when viewing
    setMaterials(prev => prev.map(m => 
      m.id === material.id 
        ? { ...m, downloadCount: m.downloadCount + 1 }
        : m
    ));
  };

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = !selectedTag || material.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(materials.flatMap(material => material.tags)));

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Study Materials</h1>
          <p className="text-gray-600 mt-1">Upload and manage your course materials</p>
        </div>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-[#93C572] text-white rounded-lg hover:bg-[#7AB359] transition-colors shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5 mr-2" />
          Upload New Material
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent appearance-none bg-white min-w-[150px]"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Materials List */}
      {filteredMaterials.length > 0 ? (
        <div className="grid gap-4">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {getFileIcon(material.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {material.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{material.fileName}</p>
                    
                    {material.description && (
                      <p className="text-sm text-gray-600 mb-3">{material.description}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {material.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-[#FFFF8F] text-gray-700 rounded-full text-xs"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(material.uploadDate).toLocaleDateString()}
                      </span>
                      <span>{material.size}</span>
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {material.downloadCount} downloads
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button 
                    onClick={() => handleView(material)}
                    className="p-2 text-gray-600 hover:text-[#93C572] hover:bg-[#93C572]/10 rounded-lg transition-colors"
                    title="View File"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(material.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FolderOpen className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {searchTerm || selectedTag ? 'No materials found' : 'No study materials uploaded yet'}
          </h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || selectedTag 
              ? 'Try adjusting your search or filter criteria'
              : 'Upload your first study material to get started'
            }
          </p>
          {!searchTerm && !selectedTag && (
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-[#93C572] text-white rounded-lg hover:bg-[#7AB359] transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Upload Now
            </button>
          )}
        </div>
      )}

      {/* Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUpload}
      />

      {/* File Viewer Modal */}
      <FileViewerModal
        isOpen={isViewerModalOpen}
        onClose={() => setIsViewerModalOpen(false)}
        material={selectedMaterial}
      />
    </div>
  );
}

export default StudyMaterials;