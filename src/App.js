import React, { useState } from "react";
import {
  MapPin,
  Shield,
  Smartphone,
  CreditCard,
  Car,
  Plus,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  DollarSign,
  Settings,
  Bell,
  BarChart3,
  BookOpen,
  AlertCircle,
  FileText,
  Camera,
  User,
  Clock,
  Zap,
  TrendingUp,
  Globe,
  Battery,
  Crown,
  RefreshCw,
  Headphones,
  HelpCircle,
  ChevronDown,
  Send,
} from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState(1);
  const [deviceRegistrationStep, setDeviceRegistrationStep] = useState(1);
  const [topupStep, setTopupStep] = useState(1);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Enroll", id: "enroll" },
    { name: "Register Device", id: "register" },
    { name: "Top Up", id: "topup" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Support", id: "support" },
  ];

  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! How can I help you today?",
      time: "10:00 AM",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  // Add FAQ state for accordion
  const [openFAQ, setOpenFAQ] = useState(null);

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-time GPS Tracking",
      description:
        "Track your vehicles in real-time with precise location data",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Alerts",
      description:
        "Instant notifications for theft, tampering, and unauthorized use",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Detailed reports on routes, mileage, and vehicle usage",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Geofencing",
      description: "Set virtual boundaries and get alerts when crossed",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$15",
      period: "per month",
      features: [
        "Real-time tracking",
        "Basic alerts",
        "Web dashboard",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$35",
      period: "per month",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "Geofencing",
        "SMS alerts",
        "Phone support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$75",
      period: "per month",
      features: [
        "Everything in Pro",
        "Multi-user access",
        "Custom reports",
        "API access",
        "24/7 support",
      ],
    },
  ];

  const paymentMethods = [
    { name: "EcoCash", logo: "💳" },
    { name: "OneMoney", logo: "📱" },
    { name: "TeleCash", logo: "💰" },
    { name: "Bank Transfer", logo: "🏦" },
  ];

  const airTimePackages = [
    { data: "1GB", duration: "30 days", price: "$5" },
    { data: "3GB", duration: "30 days", price: "$12" },
    { data: "5GB", duration: "30 days", price: "$18" },
    { data: "10GB", duration: "30 days", price: "$30" },
  ];

  const renderHome = () => (
    <div className="space-y-20">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Animated Map Pins */}
          <div
            className="absolute top-20 left-10 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          >
            <MapPin className="w-8 h-8 text-orange-400 opacity-30 fill-current" />
          </div>
          <div
            className="absolute top-40 right-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3.5s" }}
          >
            <MapPin className="w-6 h-6 text-orange-400 opacity-20 fill-current" />
          </div>
          <div
            className="absolute bottom-32 left-1/3 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "4s" }}
          >
            <MapPin className="w-10 h-10 text-orange-400 opacity-25 fill-current" />
          </div>

          {/* Animated Route Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 100 100 Q 300 50, 500 100 T 900 100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="30"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full mb-6 animate-fade-in">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold text-orange-300">
                  Live Tracking Available
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Track Your Assets in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Real-Time
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/30 -z-10"></span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Secure, efficient, and reliable vehicle tracking for complete
                peace of mind
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm text-white">24/7 Monitoring</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm text-white">Instant Alerts</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm text-white">Easy Setup</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setActiveTab("enroll")}
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>

                <button
                  onClick={() => setActiveTab("register")}
                  className="group bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Register Device
                </button>

                <button
                  onClick={() => setActiveTab("topup")}
                  className="group border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Top Up Airtime
                </button>
              </div>
            </div>

            {/* Right Content - Animated Map Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                {/* Main Map Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                  {/* Mock Map Interface */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-900/50 to-slate-900/50 rounded-2xl overflow-hidden">
                    {/* Map Grid */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    ></div>

                    {/* Animated Route Path */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 50 400 Q 150 300, 250 350 T 450 300"
                        stroke="#f97316"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="1000"
                          to="0"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>

                    {/* Animated Vehicle Pins */}
                    <div className="absolute top-1/4 left-1/4 animate-pulse">
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50 animate-ping"></div>
                        <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-full shadow-lg">
                          <Car className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute top-1/2 right-1/3 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-ping"></div>
                        <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full shadow-lg">
                          <MapPin className="w-6 h-6 text-white fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Stats Overlay Cards */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-fade-in">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <p className="text-xs text-gray-600">
                            Active Devices
                          </p>
                          <p className="text-lg font-bold text-blue-900">
                            1,247
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-fade-in"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-orange-500" />
                        <div>
                          <p className="text-xs text-gray-600">
                            Security Status
                          </p>
                          <p className="text-sm font-bold text-green-600">
                            All Systems Protected
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                value: "99.9%",
                label: "Uptime",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                value: "15K+",
                label: "Tracked Devices",
              },
              {
                icon: <Bell className="w-6 h-6" />,
                value: "24/7",
                label: "Live Support",
              },
              {
                icon: <Star className="w-6 h-6 fill-current" />,
                value: "4.9/5",
                label: "User Rating",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-orange-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Shield className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Features
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced features designed to keep your assets safe and secure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-orange-200">
                  <div className="text-orange-500 group-hover:text-orange-600 transition-colors">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow Icon - Appears on Hover */}
                <div className="mt-4 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-6 rounded-2xl shadow-xl">
            <div className="text-left">
              <p className="text-white font-semibold text-lg mb-1">
                Ready to get started?
              </p>
              <p className="text-blue-200 text-sm">
                Start tracking your assets today
              </p>
            </div>
            <button
              onClick={() => setActiveTab("enroll")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center whitespace-nowrap"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-orange-100 rounded-full mb-4">
              <Star className="w-4 h-4 text-orange-500 mr-2 fill-current" />
              <span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us to protect
              their valuable assets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Fleet Manager",
                initials: "JD",
                text: "Excellent service! I can track my fleet in real-time and the alerts have saved me from theft multiple times. The interface is intuitive and the support team is always responsive.",
                color: "from-blue-500 to-blue-600",
              },
              {
                name: "Sarah Moyo",
                role: "Business Owner",
                initials: "SM",
                text: "Game changer for my delivery business. I can now monitor all my vehicles and optimize routes efficiently. The geofencing feature is particularly impressive.",
                color: "from-orange-500 to-orange-600",
              },
              {
                name: "Michael Chen",
                role: "Logistics Director",
                initials: "MC",
                text: "The analytics and reporting features have helped us reduce fuel costs by 30%. Best investment we've made for our fleet management operations.",
                color: "from-blue-600 to-blue-700",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-orange-400 fill-current transition-all duration-200 group-hover:scale-110"
                      style={{ transitionDelay: `${star * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center pt-6 border-t border-gray-100">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-blue-900 text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform">
                  5,000+
                </div>
                <p className="text-gray-600 text-sm">Active Users</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform">
                  15,000+
                </div>
                <p className="text-gray-600 text-sm">Devices Tracked</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform">
                  99.9%
                </div>
                <p className="text-gray-600 text-sm">Uptime</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform">
                  4.9/5
                </div>
                <p className="text-gray-600 text-sm flex items-center justify-center">
                  <Star className="w-4 h-4 text-orange-400 fill-current mr-1" />
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderEnrollment = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
              <Shield className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
                Account Setup
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600">
              Complete the steps below to get started
            </p>
          </div>

          {/* Step Indicator */}
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
            {/* Active Progress Bar */}
            <div
              className="absolute top-5 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((enrollmentStep - 1) / 3) * 100}%` }}
            ></div>

            {/* Steps */}
            <div className="relative flex justify-between">
              {[
                {
                  num: 1,
                  label: "Account Info",
                  icon: <User className="w-5 h-5" />,
                },
                {
                  num: 2,
                  label: "Verification",
                  icon: <Shield className="w-5 h-5" />,
                },
                {
                  num: 3,
                  label: "Profile",
                  icon: <FileText className="w-5 h-5" />,
                },
                {
                  num: 4,
                  label: "Complete",
                  icon: <CheckCircle className="w-5 h-5" />,
                },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      enrollmentStep >= step.num
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50 scale-110"
                        : "bg-white border-2 border-gray-300"
                    }`}
                  >
                    {enrollmentStep > step.num ? (
                      <CheckCircle className="w-6 h-6 text-white animate-scale-in" />
                    ) : (
                      <span
                        className={`font-bold ${
                          enrollmentStep >= step.num
                            ? "text-white"
                            : "text-gray-500"
                        }`}
                      >
                        {enrollmentStep === step.num ? step.icon : step.num}
                      </span>
                    )}

                    {/* Pulse Animation for Active Step */}
                    {enrollmentStep === step.num && (
                      <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>
                    )}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`mt-3 text-xs md:text-sm font-semibold transition-colors ${
                      enrollmentStep >= step.num
                        ? "text-orange-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100">
          {enrollmentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Account Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    id="firstName"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none group-hover:border-gray-400"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    id="lastName"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none group-hover:border-gray-400"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    id="email"
                    required
                    className="w-full p-3 pl-11 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none group-hover:border-gray-400"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+263 77 123 4567"
                    id="phone"
                    required
                    className="w-full p-3 pl-11 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none group-hover:border-gray-400"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    id="password"
                    required
                    className="w-full p-3 pl-11 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none group-hover:border-gray-400"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Minimum 8 characters with letters and numbers
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setActiveTab("home")}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const firstName =
                      document.getElementById("firstName").value;
                    const lastName = document.getElementById("lastName").value;
                    const email = document.getElementById("email").value;
                    const phone = document.getElementById("phone").value;
                    const password = document.getElementById("password").value;

                    if (
                      firstName &&
                      lastName &&
                      email &&
                      phone &&
                      password &&
                      password.length >= 8
                    ) {
                      setEnrollmentStep(2);
                    } else {
                      alert(
                        "Please fill in all required fields. Password must be at least 8 characters."
                      );
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {enrollmentStep === 2 && (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                Verify Your Account
              </h3>
              <p className="text-gray-600">
                We've sent a 6-digit verification code to your email and phone
              </p>

              <div className="flex justify-center space-x-2 md:space-x-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength="1"
                    id={`code${i}`}
                    className="w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                    onInput={(e) => {
                      if (e.target.value && i < 6) {
                        document.getElementById(`code${i + 1}`)?.focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && !e.target.value && i > 1) {
                        document.getElementById(`code${i - 1}`)?.focus();
                      }
                    }}
                  />
                ))}
              </div>

              <button className="text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                Resend Code
              </button>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setEnrollmentStep(1)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back
                </button>
                <button
                  onClick={() => {
                    const codes = [1, 2, 3, 4, 5, 6].map(
                      (i) => document.getElementById(`code${i}`).value
                    );
                    const allFilled = codes.every((code) => code.length === 1);

                    if (allFilled) {
                      setEnrollmentStep(3);
                    } else {
                      alert(
                        "Please enter the complete 6-digit verification code."
                      );
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Verify & Continue
                  <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {enrollmentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Complete Your Profile
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="accountType"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                >
                  <option value="">Select account type</option>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  id="orgName"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your tracking needs{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="e.g., I need to track 5 delivery vehicles across Harare..."
                  rows="4"
                  id="trackingNeeds"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400 resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setEnrollmentStep(2)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back
                </button>
                <button
                  onClick={() => {
                    const accountType =
                      document.getElementById("accountType").value;
                    const trackingNeeds =
                      document.getElementById("trackingNeeds").value;

                    if (accountType && trackingNeeds) {
                      setEnrollmentStep(4);
                    } else {
                      alert(
                        "Please select an account type and describe your tracking needs."
                      );
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Complete Setup
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {enrollmentStep === 4 && (
            <div className="text-center space-y-6 animate-fade-in py-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <CheckCircle className="relative w-20 h-20 text-green-500 mx-auto animate-scale-in" />
              </div>

              <h3 className="text-3xl font-bold text-blue-900">
                Welcome Aboard!
              </h3>
              <p className="text-gray-600 text-lg">
                Your account has been created successfully
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 space-y-2">
                <div className="flex items-center justify-center space-x-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Account activated</span>
                </div>
                <p className="text-sm text-green-600">
                  You can now register your tracking devices
                </p>
              </div>

              <button
                onClick={() => setActiveTab("register")}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
              >
                Register Your First Device
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );

  const renderDeviceRegistration = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Smartphone className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Device Setup
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Register Your Device
            </h2>
            <p className="text-gray-600">
              Follow these steps to activate your tracking device
            </p>
          </div>

          {/* Step Indicator */}
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
            {/* Active Progress Bar */}
            <div
              className="absolute top-5 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((deviceRegistrationStep - 1) / 4) * 100}%` }}
            ></div>

            {/* Steps */}
            <div className="relative flex justify-between">
              {[
                {
                  num: 1,
                  label: "Device Info",
                  icon: <Smartphone className="w-5 h-5" />,
                },
                {
                  num: 2,
                  label: "Asset Info",
                  icon: <Car className="w-5 h-5" />,
                },
                {
                  num: 3,
                  label: "Pairing",
                  icon: <Settings className="w-5 h-5" />,
                },
                {
                  num: 4,
                  label: "Configure",
                  icon: <Settings className="w-5 h-5" />,
                },
                {
                  num: 5,
                  label: "Complete",
                  icon: <CheckCircle className="w-5 h-5" />,
                },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      deviceRegistrationStep >= step.num
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50 scale-110"
                        : "bg-white border-2 border-gray-300"
                    }`}
                  >
                    {deviceRegistrationStep > step.num ? (
                      <CheckCircle className="w-6 h-6 text-white animate-scale-in" />
                    ) : (
                      <span
                        className={`font-bold ${
                          deviceRegistrationStep >= step.num
                            ? "text-white"
                            : "text-gray-500"
                        }`}
                      >
                        {deviceRegistrationStep === step.num
                          ? step.icon
                          : step.num}
                      </span>
                    )}

                    {/* Pulse Animation for Active Step */}
                    {deviceRegistrationStep === step.num && (
                      <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>
                    )}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`mt-3 text-xs md:text-sm font-semibold transition-colors ${
                      deviceRegistrationStep >= step.num
                        ? "text-orange-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100">
          {deviceRegistrationStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Device Details
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Serial Number / IMEI{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 123456789012345"
                  id="deviceSerial"
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Enter the 15-digit IMEI or serial number on your device
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div className="text-center py-4 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium mb-2">Scan QR Code</p>
                <p className="text-sm text-gray-500 mb-4">
                  Quickly register by scanning the device QR code
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-semibold">
                  Open Camera
                </button>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setActiveTab("home")}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const serial =
                      document.getElementById("deviceSerial").value;
                    if (serial && serial.length >= 10) {
                      setDeviceRegistrationStep(2);
                    } else {
                      alert(
                        "Please enter a valid device serial number or IMEI (minimum 10 characters)."
                      );
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {deviceRegistrationStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Asset Information
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asset Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Truck 1, Generator A, Delivery Van"
                  id="assetName"
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asset Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="assetCategory"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                >
                  <option value="">Select Category</option>
                  <option value="vehicle">Vehicle</option>
                  <option value="equipment">Equipment</option>
                  <option value="livestock">Livestock</option>
                  <option value="container">Container</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  placeholder="Add any relevant details about this asset..."
                  rows="3"
                  id="assetNotes"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400 resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setDeviceRegistrationStep(1)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back
                </button>
                <button
                  onClick={() => {
                    const name = document.getElementById("assetName").value;
                    const category =
                      document.getElementById("assetCategory").value;
                    if (name && category) {
                      setDeviceRegistrationStep(3);
                    } else {
                      alert(
                        "Please enter an asset name and select a category."
                      );
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {deviceRegistrationStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Pair Your Device
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-900 font-bold mb-3">
                      Pairing Instructions:
                    </p>
                    <ol className="text-blue-800 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">1.</span>
                        <span>
                          Ensure your device is powered on and charged
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">2.</span>
                        <span>Wait for the LED indicator to blink blue</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">3.</span>
                        <span>Click "Start Pairing" below to connect</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">4.</span>
                        <span>
                          Device will appear on your dashboard once connected
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="text-center py-8">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-orange-600" />
                  </div>
                </div>
                <p className="text-gray-700 font-semibold mb-2">
                  Ready to pair
                </p>
                <p className="text-sm text-gray-500">
                  Click the button below to start searching for your device
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setDeviceRegistrationStep(2)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back
                </button>
                <button
                  onClick={() => setDeviceRegistrationStep(4)}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Start Pairing
                  <Settings className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>
            </div>
          )}

          {deviceRegistrationStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Configure Settings
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tracking Interval <span className="text-red-500">*</span>
                </label>
                <select
                  id="trackingInterval"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                >
                  <option value="30">Every 30 seconds (High accuracy)</option>
                  <option value="60">Every 1 minute (Recommended)</option>
                  <option value="300">Every 5 minutes (Battery saving)</option>
                  <option value="600">
                    Every 10 minutes (Extended battery)
                  </option>
                </select>
                <p className="mt-2 text-xs text-gray-500">
                  Shorter intervals provide more accurate tracking but use more
                  battery
                </p>
              </div>

              <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Alert Settings
                </p>
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="geofencing"
                    className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <div>
                    <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors">
                      Enable geofencing alerts
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Get notified when device enters or exits defined zones
                    </p>
                  </div>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="speedAlerts"
                    className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <div>
                    <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors">
                      Enable speed alerts
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Receive alerts when speed limits are exceeded
                    </p>
                  </div>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="movementAlerts"
                    className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <div>
                    <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors">
                      Enable unauthorized movement alerts
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Get instant notifications if device moves unexpectedly
                    </p>
                  </div>
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setDeviceRegistrationStep(3)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back
                </button>
                <button
                  onClick={() => setDeviceRegistrationStep(5)}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Save & Activate
                  <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {deviceRegistrationStep === 5 && (
            <div className="text-center space-y-6 animate-fade-in py-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <CheckCircle className="relative w-20 h-20 text-green-500 mx-auto animate-scale-in" />
              </div>

              <h3 className="text-3xl font-bold text-blue-900">
                Device Registered Successfully!
              </h3>
              <p className="text-gray-600 text-lg">
                Your device is now active and tracking
              </p>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Device ID:</span>
                  <span className="text-green-800 font-bold">TRK-2024-001</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Status:</span>
                  <span className="flex items-center text-green-700 font-semibold">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    Last Update:
                  </span>
                  <span className="text-green-800 font-bold">Just now</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>What's next?</strong> Your device will start sending
                  location data within 1 minute. You can view it on your
                  dashboard and configure additional settings anytime.
                </p>
              </div>

              <button
                onClick={() => setActiveTab("home")}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
              >
                View Dashboard
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );

  const renderTopUp = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
              <CreditCard className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Airtime Top-Up
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Top Up Device Airtime
            </h2>
            <p className="text-gray-600">
              Keep your devices connected with our flexible data packages
            </p>
          </div>

          {/* Step Indicator */}
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
            {/* Active Progress Bar */}
            <div
              className="absolute top-5 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((topupStep - 1) / 2) * 100}%` }}
            ></div>

            {/* Steps */}
            <div className="relative flex justify-between">
              {[
                {
                  num: 1,
                  label: "Select Package",
                  icon: <Smartphone className="w-5 h-5" />,
                },
                {
                  num: 2,
                  label: "Payment",
                  icon: <CreditCard className="w-5 h-5" />,
                },
                {
                  num: 3,
                  label: "Complete",
                  icon: <CheckCircle className="w-5 h-5" />,
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center flex-1"
                >
                  {/* Step Circle */}
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      topupStep >= step.num
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50 scale-110"
                        : "bg-white border-2 border-gray-300"
                    }`}
                  >
                    {topupStep > step.num ? (
                      <CheckCircle className="w-6 h-6 text-white animate-scale-in" />
                    ) : (
                      <span
                        className={`font-bold ${
                          topupStep >= step.num ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {topupStep === step.num ? step.icon : step.num}
                      </span>
                    )}

                    {/* Pulse Animation for Active Step */}
                    {topupStep === step.num && (
                      <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>
                    )}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`mt-3 text-xs md:text-sm font-semibold transition-colors ${
                      topupStep >= step.num
                        ? "text-orange-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100">
          {topupStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Select Device & Package
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Device <span className="text-red-500">*</span>
                </label>
                <select
                  id="selectedDevice"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                >
                  <option value="">Choose a device</option>
                  <option value="TRK-2024-001">TRK-2024-001 (Truck 1)</option>
                  <option value="TRK-2024-002">TRK-2024-002 (Van A)</option>
                  <option value="TRK-2024-003">TRK-2024-003 (Generator)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Data Package <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {airTimePackages.map((pkg, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        document
                          .querySelectorAll(".package-card")
                          .forEach((el) =>
                            el.classList.remove(
                              "ring-2",
                              "ring-orange-500",
                              "border-orange-500"
                            )
                          );
                        document
                          .getElementById(`package-${index}`)
                          .classList.add(
                            "ring-2",
                            "ring-orange-500",
                            "border-orange-500"
                          );
                      }}
                      id={`package-${index}`}
                      className="package-card border-2 border-gray-300 rounded-xl p-5 hover:border-orange-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Smartphone className="w-6 h-6 text-orange-600" />
                        </div>
                        <h4 className="font-bold text-blue-900 text-xl mb-1">
                          {pkg.data}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {pkg.duration}
                        </p>
                        <p className="text-orange-500 font-bold text-2xl">
                          {pkg.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="autoRenewal"
                    className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <div>
                    <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors">
                      Enable auto-renewal
                    </span>
                    <p className="text-xs text-gray-600 mt-1">
                      Automatically renew this package when it expires to avoid
                      service interruption
                    </p>
                  </div>
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setActiveTab("home")}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const device =
                      document.getElementById("selectedDevice").value;
                    const hasSelectedPackage = document.querySelector(
                      ".package-card.ring-2"
                    );

                    if (device && hasSelectedPackage) {
                      setTopupStep(2);
                    } else {
                      alert("Please select a device and a data package.");
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Continue to Payment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {topupStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Choose Payment Method
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Payment Method <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        document
                          .querySelectorAll(".payment-card")
                          .forEach((el) =>
                            el.classList.remove(
                              "ring-2",
                              "ring-orange-500",
                              "border-orange-500",
                              "bg-orange-50"
                            )
                          );
                        document
                          .getElementById(`payment-${index}`)
                          .classList.add(
                            "ring-2",
                            "ring-orange-500",
                            "border-orange-500",
                            "bg-orange-50"
                          );
                      }}
                      id={`payment-${index}`}
                      className="payment-card border-2 border-gray-300 rounded-xl p-5 hover:border-orange-400 cursor-pointer transition-all duration-300 hover:shadow-lg group"
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                          {method.logo}
                        </div>
                        <p className="font-semibold text-blue-900">
                          {method.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Order Summary
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-700">Device:</span>
                    <span className="font-semibold text-blue-900">
                      TRK-2024-001
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-700">Package:</span>
                    <span className="font-semibold text-blue-900">
                      3GB - 30 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-white rounded-lg px-3 mt-3">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="font-bold text-orange-600 text-xl">
                      $12.00
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Money Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="mobileNumber"
                    placeholder="+263 77 123 4567"
                    className="w-full p-3 pl-11 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none hover:border-gray-400"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Enter the mobile money number for payment
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setTopupStep(1)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back
                </button>
                <button
                  onClick={() => {
                    const paymentMethod = document.querySelector(
                      ".payment-card.ring-2"
                    );
                    const mobileNumber =
                      document.getElementById("mobileNumber").value;

                    if (paymentMethod && mobileNumber) {
                      setTopupStep(3);
                    } else {
                      alert(
                        "Please select a payment method and enter your mobile money number."
                      );
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center group"
                >
                  Complete Payment
                  <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {topupStep === 3 && (
            <div className="text-center space-y-6 animate-fade-in py-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <CheckCircle className="relative w-20 h-20 text-green-500 mx-auto animate-scale-in" />
              </div>

              <h3 className="text-3xl font-bold text-blue-900">
                Payment Successful!
              </h3>
              <p className="text-gray-600 text-lg">
                Your device has been topped up successfully
              </p>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-green-200">
                  <span className="text-gray-700 font-medium">
                    Transaction ID:
                  </span>
                  <span className="font-bold text-green-800">
                    TXN-789123456
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-green-200">
                  <span className="text-gray-700 font-medium">Amount:</span>
                  <span className="font-bold text-green-800">$12.00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-green-200">
                  <span className="text-gray-700 font-medium">Data Added:</span>
                  <span className="font-bold text-green-800">3GB</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700 font-medium">Expires:</span>
                  <span className="font-bold text-green-800">Nov 02, 2025</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>Receipt sent!</strong> A confirmation has been sent to
                  your email and mobile number. Your device will be active
                  within 2 minutes.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setTopupStep(1);
                    document
                      .querySelectorAll(".package-card, .payment-card")
                      .forEach((el) => {
                        el.classList.remove(
                          "ring-2",
                          "ring-orange-500",
                          "border-orange-500",
                          "bg-orange-50"
                        );
                      });
                  }}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Top Up Another Device
                </button>
                <button
                  onClick={() => setActiveTab("home")}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group"
                >
                  Return to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );

  const renderFeatures = () => (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-orange-600 mr-2 fill-current" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
              Premium Features
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Comprehensive Tracking
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to monitor and protect your valuable assets with
            cutting-edge technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Large Feature Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">
                    Real-time Tracking Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Monitor all your assets from one powerful interface
                  </p>
                </div>
                <div className="hidden md:block w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Mock Dashboard */}
              <div className="relative bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl h-80 overflow-hidden mb-8 shadow-inner">
                {/* Grid Background */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                ></div>

                {/* Animated Markers */}
                <div
                  className="absolute top-1/4 left-1/4 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-50 animate-ping"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 right-1/3 animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "3.5s" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50 animate-ping"></div>
                    <div className="relative w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                      <MapPin className="w-5 h-5 text-white fill-current" />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-1/3 left-1/2 animate-bounce"
                  style={{ animationDelay: "0.5s", animationDuration: "4s" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 animate-ping"></div>
                    <div className="relative w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium">
                        Active Now
                      </p>
                      <p className="text-lg font-bold text-blue-900">
                        127 Devices
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="text-xs text-gray-600 font-medium">
                        Status
                      </p>
                      <p className="text-sm font-bold text-green-600">
                        All Protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group text-center p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-blue-900 mb-1">24/7</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Real-time Updates
                  </p>
                </div>
                <div className="group text-center p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-200">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-orange-500 mb-1">30s</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Update Interval
                  </p>
                </div>
                <div className="group text-center p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-green-500 mb-1">
                    99.9%
                  </p>
                  <p className="text-sm text-gray-600 font-medium">Uptime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Feature Cards */}
          <div className="space-y-6">
            <div className="group bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/50">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Advanced Security
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Multi-layer security with instant theft alerts and tamper
                detection
              </p>
              <ul className="space-y-3">
                {[
                  "Instant theft notifications",
                  "Tamper-proof installation",
                  "Unauthorized movement alerts",
                  "Emergency panic button",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/50">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Smart Analytics
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Detailed reports and insights to optimize your fleet operations
              </p>
              <ul className="space-y-3">
                {[
                  "Route optimization",
                  "Fuel consumption tracking",
                  "Driver behavior analysis",
                  "Maintenance scheduling",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Bell className="w-6 h-6" />,
              title: "Instant Alerts",
              description:
                "Get notified immediately about any suspicious activity",
              color: "from-purple-500 to-purple-600",
              bgColor: "from-purple-50 to-purple-100",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Global Coverage",
              description:
                "Track your assets anywhere in the world with reliable connectivity",
              color: "from-cyan-500 to-cyan-600",
              bgColor: "from-cyan-50 to-cyan-100",
            },
            {
              icon: <Battery className="w-6 h-6" />,
              title: "Long Battery Life",
              description:
                "Extended battery life ensures continuous tracking without interruption",
              color: "from-green-500 to-green-600",
              bgColor: "from-green-50 to-green-100",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-10 md:p-12 text-white shadow-2xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Join thousands of satisfied customers who trust our platform to
                protect their valuable assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActiveTab("enroll")}
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setActiveTab("support")}
                  className="group border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                <div className="relative inline-flex items-center justify-center w-40 h-40 bg-white/10 backdrop-blur-sm rounded-full border-4 border-white/20 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                  <Play className="w-16 h-16 text-white ml-2 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <p className="mt-6 text-blue-100 font-semibold text-lg">
                Watch Demo Video
              </p>
              <p className="text-blue-300 text-sm">
                See how it works in 2 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );

  const renderPricing = () => (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent uppercase tracking-wider">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your tracking needs with no hidden fees
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "ring-4 ring-orange-500 shadow-2xl shadow-orange-500/20 scale-105"
                  : "hover:shadow-2xl border border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-50"></div>
                    <span className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center">
                {/* Plan Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    plan.popular
                      ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50"
                      : "bg-gradient-to-br from-blue-100 to-blue-50"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {index === 0 && (
                    <Shield
                      className={`w-8 h-8 ${
                        plan.popular ? "text-white" : "text-blue-600"
                      }`}
                    />
                  )}
                  {index === 1 && (
                    <Star
                      className={`w-8 h-8 ${
                        plan.popular ? "text-white" : "text-blue-600"
                      } fill-current`}
                    />
                  )}
                  {index === 2 && (
                    <Crown
                      className={`w-8 h-8 ${
                        plan.popular ? "text-white" : "text-blue-600"
                      }`}
                    />
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2 mb-2">
                      /{plan.period.split(" ")[1]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Billed monthly</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => setActiveTab("enroll")}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/50"
                      : "bg-blue-50 hover:bg-blue-100 text-blue-900"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Data Packages Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
              <Smartphone className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Data Packages
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Device Airtime Packages
            </h3>
            <p className="text-gray-600 text-lg">
              Flexible data plans to keep your devices connected
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {airTimePackages.map((pkg, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Data Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7 text-orange-600" />
                </div>

                {/* Package Details */}
                <div className="text-center mb-6">
                  <h4 className="text-3xl font-bold text-blue-900 mb-2">
                    {pkg.data}
                  </h4>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-orange-500 blur-lg opacity-20"></div>
                    <p className="relative text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </p>
                  </div>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => setActiveTab("topup")}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center"
                >
                  Select Package
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle className="w-5 h-5" />,
                text: "No setup fees or hidden charges",
              },
              {
                icon: <RefreshCw className="w-5 h-5" />,
                text: "Auto-renewal available",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                text: "Secure payment processing",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 text-gray-600"
              >
                <div className="text-green-500">{item.icon}</div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Questions about pricing?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you choose the right plan
          </p>
          <button
            onClick={() => setActiveTab("support")}
            className="inline-flex items-center px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Sales Team
          </button>
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Headphones className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Support Center
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            We're Here to
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Help You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get support when you need it, how you need it
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Support Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">
                Contact Support
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone Support",
                  value: "+263 77 123 4567",
                  detail: "Mon-Fri, 8AM-6PM",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Support",
                  value: "support@thistracker.com",
                  detail: "Response within 2 hours",
                  color: "from-green-500 to-green-600",
                  bgColor: "bg-green-50",
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "WhatsApp",
                  value: "+263 77 123 4567",
                  detail: "24/7 Available",
                  color: "from-emerald-500 to-emerald-600",
                  bgColor: "bg-emerald-50",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200"
                >
                  <div
                    className={`w-14 h-14 ${contact.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-gray-700">{contact.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-gray-700 font-semibold">
                      {contact.value}
                    </p>
                    <p className="text-sm text-gray-500">{contact.detail}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-orange-500" />
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Enroll Now", tab: "enroll", color: "orange" },
                  { label: "Register Device", tab: "register", color: "blue" },
                  { label: "Top Up Airtime", tab: "topup", color: "green" },
                  {
                    label: "Live Chat",
                    action: () => setChatOpen(true),
                    color: "purple",
                  },
                ].map((action, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      action.tab ? setActiveTab(action.tab) : action.action()
                    }
                    className={`bg-${action.color}-100 hover:bg-${action.color}-200 text-${action.color}-800 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">FAQs</h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  question: "How do I register a new device?",
                  answer:
                    'Simply click "Register Device", enter your device serial number, and follow the step-by-step instructions.',
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept EcoCash, OneMoney, TeleCash, bank transfers, and major credit cards.",
                },
                {
                  question: "How often does the device update location?",
                  answer:
                    "Default is every 30 seconds, but you can configure intervals from 10 seconds to 10 minutes.",
                },
                {
                  question: "Can I track multiple vehicles?",
                  answer:
                    "Yes! Our platform supports unlimited devices. Each device can be managed separately.",
                },
                {
                  question: "What happens if my device runs out of data?",
                  answer:
                    "You'll receive alerts before your data expires, and you can top up instantly through our platform.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-900 pr-4">
                      {faq.question}
                    </h4>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-900 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-md flex items-center justify-center group">
              View All FAQs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-10 md:p-12 text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Headphones className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  24/7 Support
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-orange-100 text-lg max-w-2xl mx-auto">
                Our support team is standing by to help you with any questions
                or technical issues.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +263 77 123 4567
              </button>
              <button
                onClick={() => setChatOpen(true)}
                className="group border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 animate-slide-up">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-white">Support Chat</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-orange-100">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  } rounded-2xl px-4 py-3 shadow-sm`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span
                    className={`text-xs mt-1 block ${
                      message.sender === "user"
                        ? "text-orange-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && chatInput.trim()) {
                    const newMessage = {
                      id: chatMessages.length + 1,
                      sender: "user",
                      text: chatInput,
                      time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                    };
                    setChatMessages([...chatMessages, newMessage]);
                    setChatInput("");

                    // Simulate bot response
                    setTimeout(() => {
                      setChatMessages((prev) => [
                        ...prev,
                        {
                          id: prev.length + 1,
                          sender: "bot",
                          text: "Thank you for your message! A support agent will respond shortly.",
                          time: new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        },
                      ]);
                    }, 1000);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
              />
              <button
                onClick={() => {
                  if (chatInput.trim()) {
                    const newMessage = {
                      id: chatMessages.length + 1,
                      sender: "user",
                      text: chatInput,
                      time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                    };
                    setChatMessages([...chatMessages, newMessage]);
                    setChatInput("");

                    setTimeout(() => {
                      setChatMessages((prev) => [
                        ...prev,
                        {
                          id: prev.length + 1,
                          sender: "bot",
                          text: "Thank you for your message! A support agent will respond shortly.",
                          time: new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        },
                      ]);
                    }, 1000);
                  }
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button (when closed) */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 animate-bounce"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHome();
      case "enroll":
        return renderEnrollment();
      case "register":
        return renderDeviceRegistration();
      case "topup":
        return renderTopUp();
      case "features":
        return renderFeatures();
      case "pricing":
        return renderPricing();
      case "support":
        return renderSupport();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-20 h-20  rounded-xl flex items-center justify-center shadow-lg group-hover:scale-150 transition-transform duration-300">
                  <img src="logo.png" alt="Logo" style={{ width: "200%" }} />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  ThisTracker
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Asset Tracking Platform
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      activeTab === item.id
                        ? "text-white"
                        : "text-blue-900 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    {activeTab === item.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg"></span>
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {activeTab === item.id && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white"></span>
                    )}
                  </button>
                ))}

                {/* CTA Button */}
                <button
                  onClick={() => setActiveTab("enroll")}
                  className="ml-4 group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center"
                >
                  <Plus className="w-4 h-4 mr-1 group-hover:rotate-90 transition-transform duration-300" />
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 text-blue-900 hover:text-orange-500 focus:outline-none transition-colors duration-300"
              >
                <span className="sr-only">Open menu</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`transition-all duration-300 ${
                      mobileMenuOpen
                        ? "rotate-180 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  >
                    <Menu className="w-6 h-6" />
                  </div>
                  <div
                    className={`absolute transition-all duration-300 ${
                      mobileMenuOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-180 opacity-0"
                    }`}
                  >
                    <X className="w-6 h-6" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-2 bg-gradient-to-br from-gray-50 to-blue-50 rounded-b-2xl border-t border-gray-100">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold w-full text-left transition-all duration-300 transform ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                      : "text-blue-900 hover:bg-white hover:shadow-md hover:scale-102"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: mobileMenuOpen
                      ? "slideIn 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {activeTab === item.id && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </span>
                </button>
              ))}

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  setActiveTab("enroll");
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* Custom Animation */}
        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </nav>

      {/* Main Content */}
      <main>{renderContent()}</main>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 grid md:grid-cols-4 gap-8 border-b border-white/10">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <img src="logo.png" alt="Logo" style={{ width: "200%" }} />
                </div>
                <div className="ml-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    ThisTracker
                  </h3>
                  <p className="text-xs text-blue-300">Asset Protection</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Zimbabwe's leading GPS tracking solution. Real-time monitoring,
                advanced security, and peace of mind for your valuable assets.
              </p>
              <div className="flex space-x-3">
                <button className="group w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                  <MessageCircle className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                </button>
                <button className="group w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                  <Mail className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                </button>
                <button className="group w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                  <Phone className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mr-2"></span>
                Quick Actions
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setActiveTab("enroll")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Enroll Now
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("register")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <Smartphone className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Register Device
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("topup")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <CreditCard className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Top Up Airtime
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("features")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <Shield className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      View Features
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("pricing")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <DollarSign className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      See Pricing
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div>
              <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mr-2"></span>
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setActiveTab("support")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <BookOpen className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Help Center
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("support")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Live Chat Support
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("support")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <Settings className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Installation Guide
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("support")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <AlertCircle className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Troubleshooting
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("support")}
                    className="group flex items-center text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <FileText className="w-4 h-4 mr-2 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      API Documentation
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Apps */}
            <div>
              <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mr-2"></span>
                Get In Touch
              </h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      +263 77 123 4567
                    </p>
                    <p className="text-xs text-slate-400">Mon-Fri, 8AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      support@thistracker.com
                    </p>
                    <p className="text-xs text-slate-400">
                      Response in 2 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Harare, Zimbabwe
                    </p>
                    <p className="text-xs text-slate-400">Visit our office</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Download App
                </p>
                <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-lg transition-all duration-300 text-left flex items-center space-x-3 group border border-white/10 hover:border-orange-500/50">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Get it on</p>
                    <p className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                      Google Play
                    </p>
                  </div>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-lg transition-all duration-300 text-left flex items-center space-x-3 group border border-white/10 hover:border-orange-500/50">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Download on</p>
                    <p className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                      App Store
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-400">
                <button className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </button>
                <span className="text-slate-600">•</span>
                <button className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </button>
                <span className="text-slate-600">•</span>
                <button className="hover:text-orange-400 transition-colors">
                  Cookie Policy
                </button>
                <span className="text-slate-600">•</span>
                <button className="hover:text-orange-400 transition-colors">
                  Sitemap
                </button>
              </div>
              <p className="text-sm text-slate-400">
                © 2024{" "}
                <span className="text-white font-semibold">ThisTracker</span>.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
