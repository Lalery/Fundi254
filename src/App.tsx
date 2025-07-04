import React, { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Smartphone, 
  CreditCard, 
  Star, 
  Database,
  DollarSign,
  Wifi,
  ChevronRight,
  Phone,
  Shield,
  Clock,
  CheckCircle,
  User,
  Settings,
  TrendingUp,
  Globe,
  Zap,
  Heart,
  Award,
  Target,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const navigation: NavigationItem[] = [
  { id: 'overview', label: 'Overview', icon: Target },
  { id: 'architecture', label: 'Architecture', icon: Settings },
  { id: 'userflows', label: 'User Flows', icon: Users },
  { id: 'mvp', label: 'MVP Setup', icon: Zap },
  { id: 'features', label: 'Trust Features', icon: Shield },
  { id: 'datamodel', label: 'Data Model', icon: Database },
  { id: 'monetization', label: 'Monetization', icon: DollarSign },
  { id: 'ux', label: 'Sample UX', icon: MessageCircle },
];

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Fundis & Freelancers</h1>
                <p className="text-sm text-gray-600">WhatsApp Booking Bot</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeSection === item.id
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      activeSection === item.id
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Empowering Kenya's Informal Workers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fundis & Freelancers
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Booking Bot</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A WhatsApp-based booking platform connecting informal workers with clients across Kenya. 
            No smartphones required, just simple messages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">WhatsApp Native</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Basic Phone Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">M-Pesa Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Overview</h2>
            <p className="text-xl text-gray-600">Understanding the market and solving real problems</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Users</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />House cleaners</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Plumbers & electricians</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Tutors & coaches</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Mechanics & repair workers</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Beauty & personal care</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pain Points Solved</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />No online presence</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Limited smartphone access</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Unreliable booking systems</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Payment complications</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Trust & verification issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Use Cases</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Quick service bookings</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Emergency repairs</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Regular maintenance</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Skill-based services</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Scheduled appointments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Architecture</h2>
            <p className="text-xl text-gray-600">WhatsApp + Twilio + Firebase + M-Pesa Integration</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Business</h3>
                <p className="text-sm text-gray-600">Primary interface for all user interactions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Twilio API</h3>
                <p className="text-sm text-gray-600">WhatsApp message handling and automation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Firebase</h3>
                <p className="text-sm text-gray-600">Real-time database and user management</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">M-Pesa API</h3>
                <p className="text-sm text-gray-600">Secure payment processing</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">System Flow</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-green-600">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">User sends WhatsApp message</p>
                    <p className="text-sm text-gray-600">Client requests service via WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Twilio processes message</p>
                    <p className="text-sm text-gray-600">Bot interprets request and matches services</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-orange-600">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Firebase stores data</p>
                    <p className="text-sm text-gray-600">Booking details saved in real-time</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-purple-600">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">M-Pesa handles payment</p>
                    <p className="text-sm text-gray-600">Secure payment processing and confirmation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Automated matching</p>
                    <p className="text-sm text-gray-600">AI-powered service provider matching</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Real-time notifications</p>
                    <p className="text-sm text-gray-600">Instant alerts for bookings and updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Multi-language support</p>
                    <p className="text-sm text-gray-600">Swahili, English, and local languages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Offline capability</p>
                    <p className="text-sm text-gray-600">Works with basic feature phones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flows Section */}
      <section id="userflows" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">User Flows</h2>
            <p className="text-xl text-gray-600">Complete booking journey from request to completion</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Client Booking Flow</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">1. Send WhatsApp message</p>
                    <p className="text-sm text-gray-600">"I need a plumber for my kitchen sink"</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2. Choose service provider</p>
                    <p className="text-sm text-gray-600">Bot shows 3 nearby plumbers with ratings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">3. Schedule appointment</p>
                    <p className="text-sm text-gray-600">Select preferred time and date</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">4. Make payment</p>
                    <p className="text-sm text-gray-600">Pay deposit via M-Pesa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">5. Receive confirmation</p>
                    <p className="text-sm text-gray-600">Booking confirmed with provider details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Provider Flow</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">1. Receive notification</p>
                    <p className="text-sm text-gray-600">WhatsApp alert about new booking request</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2. Review client details</p>
                    <p className="text-sm text-gray-600">Location, service type, and client rating</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">3. Accept or decline</p>
                    <p className="text-sm text-gray-600">Simple "Yes" or "No" response</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">4. Receive payment</p>
                    <p className="text-sm text-gray-600">Automatic M-Pesa transfer after completion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">5. Get rated</p>
                    <p className="text-sm text-gray-600">Client provides rating and feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Setup Section */}
      <section id="mvp" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">MVP Setup</h2>
            <p className="text-xl text-gray-600">Low-code/No-code implementation strategy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 1: Core Setup</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Twilio WhatsApp Sandbox</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Firebase project setup</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Basic chatbot flow</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Simple user registration</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 2: Automation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Make.com workflows</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Service provider matching</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Automated notifications</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Basic payment flows</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 3: Enhancement</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />M-Pesa integration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Rating system</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Advanced matching</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Analytics dashboard</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended Tools & Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Twilio</h4>
                <p className="text-sm text-gray-600">WhatsApp Business API</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Firebase</h4>
                <p className="text-sm text-gray-600">Database & Authentication</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Make.com</h4>
                <p className="text-sm text-gray-600">Workflow Automation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">M-Pesa</h4>
                <p className="text-sm text-gray-600">Payment Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trust & Adoption Features</h2>
            <p className="text-xl text-gray-600">Building confidence and encouraging platform usage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified Profiles</h3>
              <p className="text-gray-600 mb-4">Multi-step verification process for service providers</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Phone number verification</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />ID document upload</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Skills assessment</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Reference checks</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ratings & Reviews</h3>
              <p className="text-gray-600 mb-4">Comprehensive feedback system for quality assurance</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />5-star rating system</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Written reviews</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Photo evidence</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Response to reviews</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Audio Introductions</h3>
              <p className="text-gray-600 mb-4">Personal voice messages to build connections</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />30-second voice intros</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Service explanations</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Language options</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Quality moderation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievement Badges</h3>
              <p className="text-gray-600 mb-4">Recognition system for top performers</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Top-rated professional</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Quick responder</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Reliable service</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Customer favorite</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Payments</h3>
              <p className="text-gray-600 mb-4">Protected transactions with escrow service</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />M-Pesa integration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Escrow protection</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Automatic refunds</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Payment tracking</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Support</h3>
              <p className="text-gray-600 mb-4">Peer-to-peer assistance and knowledge sharing</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />WhatsApp groups</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Skill sharing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Mentorship programs</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Success stories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Model Section */}
      <section id="datamodel" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Data Model</h2>
            <p className="text-xl text-gray-600">Firebase collections and document structure</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Collections</h3>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Users</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• id: string</p>
                    <p>• phone: string</p>
                    <p>• name: string</p>
                    <p>• type: 'client' | 'provider'</p>
                    <p>• location: GeoPoint</p>
                    <p>• rating: number</p>
                    <p>• verified: boolean</p>
                    <p>• createdAt: timestamp</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• id: string</p>
                    <p>• name: string</p>
                    <p>• category: string</p>
                    <p>• description: string</p>
                    <p>• basePrice: number</p>
                    <p>• duration: number</p>
                    <p>• active: boolean</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Providers</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• userId: string</p>
                    <p>• services: array</p>
                    <p>• availability: object</p>
                    <p>• bio: string</p>
                    <p>• audioIntro: string</p>
                    <p>• skills: array</p>
                    <p>• badges: array</p>
                    <p>• documents: array</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Transaction Collections</h3>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Bookings</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• id: string</p>
                    <p>• clientId: string</p>
                    <p>• providerId: string</p>
                    <p>• serviceId: string</p>
                    <p>• status: enum</p>
                    <p>• scheduledAt: timestamp</p>
                    <p>• totalAmount: number</p>
                    <p>• paymentStatus: enum</p>
                    <p>• location: GeoPoint</p>
                    <p>• notes: string</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Reviews</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• id: string</p>
                    <p>• bookingId: string</p>
                    <p>• reviewerId: string</p>
                    <p>• revieweeId: string</p>
                    <p>• rating: number</p>
                    <p>• comment: string</p>
                    <p>• photos: array</p>
                    <p>• createdAt: timestamp</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Payments</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• id: string</p>
                    <p>• bookingId: string</p>
                    <p>• amount: number</p>
                    <p>• method: 'mpesa'</p>
                    <p>• status: enum</p>
                    <p>• transactionId: string</p>
                    <p>• createdAt: timestamp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Section */}
      <section id="monetization" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Monetization Strategy</h2>
            <p className="text-xl text-gray-600">Multiple revenue streams for sustainable growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commission Model</h3>
              <p className="text-gray-600 mb-4">Take a percentage of each completed booking</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex justify-between"><span>Standard Services:</span> <span className="font-medium">5%</span></p>
                <p className="flex justify-between"><span>Premium Services:</span> <span className="font-medium">8%</span></p>
                <p className="flex justify-between"><span>Emergency Services:</span> <span className="font-medium">10%</span></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription Plans</h3>
              <p className="text-gray-600 mb-4">Monthly fees for enhanced features</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex justify-between"><span>Basic:</span> <span className="font-medium">Free</span></p>
                <p className="flex justify-between"><span>Pro:</span> <span className="font-medium">KES 500/month</span></p>
                <p className="flex justify-between"><span>Premium:</span> <span className="font-medium">KES 1,000/month</span></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Features</h3>
              <p className="text-gray-600 mb-4">Additional services for power users</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex justify-between"><span>Featured Profile:</span> <span className="font-medium">KES 200/week</span></p>
                <p className="flex justify-between"><span>Priority Support:</span> <span className="font-medium">KES 100/month</span></p>
                <p className="flex justify-between"><span>Analytics:</span> <span className="font-medium">KES 150/month</span></p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Revenue Projections</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Year 1</div>
                <div className="text-sm text-gray-600">
                  <p>1,000 users</p>
                  <p>KES 500K revenue</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Year 2</div>
                <div className="text-sm text-gray-600">
                  <p>5,000 users</p>
                  <p>KES 3M revenue</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Year 3</div>
                <div className="text-sm text-gray-600">
                  <p>20,000 users</p>
                  <p>KES 15M revenue</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Year 5</div>
                <div className="text-sm text-gray-600">
                  <p>100,000 users</p>
                  <p>KES 100M revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample UX Section */}
      <section id="ux" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sample WhatsApp UX</h2>
            <p className="text-xl text-gray-600">Step-by-step conversation flow for booking a plumber</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-green-500 text-white rounded-2xl rounded-tr-md p-4">
                    <p className="text-sm">Hi, I need a plumber for my kitchen sink. It's blocked completely.</p>
                    <p className="text-xs opacity-75 mt-1">2:34 PM</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start">
                  <div className="max-w-xs bg-gray-100 text-gray-900 rounded-2xl rounded-tl-md p-4">
                    <p className="text-sm">Hello! I can help you find a plumber. To get started, I need your location. Can you share your area or nearest landmark?</p>
                    <p className="text-xs text-gray-500 mt-1">2:34 PM</p>
                  </div>
                </div>

                {/* User Location */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-green-500 text-white rounded-2xl rounded-tr-md p-4">
                    <p className="text-sm">I'm in Westlands, near Sarit Centre</p>
                    <p className="text-xs opacity-75 mt-1">2:35 PM</p>
                  </div>
                </div>

                {/* Bot Options */}
                <div className="flex justify-start">
                  <div className="max-w-md bg-gray-100 text-gray-900 rounded-2xl rounded-tl-md p-4">
                    <p className="text-sm mb-3">Great! I found 3 plumbers near you:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-3 rounded-lg">
                        <p className="font-medium">1. John Mwangi ⭐ 4.8/5</p>
                        <p className="text-xs text-gray-600">5 years experience • KES 2,500</p>
                        <p className="text-xs text-gray-600">Available now • 2km away</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="font-medium">2. Mary Wanjiku ⭐ 4.9/5</p>
                        <p className="text-xs text-gray-600">8 years experience • KES 3,000</p>
                        <p className="text-xs text-gray-600">Available at 4 PM • 1.5km away</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="font-medium">3. Peter Ochieng ⭐ 4.7/5</p>
                        <p className="text-xs text-gray-600">3 years experience • KES 2,200</p>
                        <p className="text-xs text-gray-600">Available tomorrow • 3km away</p>
                      </div>
                    </div>
                    <p className="text-sm mt-3">Reply with the number to choose (1, 2, or 3)</p>
                    <p className="text-xs text-gray-500 mt-1">2:35 PM</p>
                  </div>
                </div>

                {/* User Choice */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-green-500 text-white rounded-2xl rounded-tr-md p-4">
                    <p className="text-sm">1</p>
                    <p className="text-xs opacity-75 mt-1">2:36 PM</p>
                  </div>
                </div>

                {/* Bot Scheduling */}
                <div className="flex justify-start">
                  <div className="max-w-md bg-gray-100 text-gray-900 rounded-2xl rounded-tl-md p-4">
                    <p className="text-sm mb-2">Perfect! John Mwangi is available now.</p>
                    <p className="text-sm mb-2">🎵 <em>Would you like to hear his voice introduction?</em></p>
                    <p className="text-sm mb-3">When would you like him to come?</p>
                    <div className="text-sm space-y-1">
                      <p>1. Now (within 30 minutes)</p>
                      <p>2. In 1 hour</p>
                      <p>3. This evening (6-8 PM)</p>
                      <p>4. Tomorrow morning</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">2:36 PM</p>
                  </div>
                </div>

                {/* User Scheduling */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-green-500 text-white rounded-2xl rounded-tr-md p-4">
                    <p className="text-sm">2 - in 1 hour please</p>
                    <p className="text-xs opacity-75 mt-1">2:37 PM</p>
                  </div>
                </div>

                {/* Bot Payment */}
                <div className="flex justify-start">
                  <div className="max-w-md bg-gray-100 text-gray-900 rounded-2xl rounded-tl-md p-4">
                    <p className="text-sm mb-3">Excellent! Here's your booking summary:</p>
                    <div className="bg-white p-3 rounded-lg text-sm mb-3">
                      <p><strong>Service:</strong> Kitchen sink unblocking</p>
                      <p><strong>Plumber:</strong> John Mwangi</p>
                      <p><strong>Time:</strong> 3:37 PM (in 1 hour)</p>
                      <p><strong>Cost:</strong> KES 2,500</p>
                      <p><strong>Deposit:</strong> KES 500</p>
                    </div>
                    <p className="text-sm">To confirm, please pay KES 500 deposit via M-Pesa to: <strong>0712345678</strong></p>
                    <p className="text-sm">Use reference: <strong>PLUMB123</strong></p>
                    <p className="text-xs text-gray-500 mt-2">2:37 PM</p>
                  </div>
                </div>

                {/* User Payment */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-green-500 text-white rounded-2xl rounded-tr-md p-4">
                    <p className="text-sm">Payment sent! Transaction ID: QBR7X8NM</p>
                    <p className="text-xs opacity-75 mt-1">2:39 PM</p>
                  </div>
                </div>

                {/* Bot Confirmation */}
                <div className="flex justify-start">
                  <div className="max-w-md bg-gray-100 text-gray-900 rounded-2xl rounded-tl-md p-4">
                    <p className="text-sm mb-2">✅ Payment confirmed! Your booking is set.</p>
                    <p className="text-sm mb-3">John will arrive at 3:37 PM. His contact: 0721234567</p>
                    <p className="text-sm mb-2">You'll receive:</p>
                    <div className="text-sm space-y-1 mb-3">
                      <p>• Reminder 15 minutes before</p>
                      <p>• John's live location when he starts</p>
                      <p>• Payment link for remaining KES 2,000</p>
                    </div>
                    <p className="text-sm">Need help? Reply "support" anytime.</p>
                    <p className="text-xs text-gray-500 mt-2">2:39 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Launch?</h2>
          <p className="text-xl text-gray-600 mb-8">
            This comprehensive system design provides everything needed to build and launch 
            the Fundis & Freelancers WhatsApp booking bot in Kenya.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Mobile-First Design</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Low-Code MVP</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Scalable Architecture</span>
            </div>
          </div>
          <p className="text-gray-600">
            Start with the MVP setup using Twilio, Firebase, and Make.com, then gradually add 
            advanced features based on user feedback and growth metrics.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Fundis & Freelancers</h3>
              <p className="text-sm text-gray-400">WhatsApp Booking Bot</p>
            </div>
          </div>
          <p className="text-gray-400">
            Empowering Kenya's informal workers through accessible technology
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;