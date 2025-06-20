import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  Filter, 
  Calendar,
  DollarSign,
  Clock,
  User,
  MapPin,
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Briefcase
} from 'lucide-react';

const TasksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBudget, setSelectedBudget] = useState('All Budgets');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const availableTasks = [
    {
      id: 1,
      title: 'Build a Landing Page for E-commerce Store',
      category: 'Web Development',
      status: 'Open',
      budget: '$100-$200',
      description: 'Create a responsive landing page for a new product launch. Must be mobile-first and include product showcase, features section, and call-to-action.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      postedDate: '2023-10-15',
      deadline: '2023-10-30',
      applicants: 12
    },
    {
      id: 2,
      title: 'Fix Authentication Bug in React Application',
      category: 'Debugging',
      status: 'Applied',
      budget: '$50-$100',
      description: 'Debug and fix issues with user authentication flow in a React application. The login page doesn\'t redirect properly after successful authentication.',
      skills: ['React', 'Authentication', 'Debugging'],
      postedDate: '2023-10-18',
      deadline: '2023-10-25',
      applicants: 8
    },
    {
      id: 3,
      title: 'Create Logo for Tech Startup',
      category: 'Design',
      status: 'Open',
      budget: '$200-$500',
      description: 'Design a modern, professional logo for a tech startup in the AI space. Should convey innovation and trust.',
      skills: ['Graphic Design', 'Logo Design', 'Branding'],
      postedDate: '2023-10-10',
      deadline: '2023-11-05',
      applicants: 25
    },
    {
      id: 4,
      title: 'Implement API Integration for Payment Gateway',
      category: 'Backend',
      status: 'Open',
      budget: '$150-$300',
      description: 'Integrate Stripe payment gateway into an existing e-commerce application. Must handle credit card payments and subscription management.',
      skills: ['API Integration', 'Payment Gateway', 'Backend Development'],
      postedDate: '2023-10-20',
      deadline: '2023-11-10',
      applicants: 15
    },
    {
      id: 5,
      title: 'Create Mobile App UI Design',
      category: 'UI/UX Design',
      status: 'Open',
      budget: '$300-$600',
      description: 'Design UI for a fitness tracking mobile application. Need screens for user dashboard, workout tracking, and profile.',
      skills: ['UI Design', 'Mobile Design', 'Figma'],
      postedDate: '2023-10-17',
      deadline: '2023-11-10',
      applicants: 18
    },
    {
      id: 6,
      title: 'Set Up CI/CD Pipeline',
      category: 'DevOps',
      status: 'Completed',
      budget: '$100-$200',
      description: 'Set up a CI/CD pipeline for a Node.js application using GitHub Actions or similar tool. Must include testing, building, and deployment stages.',
      skills: ['CI/CD', 'DevOps', 'GitHub Actions'],
      postedDate: '2023-10-05',
      deadline: '2023-10-20',
      applicants: 10
    }
  ];

  const categories = ['All Categories', 'Web Development', 'Design', 'Backend', 'UI/UX Design', 'DevOps', 'Debugging'];
  const budgets = ['All Budgets', '$50-$100', '$100-$200', '$200-$500', '$300-$600'];
  const statuses = ['All Status', 'Open', 'Applied', 'Completed'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800';
      case 'Applied':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development':
        return <Globe className="h-4 w-4" />;
      case 'Design':
        return <Palette className="h-4 w-4" />;
      case 'Backend':
        return <Database className="h-4 w-4" />;
      case 'UI/UX Design':
        return <Smartphone className="h-4 w-4" />;
      case 'DevOps':
        return <Code className="h-4 w-4" />;
      case 'Debugging':
        return <Code className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  const filteredTasks = availableTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || task.category === selectedCategory;
    const matchesBudget = selectedBudget === 'All Budgets' || task.budget === selectedBudget;
    const matchesStatus = selectedStatus === 'All Status' || task.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesBudget && matchesStatus;
  });

  const handleSubmitWork = (taskId) => {
    console.log('Submitting work for task:', taskId);
    // Handle work submission
  };

  const handleApply = (taskId) => {
    console.log('Applying for task:', taskId);
    // Handle task application
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Tasks</h1>
          <p className="text-gray-600 mt-2">Find and apply for tasks that match your skills.</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Budget Filter */}
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {budgets.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(task.category)}
                    <Badge variant="outline" className={getStatusColor(task.status)}>
                      {task.status}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{task.budget}</div>
                  </div>
                </div>
                <CardTitle className="text-lg">{task.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{task.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {task.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Task Details */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Posted: {task.postedDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Deadline: {task.deadline}
                  </div>
                </div>

                {/* Applicants */}
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  {task.applicants} applicants
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  {task.status === 'Open' && (
                    <Button 
                      onClick={() => handleApply(task.id)}
                      className="w-full"
                      variant="outline"
                    >
                      Apply Now
                    </Button>
                  )}
                  {task.status === 'Applied' && (
                    <Button 
                      onClick={() => handleSubmitWork(task.id)}
                      className="w-full bg-orange-600 hover:bg-orange-700"
                    >
                      Submit Work
                    </Button>
                  )}
                  {task.status === 'Completed' && (
                    <Button 
                      disabled
                      className="w-full bg-green-600"
                    >
                      Applied
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksPage;

