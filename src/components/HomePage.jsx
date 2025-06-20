import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, Brain, Zap, Target, Users, BarChart3, Shield, CheckCircle } from 'lucide-react';
import homepageSlider1 from '../assets/homepage_slider_1.png';
import homepageSlider2 from '../assets/homepage_slider_2.png';
import homepageSlider3 from '../assets/homepage_slider_3.png';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and automated task suggestions based on your workflow patterns.'
    },
    {
      icon: Zap,
      title: 'Task Automation',
      description: 'Automate repetitive tasks and streamline your professional service operations.'
    },
    {
      icon: Target,
      title: 'Mission Management',
      description: 'Organize and track your projects with advanced mission management tools.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Monitor your productivity with detailed analytics and performance metrics.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate seamlessly with your team members on shared missions and tasks.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with reliable cloud infrastructure and data protection.'
    }
  ];

  const benefits = [
    'Reduce manual work by up to 70%',
    'Improve project delivery times',
    'Enhanced team productivity',
    'Real-time performance insights',
    'Seamless workflow integration',
    'AI-driven decision support'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Revolutionize Your
                <span className="text-blue-600 block">Professional Services</span>
                with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                TashghilAI simplifies and optimizes professional service management using 
                cutting-edge artificial intelligence. Streamline workflows, automate tasks, 
                and boost productivity with intelligent insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={homepageSlider1}
                alt="TashghilAI Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how TashghilAI transforms the way you manage professional services 
              with intelligent automation and data-driven insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={homepageSlider2}
                alt="Professional Services Management"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About TashghilAI
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TashghilAI is a revolutionary platform that leverages artificial intelligence 
                to transform how professional services are managed. Our mission is to empower 
                businesses and professionals with intelligent tools that automate routine tasks, 
                provide actionable insights, and enhance overall productivity.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See TashghilAI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven professional service management 
              with our intuitive interface and advanced features.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <img
              src={homepageSlider3}
              alt="TashghilAI Interface Demo"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who are already using TashghilAI to 
            streamline their operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

