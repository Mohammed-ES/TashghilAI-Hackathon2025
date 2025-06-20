import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'contact@tashghilai.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      content: 'San Francisco, CA',
      description: '123 Innovation Street, Suite 100'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with TashghilAI?',
      answer: 'Simply sign up for a free account and complete your profile. You can then browse available tasks and start applying for projects that match your skills.'
    },
    {
      question: 'What types of tasks are available?',
      answer: 'We offer a wide variety of tasks including web development, design, content creation, data analysis, and more. Tasks range from quick fixes to long-term projects.'
    },
    {
      question: 'How does the payment system work?',
      answer: 'Payments are processed securely through our platform. You\'ll receive payment once the task is completed and approved by the client.'
    },
    {
      question: 'Can I work with international clients?',
      answer: 'Yes! TashghilAI connects professionals globally. You can work with clients from anywhere in the world.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about TashghilAI? We're here to help! Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <Label htmlFor="inquiryType">Type of Inquiry</Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Here are our contact details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">General Inquiries</span>
                    <span className="text-sm font-medium">24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Technical Support</span>
                    <span className="text-sm font-medium">12 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Urgent Issues</span>
                    <span className="text-sm font-medium">4 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Our dedicated support team is here to help you succeed on the TashghilAI platform. 
                  We're committed to providing excellent service and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

