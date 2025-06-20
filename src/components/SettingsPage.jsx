import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { 
  Settings, 
  Bell, 
  User, 
  Shield, 
  Palette, 
  Globe,
  Smartphone,
  Mail,
  Slack,
  Calendar,
  Save
} from 'lucide-react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    // Account Settings
    language: 'en',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    taskReminders: true,
    missionUpdates: true,
    teamMessages: false,
    weeklyReports: true,
    
    // Privacy Settings
    profileVisibility: 'team',
    activityTracking: true,
    dataSharing: false,
    
    // Integration Settings
    slackIntegration: false,
    calendarSync: true,
    emailSync: false,
    
    // Appearance Settings
    theme: 'light',
    compactMode: false,
    sidebarCollapsed: false
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log('Settings saved:', settings);
    // Handle settings save
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and configurations</p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Configure your account preferences and regional settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      value={settings.language}
                      onChange={(e) => handleSettingChange('language', e.target.value)}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                      <option value="es">Español</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      value={settings.timezone}
                      onChange={(e) => handleSettingChange('timezone', e.target.value)}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                      <option value="Europe/London">London (GMT)</option>
                      <option value="Europe/Paris">Paris (CET)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <select
                      id="dateFormat"
                      value={settings.dateFormat}
                      onChange={(e) => handleSettingChange('dateFormat', e.target.value)}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Choose how and when you want to receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-gray-600">Receive push notifications in your browser</p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Task Reminders</Label>
                      <p className="text-sm text-gray-600">Get reminded about upcoming task deadlines</p>
                    </div>
                    <Switch
                      checked={settings.taskReminders}
                      onCheckedChange={(checked) => handleSettingChange('taskReminders', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Mission Updates</Label>
                      <p className="text-sm text-gray-600">Notifications about mission progress and changes</p>
                    </div>
                    <Switch
                      checked={settings.missionUpdates}
                      onCheckedChange={(checked) => handleSettingChange('missionUpdates', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Team Messages</Label>
                      <p className="text-sm text-gray-600">Notifications for team messages and mentions</p>
                    </div>
                    <Switch
                      checked={settings.teamMessages}
                      onCheckedChange={(checked) => handleSettingChange('teamMessages', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-gray-600">Receive weekly productivity and progress reports</p>
                    </div>
                    <Switch
                      checked={settings.weeklyReports}
                      onCheckedChange={(checked) => handleSettingChange('weeklyReports', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Privacy Settings
                </CardTitle>
                <CardDescription>
                  Control your privacy and data sharing preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="profileVisibility">Profile Visibility</Label>
                    <select
                      id="profileVisibility"
                      value={settings.profileVisibility}
                      onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="public">Public</option>
                      <option value="team">Team Only</option>
                      <option value="private">Private</option>
                    </select>
                    <p className="text-sm text-gray-600 mt-1">Who can see your profile information</p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Activity Tracking</Label>
                      <p className="text-sm text-gray-600">Allow tracking of your activity for analytics</p>
                    </div>
                    <Switch
                      checked={settings.activityTracking}
                      onCheckedChange={(checked) => handleSettingChange('activityTracking', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Data Sharing</Label>
                      <p className="text-sm text-gray-600">Share anonymized data to improve the platform</p>
                    </div>
                    <Switch
                      checked={settings.dataSharing}
                      onCheckedChange={(checked) => handleSettingChange('dataSharing', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integration Settings */}
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Integrations
                </CardTitle>
                <CardDescription>
                  Connect TashghilAI with your favorite tools and services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Slack className="h-8 w-8 text-purple-600" />
                      <div>
                        <Label>Slack Integration</Label>
                        <p className="text-sm text-gray-600">Sync notifications and updates with Slack</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={settings.slackIntegration}
                        onCheckedChange={(checked) => handleSettingChange('slackIntegration', checked)}
                      />
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-blue-600" />
                      <div>
                        <Label>Calendar Sync</Label>
                        <p className="text-sm text-gray-600">Sync deadlines and meetings with your calendar</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={settings.calendarSync}
                        onCheckedChange={(checked) => handleSettingChange('calendarSync', checked)}
                      />
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-8 w-8 text-red-600" />
                      <div>
                        <Label>Email Sync</Label>
                        <p className="text-sm text-gray-600">Sync emails related to your missions</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={settings.emailSync}
                        onCheckedChange={(checked) => handleSettingChange('emailSync', checked)}
                      />
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Appearance
                </CardTitle>
                <CardDescription>
                  Customize the look and feel of your workspace
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="theme">Theme</Label>
                    <select
                      id="theme"
                      value={settings.theme}
                      onChange={(e) => handleSettingChange('theme', e.target.value)}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto (System)</option>
                    </select>
                    <p className="text-sm text-gray-600 mt-1">Choose your preferred color theme</p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Compact Mode</Label>
                      <p className="text-sm text-gray-600">Use a more compact layout to fit more content</p>
                    </div>
                    <Switch
                      checked={settings.compactMode}
                      onCheckedChange={(checked) => handleSettingChange('compactMode', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Collapsed Sidebar</Label>
                      <p className="text-sm text-gray-600">Start with the sidebar collapsed by default</p>
                    </div>
                    <Switch
                      checked={settings.sidebarCollapsed}
                      onCheckedChange={(checked) => handleSettingChange('sidebarCollapsed', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSaveSettings} className="w-full sm:w-auto">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

