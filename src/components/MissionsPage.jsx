import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Search, 
  Filter, 
  Plus, 
  Calendar, 
  Users, 
  Target,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const MissionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const missions = [
    {
      id: 1,
      title: 'Website Redesign Project',
      description: 'Complete overhaul of the company website with modern design and improved UX.',
      status: 'In Progress',
      progress: 75,
      deadline: '2024-01-15',
      team: 4,
      priority: 'High',
      createdDate: '2023-12-01'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Develop a cross-platform mobile application for iOS and Android.',
      status: 'Planning',
      progress: 25,
      deadline: '2024-02-28',
      team: 6,
      priority: 'High',
      createdDate: '2023-12-15'
    },
    {
      id: 3,
      title: 'Marketing Campaign Launch',
      description: 'Launch comprehensive digital marketing campaign for Q1 2024.',
      status: 'Review',
      progress: 90,
      deadline: '2024-01-10',
      team: 3,
      priority: 'Medium',
      createdDate: '2023-11-20'
    },
    {
      id: 4,
      title: 'Database Migration',
      description: 'Migrate legacy database to new cloud infrastructure.',
      status: 'Completed',
      progress: 100,
      deadline: '2023-12-30',
      team: 2,
      priority: 'High',
      createdDate: '2023-11-01'
    },
    {
      id: 5,
      title: 'Customer Support Portal',
      description: 'Build self-service customer support portal with AI chatbot.',
      status: 'Planning',
      progress: 15,
      deadline: '2024-03-15',
      team: 5,
      priority: 'Medium',
      createdDate: '2024-01-05'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Review': return 'bg-orange-100 text-orange-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'On Hold': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredMissions = missions.filter(mission => {
    const matchesSearch = mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mission.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || mission.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Missions</h1>
            <p className="text-gray-600 mt-2">Manage and track your project missions</p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Create Mission
          </Button>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search missions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="planning">Planning</option>
                  <option value="in progress">In Progress</option>
                  <option value="review">Review</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredMissions.map((mission) => (
            <Card key={mission.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{mission.title}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">
                      {mission.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Status and Priority */}
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(mission.status)}>
                      {mission.status}
                    </Badge>
                    <Badge variant="outline" className={getPriorityColor(mission.priority)}>
                      {mission.priority}
                    </Badge>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{mission.progress}%</span>
                    </div>
                    <Progress value={mission.progress} className="h-2" />
                  </div>

                  {/* Mission Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Due: {mission.deadline}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{mission.team} members</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Link to={`/missions/${mission.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredMissions.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No missions found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Get started by creating your first mission.'
                }
              </p>
              {!searchTerm && filterStatus === 'all' && (
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Mission
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MissionsPage;

