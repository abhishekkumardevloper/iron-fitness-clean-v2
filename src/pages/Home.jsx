import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, Users, Trophy, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { programs } from '../mock';

export const Home = () => {
  const stats = [
    { icon: Users, value: '2000+', label: 'Active Members' },
    { icon: Dumbbell, value: '50+', label: 'Training Programs' },
    { icon: Trophy, value: '15', label: 'Years Experience' },
    { icon: Target, value: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#C30000] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C30000] rounded-full blur-[150px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-[#C30000]/20 text-[#C30000] px-4 py-2 rounded-full text-sm font-semibold border border-[#C30000]/30">
                Elite Fitness Training
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Forge Your Body.
              <br />
              <span className="text-[#C30000]">Build Your Strength.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your life through discipline, power, and dedication. Join the elite community of warriors committed to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#C30000] hover:bg-[#A30000] text-white font-semibold px-8 py-6 text-lg group">
                  Join Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
                  Book Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#C30000] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0B0B0B] border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C30000]/10 rounded-xl mb-4 group-hover:bg-[#C30000]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#C30000]" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#C30000]">Programs</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our elite training programs designed to push your limits and achieve extraordinary results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 3).map((program) => (
              <div
                key={program.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#C30000]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#C30000]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C30000]/20 transition-colors">
                  <Dumbbell className="w-6 h-6 text-[#C30000]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                <Link to="/programs" className="text-[#C30000] font-semibold inline-flex items-center hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs">
              <Button className="bg-[#C30000] hover:bg-[#A30000] text-white font-semibold px-8">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B0B0B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C30000] rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-[#C30000]">Transform</span> Your Life?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of members who have achieved their fitness goals with Iron Fitness.
            </p>
            <Link to="/contact">
              <Button className="bg-[#C30000] hover:bg-[#A30000] text-white font-semibold px-10 py-6 text-lg">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
