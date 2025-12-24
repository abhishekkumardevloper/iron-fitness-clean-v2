import React from 'react';
import { trainers } from '../mock';
import { Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export const Trainers = () => {
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
              Meet Our <span className="text-[#C30000]">Trainers</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              World-class coaches dedicated to your transformation and success.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-[#C30000]/50 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#C30000]/20 to-transparent">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-[#C30000] text-sm font-semibold mb-4">{trainer.title}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#C30000] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Specialty</p>
                        <p className="text-white text-sm font-medium">{trainer.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#C30000] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Experience</p>
                        <p className="text-white text-sm font-medium">{trainer.experience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="bg-[#C30000]/10 text-[#C30000] text-xs px-2 py-1 rounded border border-[#C30000]/30"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Train with the <span className="text-[#C30000]">Best</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get personalized coaching from certified professionals who are committed to your success.
            </p>
            <Link to="/contact">
              <Button className="bg-[#C30000] hover:bg-[#A30000] text-white font-semibold px-10 py-6 text-lg">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
