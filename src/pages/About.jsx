import React from 'react';
import { Shield, Target, Heart, Award } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Discipline',
      description: 'We believe in the power of consistent effort and unwavering commitment to your goals.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We push boundaries and refuse to settle for mediocrity in training or results.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We build a supportive environment where warriors motivate and inspire each other.'
    },
    {
      icon: Award,
      title: 'Results',
      description: 'We deliver measurable transformations through proven methods and expert guidance.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#C30000] rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#C30000]">Iron Fitness</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Where strength meets discipline, and ordinary people become extraordinary athletes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our <span className="text-[#C30000]">Story</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Iron Fitness was born from a simple belief: that true strength comes from the forge of discipline, dedication, and relentless pursuit of excellence. Founded in 2010, we started as a small garage gym with a vision to create a space where individuals could transform not just their bodies, but their entire lives.
              </p>
              <p>
                Over the past 15 years, we've grown into one of the most respected fitness facilities in the region, but our core mission remains unchanged. We're not just a gym—we're a community of warriors who push each other to break through limits and achieve the impossible.
              </p>
              <p>
                Every piece of equipment, every training program, and every coach at Iron Fitness is dedicated to one purpose: helping you forge the strongest version of yourself. Whether you're taking your first step into fitness or you're a seasoned athlete, we provide the tools, knowledge, and support to reach your peak potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our <span className="text-[#C30000]">Mission</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To empower individuals to achieve extraordinary physical and mental transformations through world-class training, expert coaching, and an unmatched community atmosphere. We're committed to making elite fitness accessible while maintaining the highest standards of excellence.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our <span className="text-[#C30000]">Vision</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To become the gold standard in fitness training, known for producing not just strong bodies, but resilient minds and unbreakable spirits. We envision a world where everyone has access to the tools and knowledge needed to unlock their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#C30000]">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Iron Fitness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-[#C30000]/50 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C30000]/10 rounded-xl mb-4 group-hover:bg-[#C30000]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#C30000]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-[#C30000] to-[#A30000]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-white/90">Active Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Training Programs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
