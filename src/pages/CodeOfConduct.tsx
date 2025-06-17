import React from 'react';
import { Users, Calendar, Edit3 } from 'lucide-react';

const CodeOfConduct: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="text-white" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Code of Conduct
          </h1>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Calendar size={16} />
            <span>Last updated: January 15, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          
          {/* Placeholder Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3 mb-3">
              <Edit3 className="text-yellow-600" size={20} />
              <h3 className="text-lg font-semibold text-yellow-800">Content Placeholder</h3>
            </div>
            <p className="text-yellow-700 leading-relaxed">
              This section contains sample content. Please replace with your actual Code of Conduct. 
              You can edit this content directly in the <code className="bg-yellow-100 px-2 py-1 rounded text-sm">src/pages/CodeOfConduct.tsx</code> file.
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            
            {/* YOUR CONTENT GOES HERE - Replace everything below with your actual code of conduct */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Commitment</h2>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [Write your commitment statement about creating an inclusive, welcoming community for all users.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Our Values</h2>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [List your core community values: respect, inclusivity, collaboration, integrity, etc.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Expected Behavior</h2>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [Define what positive behavior looks like in your community: respectful communication, constructive feedback, etc.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Unacceptable Behavior</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Harassment and Discrimination</h3>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-slate-600 italic">
                  [List behaviors that constitute harassment: offensive comments, threats, unwelcome attention, etc.]
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Disruptive Behavior</h3>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-slate-600 italic">
                  [Define disruptive behaviors: trolling, spamming, derailing conversations, etc.]
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Illegal or Harmful Activities</h3>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [List illegal activities and harmful behaviors that are prohibited.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Reporting and Enforcement</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">How to Report</h3>
              <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
                <p className="text-slate-700 font-medium">Email: conduct@otanuapp.com</p>
                <p className="text-slate-700 font-medium">Emergency: urgent@otanuapp.com</p>
                <p className="text-slate-600 text-sm mt-2">
                  [Replace with your actual contact information for reporting violations]
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Response Process</h3>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [Explain your process for handling reports: investigation timeline, privacy protection, follow-up, etc.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Consequences</h2>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [List potential consequences for violations: warnings, temporary suspension, permanent ban, legal action, etc.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Appeals Process</h2>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [Explain how users can appeal decisions and the timeline for appeals.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Scope</h2>
              <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-slate-600 italic">
                  [Define where this code of conduct applies: your platform, events, social media, etc.]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Contact Information</h2>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 font-medium">Community Team: conduct@otanuapp.com</p>
                <p className="text-slate-700 font-medium">Appeals Committee: appeals@otanuapp.com</p>
                <p className="text-slate-700 font-medium">Emergency Contact: urgent@otanuapp.com</p>
                <p className="text-slate-600 text-sm mt-2">
                  [Replace with your actual contact information for community matters]
                </p>
              </div>
            </section>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mt-8">
              <p className="text-yellow-800 font-medium text-center">
                Thank you for helping us create a welcoming and inclusive community for everyone.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;