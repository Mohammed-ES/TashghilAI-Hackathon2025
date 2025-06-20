import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  BarChart3, 
  CheckCircle, 
  Clock, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar,
  Bell,
  Plus,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const stats = [
    {
      title: 'Active Missions',
      value: '12',
      change: '+2 from last week',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      title: 'Completed Tasks',
      value: '48',
      change: '+12 from last week',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Team Members',
      value: '8',
      change: '+1 new member',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Productivity Score',
      value: '87%',
      change: '+5% from last month',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const recentMissions = [
    {
      id: 1,
      title: 'Website Redesign Project',
      status: 'In Progress',
      progress: 75,
      deadline: '2024-01-15',
      team: 4
    },
    {
      id: 2,
      title: 'Mobile App Development',
      status: 'Planning',
      progress: 25,
      deadline: '2024-02-28',
      team: 6
    },
    {
      id: 3,
      title: 'Marketing Campaign Launch',
      status: 'Review',
      progress: 90,
      deadline: '2024-01-10',
      team: 3
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Review design mockups',
      mission: 'Website Redesign Project',
      dueTime: '2:00 PM',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Client presentation prep',
      mission: 'Marketing Campaign Launch',
      dueTime: '4:30 PM',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Team standup meeting',
      mission: 'Mobile App Development',
      dueTime: '9:00 AM Tomorrow',
      priority: 'Low'
    }
  ];

  const notifications = [
    {
      id: 1,
      message: 'New task assigned: UI/UX Review',
      time: '5 minutes ago',
      type: 'task'
    },
    {
      id: 2,
      message: 'Mission deadline approaching: Website Redesign',
      time: '1 hour ago',
      type: 'deadline'
    },
    {
      id: 3,
      message: 'Team member John completed 3 tasks',
      time: '2 hours ago',
      type: 'completion'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'text-blue-600 bg-blue-50';
      case 'Planning': return 'text-purple-600 bg-purple-50';
      case 'Review': return 'text-orange-600 bg-orange-50';
      case 'Completed': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your projects.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Missions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Missions</CardTitle>
                  <CardDescription>Your active and recent project missions</CardDescription>
                </div>
                <Link to="/missions">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMissions.map((mission) => (
                    <div key={mission.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(mission.status)}`}>
                          {mission.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Due: {mission.deadline}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {mission.team} members
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{mission.progress}%</span>
                        </div>
                        <Progress value={mission.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks due today and tomorrow</CardDescription>
                </div>
                <Link to="/tasks">
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm text-gray-900">{task.title}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{task.mission}</p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {task.dueTime}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
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
                <Link to="/missions" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="h-4 w-4 mr-2" />
                    Create New Mission
                  </Button>
                </Link>
                <Link to="/tasks" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </Link>
                <Link to="/profile" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

