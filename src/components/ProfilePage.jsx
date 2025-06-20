import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Save, 
  Upload,
  FileText,
  Mic,
  Github,
  Linkedin,
  Globe
} from 'lucide-react';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'This is a demo account with limited functionality.',
    linkedinUrl: 'https://linkedin.com/in/yourusername',
    githubUrl: 'https://github.com/yourusername',
    skills: 'Demo, Testing, Web Development',
    avatar: null
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    cv: null,
    voicePitch: null
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    console.log('Profile saved:', profileData);
    // Here you would typically send the data to your backend
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          avatar: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (type) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [type]: file
      }));
    }
  };

  const handleRecordVoicePitch = () => {
    // This would implement voice recording functionality
    console.log('Starting voice recording...');
    // For demo purposes, we'll just show that the button was clicked
    alert('Voice recording feature would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">My Profile</h1>
          <p className="text-gray-600 mt-2">Complete your profile to get matched with the right opportunities.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Avatar and Documents */}
          <div className="space-y-6">
            {/* Profile Avatar */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarImage src={profileData.avatar} />
                    <AvatarFallback className="text-2xl bg-pink-500 text-white">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {profileData.firstName} {profileData.lastName}
                  </h3>
                  <p className="text-gray-600 mb-4">{profileData.email}</p>
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="avatar-upload"
                  />
                  <label htmlFor="avatar-upload">
                    <Button variant="outline" className="cursor-pointer w-full">
                      Upload Profile Photo
                    </Button>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Documents Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Upload CV */}
                <div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload('cv')}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload">
                    <Button variant="outline" className="w-full cursor-pointer">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload CV
                    </Button>
                  </label>
                  {uploadedFiles.cv && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ {uploadedFiles.cv.name}
                    </p>
                  )}
                </div>

                {/* Record Voice Pitch */}
                <div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleRecordVoicePitch}
                  >
                    <Mic className="h-4 w-4 mr-2" />
                    Record Voice Pitch
                  </Button>
                  {uploadedFiles.voicePitch && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ Voice pitch recorded
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Profile Information */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Bio */}
                <div>
                  <Label htmlFor="bio" className="text-base font-medium">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleProfileChange}
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {/* LinkedIn URL */}
                <div>
                  <Label htmlFor="linkedinUrl" className="text-base font-medium">LinkedIn URL</Label>
                  <div className="relative mt-2">
                    <Linkedin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="linkedinUrl"
                      name="linkedinUrl"
                      value={profileData.linkedinUrl}
                      onChange={handleProfileChange}
                      className="pl-10"
                      placeholder="https://linkedin.com/in/yourusername"
                    />
                  </div>
                </div>

                {/* GitHub URL */}
                <div>
                  <Label htmlFor="githubUrl" className="text-base font-medium">GitHub URL</Label>
                  <div className="relative mt-2">
                    <Github className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="githubUrl"
                      name="githubUrl"
                      value={profileData.githubUrl}
                      onChange={handleProfileChange}
                      className="pl-10"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <Label htmlFor="skills" className="text-base font-medium">Skills</Label>
                  <Textarea
                    id="skills"
                    name="skills"
                    value={profileData.skills}
                    onChange={handleProfileChange}
                    rows={3}
                    className="mt-2"
                    placeholder="List your skills separated by commas"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Separate skills with commas (e.g., JavaScript, React, Node.js)
                  </p>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-base font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-base font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">Email</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">Phone</Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="text-base font-medium">Location</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                      className="pl-10"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="pt-6">
                  <Button 
                    onClick={handleSaveProfile}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

