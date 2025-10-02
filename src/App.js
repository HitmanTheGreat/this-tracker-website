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
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Track Your Assets in{" "}
              <span className="text-orange-400">Real-Time</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Secure, efficient, and reliable vehicle tracking for peace of mind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab("enroll")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Enroll Now
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Register Device
              </button>
              <button
                onClick={() => setActiveTab("topup")}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Top Up Airtime
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600">
            Advanced features designed to keep your assets safe and secure
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
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
    <div className="max-w-2xl mx-auto py-16 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Create Your Account
          </h2>
          <div className="flex items-center space-x-4 mb-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    enrollmentStep >= step
                      ? "bg-orange-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {enrollmentStep > step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-1 ${
                      enrollmentStep > step ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {enrollmentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Account Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              onClick={() => setEnrollmentStep(2)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {enrollmentStep === 2 && (
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Verify Your Account
            </h3>
            <p className="text-gray-600">
              We've sent a verification code to your email and phone
            </p>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              ))}
            </div>
            <button
              onClick={() => setEnrollmentStep(3)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Verify
            </button>
          </div>
        )}

        {enrollmentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Complete Your Profile
            </h3>
            <div className="space-y-4">
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Account Type</option>
                <option>Individual</option>
                <option>Business</option>
              </select>
              <input
                type="text"
                placeholder="Organization Name (Optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <textarea
                placeholder="Tell us about your tracking needs"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <button
                onClick={() => setEnrollmentStep(4)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Complete Setup
              </button>
            </div>
          </div>
        )}

        {enrollmentStep === 4 && (
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-900">
              Welcome Aboard!
            </h3>
            <p className="text-gray-600">
              Your account has been created successfully
            </p>
            <button
              onClick={() => setActiveTab("register")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Register Your First Device
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderDeviceRegistration = () => (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Register Your Device
          </h2>
          <div className="flex items-center space-x-4 mb-6">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    deviceRegistrationStep >= step
                      ? "bg-orange-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {deviceRegistrationStep > step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < 5 && (
                  <div
                    className={`w-12 h-1 ${
                      deviceRegistrationStep > step
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {deviceRegistrationStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Device Details
            </h3>
            <input
              type="text"
              placeholder="Device Serial Number / IMEI"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <div className="text-center py-4">
              <p className="text-gray-600 mb-2">Or scan QR code</p>
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-4 py-2 rounded-lg transition-colors">
                📷 Scan QR Code
              </button>
            </div>
            <button
              onClick={() => setDeviceRegistrationStep(2)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {deviceRegistrationStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Asset Information
            </h3>
            <input
              type="text"
              placeholder="Asset Name (e.g., Truck 1, Generator A)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
              <option>Select Category</option>
              <option>Vehicle</option>
              <option>Equipment</option>
              <option>Livestock</option>
              <option>Container</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Additional Notes (Optional)"
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              onClick={() => setDeviceRegistrationStep(3)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {deviceRegistrationStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Pair Your Device
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">
                Pairing Instructions:
              </p>
              <ol className="text-blue-800 space-y-1 text-sm">
                <li>1. Ensure your device is powered on</li>
                <li>2. Wait for the LED to blink blue</li>
                <li>3. Click "Pair Device" below</li>
                <li>4. Device should appear on your dashboard</li>
              </ol>
            </div>
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-gray-600 mb-4">Searching for device...</p>
            </div>
            <button
              onClick={() => setDeviceRegistrationStep(4)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Pair Device
            </button>
          </div>
        )}

        {deviceRegistrationStep === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Configure Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tracking Interval
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option>Every 30 seconds</option>
                  <option>Every 1 minute</option>
                  <option>Every 5 minutes</option>
                  <option>Every 10 minutes</option>
                </select>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-gray-700">
                    Enable geofencing alerts
                  </span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-gray-700">Enable speed alerts</span>
                </label>
              </div>
              <button
                onClick={() => setDeviceRegistrationStep(5)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Save & Activate
              </button>
            </div>
          </div>
        )}

        {deviceRegistrationStep === 5 && (
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-900">
              Device Registered Successfully!
            </h3>
            <p className="text-gray-600">
              Your device is now active and tracking
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                <strong>Device ID:</strong> TRK-2024-001
              </p>
              <p className="text-green-800">
                <strong>Status:</strong> Active
              </p>
              <p className="text-green-800">
                <strong>Last Update:</strong> Just now
              </p>
            </div>
            <button
              onClick={() => setActiveTab("home")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              View Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderTopUp = () => (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Top Up Device Airtime
          </h2>
          <div className="flex items-center space-x-4 mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    topupStep >= step
                      ? "bg-orange-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {topupStep > step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-1 ${
                      topupStep > step ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {topupStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-900">
              Select Device & Package
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Device
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>TRK-2024-001 (Truck 1)</option>
                <option>TRK-2024-002 (Van A)</option>
                <option>TRK-2024-003 (Generator)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Data Package
              </label>
              <div className="grid grid-cols-2 gap-4">
                {airTimePackages.map((pkg, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 hover:border-orange-500 cursor-pointer transition-colors"
                  >
                    <div className="text-center">
                      <h4 className="font-semibold text-blue-900">
                        {pkg.data}
                      </h4>
                      <p className="text-gray-600 text-sm">{pkg.duration}</p>
                      <p className="text-orange-500 font-bold text-lg">
                        {pkg.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700">Enable auto-renewal</span>
              </label>
            </div>
            <button
              onClick={() => setTopupStep(2)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        )}

        {topupStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-900">
              Choose Payment Method
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 hover:border-orange-500 cursor-pointer transition-colors"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{method.logo}</div>
                    <p className="font-semibold text-blue-900">{method.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">
                Order Summary
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Device:</span>
                  <span>TRK-2024-001</span>
                </div>
                <div className="flex justify-between">
                  <span>Package:</span>
                  <span>3GB - 30 days</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>$12.00</span>
                </div>
              </div>
            </div>
            <input
              type="tel"
              placeholder="Enter your mobile money number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              onClick={() => setTopupStep(3)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Complete Payment
            </button>
          </div>
        )}

        {topupStep === 3 && (
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-900">
              Payment Successful!
            </h3>
            <p className="text-gray-600">
              Your device has been topped up successfully
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="font-semibold">TXN-789123456</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">$12.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Added:</span>
                  <span className="font-semibold">3GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Expires:</span>
                  <span className="font-semibold">Oct 19, 2025</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveTab("home")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Return to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Comprehensive Tracking Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to monitor and protect your valuable assets
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Real-time Tracking Dashboard
              </h3>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-600">Live Map View</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-900">24/7</p>
                  <p className="text-sm text-gray-600">Real-time Updates</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-500">5m</p>
                  <p className="text-sm text-gray-600">Update Interval</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-500">99.9%</p>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <Shield className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Advanced Security
              </h3>
              <p className="text-gray-600 mb-4">
                Multi-layer security with instant theft alerts and tamper
                detection
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Instant theft notifications</li>
                <li>• Tamper-proof installation</li>
                <li>• Unauthorized movement alerts</li>
                <li>• Emergency panic button</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6">
              <BarChart3 className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Smart Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed reports and insights to optimize your fleet operations
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Route optimization</li>
                <li>• Fuel consumption tracking</li>
                <li>• Driver behavior analysis</li>
                <li>• Maintenance scheduling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of satisfied customers who trust our platform to
                protect their valuable assets.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab("enroll")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </button>
                <button
                  onClick={() => setActiveTab("support")}
                  className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white bg-opacity-10 rounded-full">
                <Play className="w-12 h-12 text-white ml-1" />
              </div>
              <p className="mt-4 text-blue-100">Watch Demo Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your tracking needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-xl p-8 ${
                plan.popular ? "ring-4 ring-orange-500 relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600"> {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-900"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Data & Airtime Packages
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {airTimePackages.map((pkg, index) => (
              <div
                key={index}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
              >
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  {pkg.data}
                </h4>
                <p className="text-gray-600 mb-2">{pkg.duration}</p>
                <p className="text-2xl font-bold text-orange-500">
                  {pkg.price}
                </p>
                <button className="mt-4 w-full bg-orange-100 hover:bg-orange-200 text-orange-800 py-2 rounded-lg font-semibold transition-colors">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            We're Here to Help
          </h2>
          <p className="text-xl text-gray-600">
            Get support when you need it, how you need it
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Contact Support
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Phone Support</h4>
                  <p className="text-gray-600">+263 77 123 4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 8AM-6PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Email Support</h4>
                  <p className="text-gray-600">support@thistracker.com</p>
                  <p className="text-sm text-gray-500">
                    Response within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">WhatsApp</h4>
                  <p className="text-gray-600">+263 77 123 4567</p>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-blue-900 mb-4">
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveTab("enroll")}
                  className="bg-orange-100 hover:bg-orange-200 text-orange-800 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                >
                  Register Device
                </button>
                <button
                  onClick={() => setActiveTab("topup")}
                  className="bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                >
                  Top Up Airtime
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                  Live Chat
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  How do I register a new device?
                </h4>
                <p className="text-gray-600 text-sm">
                  Simply click "Register Device", enter your device serial
                  number, and follow the step-by-step instructions.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-600 text-sm">
                  We accept EcoCash, OneMoney, TeleCash, bank transfers, and
                  major credit cards.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  How often does the device update location?
                </h4>
                <p className="text-gray-600 text-sm">
                  Default is every 30 seconds, but you can configure intervals
                  from 10 seconds to 10 minutes.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Can I track multiple vehicles?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes! Our platform supports unlimited devices. Each device can
                  be managed separately.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  What happens if my device runs out of data?
                </h4>
                <p className="text-gray-600 text-sm">
                  You'll receive alerts before your data expires, and you can
                  top up instantly through our platform.
                </p>
              </div>
            </div>

            <button className="mt-6 w-full bg-blue-100 hover:bg-blue-200 text-blue-900 py-3 rounded-lg font-semibold transition-colors">
              View All FAQs
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-orange-100 mb-6">
            Our support team is standing by to help you with any questions or
            technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              📞 Call Now: +263 77 123 4567
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              💬 Start Live Chat
            </button>
          </div>
        </div>
      </div>
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
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-blue-900">ThisTracker</h1>
                <p className="text-xs text-gray-600">Asset Tracking Platform</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? "bg-orange-500 text-white"
                        : "text-blue-900 hover:bg-blue-100"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-blue-900 hover:text-orange-500"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-orange-500 text-white"
                        : "text-blue-900 hover:bg-blue-100"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <Car className="w-7 h-7 text-white" />
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
