import React from 'react';
import { Dumbbell, Flame, TrendingDown, Zap, Target, Check } from 'lucide-react';
import { programs } from '../mock';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const iconMap = {
  Dumbbell,
  Flame,
  TrendingDown,
  Zap,
  Target
};

export const Programs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#C30000] rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training <span className="text-[#C30000]">Programs</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Elite programs designed to transform your body and unlock your full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program) => {
              const Icon = iconMap[program.icon] || Dumbbell;
              return (
                <div
                  key={program.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-[#C30000]/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#C30000]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C30000]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#C30000]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                      <div className="space-y-2 mb-6">
                        {program.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-[#C30000] flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact">
                        <Button className="bg-[#C30000] hover:bg-[#A30000] text-white font-semibold">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Why <span className="text-[#C30000]">Choose Us?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C30000]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#C30000]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Coaching</h3>
                <p className="text-gray-400 text-sm">Certified trainers with decades of combined experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C30000]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-8 h-8 text-[#C30000]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Premium Equipment</h3>
                <p className="text-gray-400 text-sm">State-of-the-art training facilities and gear</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C30000]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-[#C30000]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400 text-sm">95% success rate with measurable transformations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-[#C30000]">Start Training?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Choose your program and begin your transformation journey today.
            </p>
            <Link to="/contact">
              <Button className="bg-[#C30000] hover:bg-[#A30000] text-white font-semibold px-10 py-6 text-lg">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
