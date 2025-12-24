import React from 'react';
import { testimonials } from '../mock';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
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
              Success <span className="text-[#C30000]">Stories</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Real transformations from real people who chose to become extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-[#C30000]/50 transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-[#C30000]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-[#C30000] fill-[#C30000]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Transformation Badge */}
                <div className="inline-block bg-[#C30000]/10 border border-[#C30000]/30 rounded-full px-4 py-1 mb-4">
                  <span className="text-[#C30000] text-sm font-semibold">{testimonial.transformation}</span>
                </div>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Proven <span className="text-[#C30000]">Results</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#C30000] mb-2">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C30000] mb-2">1000+</div>
                <div className="text-gray-400 text-sm">Transformations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C30000] mb-2">4.9/5</div>
                <div className="text-gray-400 text-sm">Avg Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C30000] mb-2">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
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
              Your Story <span className="text-[#C30000]">Starts Here</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands who have transformed their lives. Your success story is waiting to be written.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
