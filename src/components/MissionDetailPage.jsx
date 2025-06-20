import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  ArrowLeft,
  Calendar, 
  Users, 
  Target,
  Clock,
  CheckCircle,
  MessageSquare,
  FileText,
  Edit,
  Play,
  Pause,
  MoreHorizontal
} from 'lucide-react';

const MissionDetailPage = () => {
  const { id } = useParams();
  
  // Mock mission data
  const mission = {
    id: 1,
    title: 'Website Redesign Project',
    description: 'Complete overhaul of the company website with modern design and improved user experience. This project includes redesigning the UI/UX, implementing responsive design, optimizing for performance, and ensuring accessibility compliance.',
    status: 'In Progress',
    progress: 75,
    deadline: '2024-01-15',
    startDate: '2023-12-01',
    priority: 'High',
    budget: '$25,000',
    client: 'TechCorp Inc.',
    teamMembers: [
      { id: 1, name: 'John Doe', role: 'Project Manager', avatar: null },
      { id: 2, name: 'Jane Smith', role: 'UI/UX Designer', avatar: null },
      { id: 3, name: 'Mike Johnson', role: 'Frontend Developer', avatar: null },
      { id: 4, name: 'Sarah Wilson', role: 'Backend Developer', avatar: null }
    ]
  };

  const tasks = [
    {
      id: 1,
      title: 'Create wireframes and mockups',
      status: 'Completed',
      assignee: 'Jane Smith',
      dueDate: '2023-12-10',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Develop responsive layout',
      status: 'In Progress',
      assignee: 'Mike Johnson',
      dueDate: '2024-01-05',
      priority: 'High'
    },
    {
      id: 3,
      title: 'Implement user authentication',
      status: 'In Progress',
      assignee: 'Sarah Wilson',
      dueDate: '2024-01-08',
      priority: 'Medium'
    },
    {
      id: 4,
      title: 'Content migration',
      status: 'Pending',
      assignee: 'John Doe',
      dueDate: '2024-01-12',
      priority: 'Medium'
    },
    {
      id: 5,
      title: 'Performance optimization',
      status: 'Pending',
      assignee: 'Mike Johnson',
      dueDate: '2024-01-14',
      priority: 'Low'
    }
  ];

  const updates = [
    {
      id: 1,
      author: 'John Doe',
      message: 'Updated project timeline and assigned new tasks to team members.',
      timestamp: '2024-01-08 2:30 PM',
      type: 'update'
    },
    {
      id: 2,
      author: 'Jane Smith',
      message: 'Completed the UI mockups. Ready for development phase.',
      timestamp: '2024-01-07 4:15 PM',
      type: 'completion'
    },
    {
      id: 3,
      author: 'Mike Johnson',
      message: 'Started working on the responsive layout implementation.',
      timestamp: '2024-01-06 10:00 AM',
      type: 'progress'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
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

  const getTaskStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'In Progress': return <Play className="h-4 w-4 text-blue-600" />;
      case 'Pending': return <Pause className="h-4 w-4 text-yellow-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/missions">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Missions
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{mission.title}</h1>
              <p className="text-gray-600 mt-2">Mission #{mission.id}</p>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Mission Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                      <p className="text-gray-600">{mission.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Mission Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Status:</span>
                            <Badge className={getStatusColor(mission.status)}>
                              {mission.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Priority:</span>
                            <Badge className={getPriorityColor(mission.priority)}>
                              {mission.priority}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Start Date:</span>
                            <span>{mission.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Deadline:</span>
                            <span>{mission.deadline}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Budget:</span>
                            <span>{mission.budget}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Client:</span>
                            <span>{mission.client}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Progress</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Overall Progress</span>
                            <span className="font-medium">{mission.progress}%</span>
                          </div>
                          <Progress value={mission.progress} className="h-3" />
                          <p className="text-xs text-gray-500">
                            {mission.progress < 100 ? `${100 - mission.progress}% remaining` : 'Mission completed!'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tasks Tab */}
              <TabsContent value="tasks">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Mission Tasks</CardTitle>
                      <CardDescription>Track and manage individual tasks</CardDescription>
                    </div>
                    <Button size="sm">
                      Add Task
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tasks.map((task) => (
                        <div key={task.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              {getTaskStatusIcon(task.status)}
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{task.title}</h4>
                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                  <span>Assigned to: {task.assignee}</span>
                                  <span className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    Due: {task.dueDate}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getPriorityColor(task.priority)}>
                                {task.priority}
                              </Badge>
                              <Badge className={getStatusColor(task.status)}>
                                {task.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Updates Tab */}
              <TabsContent value="updates">
                <Card>
                  <CardHeader>
                    <CardTitle>Mission Updates</CardTitle>
                    <CardDescription>Recent activity and progress updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {updates.map((update) => (
                        <div key={update.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {update.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-sm">{update.author}</span>
                              <span className="text-xs text-gray-500">{update.timestamp}</span>
                            </div>
                            <p className="text-sm text-gray-700">{update.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mission.teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{member.name}</p>
                        <p className="text-xs text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionDetailPage;

