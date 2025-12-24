// Mock data for Iron Fitness

export const programs = [
  {
    id: 1,
    title: 'Strength Training',
    description: 'Build raw power and functional strength with compound movements and progressive overload.',
    icon: 'Dumbbell',
    features: ['Progressive Overload', 'Compound Movements', 'Power Building', 'Core Strength']
  },
  {
    id: 2,
    title: 'Bodybuilding',
    description: 'Sculpt your physique with targeted muscle hypertrophy and aesthetic-focused training.',
    icon: 'Flame',
    features: ['Muscle Hypertrophy', 'Split Training', 'Aesthetic Focus', 'Nutrition Guidance']
  },
  {
    id: 3,
    title: 'Weight Loss',
    description: 'Transform your body through metabolic conditioning and strategic fat-burning protocols.',
    icon: 'TrendingDown',
    features: ['Fat Burning', 'Cardio Programs', 'Nutrition Plans', 'Body Recomposition']
  },
  {
    id: 4,
    title: 'Cross Training',
    description: 'Develop overall fitness with varied, high-intensity functional movements.',
    icon: 'Zap',
    features: ['Functional Fitness', 'HIIT Workouts', 'Mobility Work', 'Athletic Performance']
  },
  {
    id: 5,
    title: 'Personal Training',
    description: 'One-on-one customized coaching tailored to your specific goals and needs.',
    icon: 'Target',
    features: ['Custom Programs', '1-on-1 Coaching', 'Goal Setting', 'Progress Tracking']
  }
];

export const trainers = [
  {
    id: 1,
    name: 'Marcus Steel',
    title: 'Head Strength Coach',
    certifications: ['CSCS', 'NASM-CPT', 'USA Weightlifting'],
    specialty: 'Strength & Conditioning',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Diana Forge',
    title: 'Bodybuilding Specialist',
    certifications: ['IFBB Pro', 'ACE-CPT', 'Precision Nutrition'],
    specialty: 'Hypertrophy & Aesthetics',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Victor Blade',
    title: 'CrossFit Coach',
    certifications: ['CF-L2', 'NASM-PES', 'FMS'],
    specialty: 'Functional Fitness',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Sophia Iron',
    title: 'Transformation Coach',
    certifications: ['NASM-CPT', 'PN-1', 'Behavioral Change Specialist'],
    specialty: 'Weight Loss & Lifestyle',
    experience: '9 years',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop'
  }
];

export const membershipPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 49,
    period: 'month',
    popular: false,
    features: [
      'Gym Access (6am-10pm)',
      'Basic Equipment',
      'Locker Room Access',
      'Free Wi-Fi',
      'Monthly Progress Check'
    ]
  },
  {
    id: 2,
    name: 'Premium',
    price: 79,
    period: 'month',
    popular: true,
    features: [
      '24/7 Gym Access',
      'All Equipment & Classes',
      'Group Training Sessions',
      'Nutrition Consultation',
      'Weekly Progress Tracking',
      'Sauna & Steam Room'
    ]
  },
  {
    id: 3,
    name: 'Elite',
    price: 129,
    period: 'month',
    popular: false,
    features: [
      '24/7 VIP Access',
      'Personal Training (4 sessions/month)',
      'Custom Meal Plans',
      'Body Composition Analysis',
      'Priority Equipment Access',
      'Recovery Zone Access',
      'Guest Passes (2/month)'
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Jake Morrison',
    role: 'Software Engineer',
    content: 'Iron Fitness transformed my life. Lost 40 pounds in 6 months and gained strength I never thought possible. The trainers are exceptional.',
    rating: 5,
    transformation: 'Lost 40 lbs'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Marketing Director',
    content: 'Best gym investment ever. The community is supportive, equipment is top-notch, and I finally achieved the physique I always wanted.',
    rating: 5,
    transformation: 'Built lean muscle'
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'Entrepreneur',
    content: 'From zero to hero. The personal training program helped me go from overweight to competing in my first powerlifting meet.',
    rating: 5,
    transformation: 'Gained 50 lbs strength'
  },
  {
    id: 4,
    name: 'Emily Richards',
    role: 'Teacher',
    content: 'The trainers genuinely care about your progress. The atmosphere is motivating and the results speak for themselves.',
    rating: 5,
    transformation: 'Complete transformation'
  }
];

export const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', category: 'gym' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop', category: 'workout' },
  { id: 3, url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop', category: 'gym' },
  { id: 4, url: 'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&h=600&fit=crop', category: 'equipment' },
  { id: 5, url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop', category: 'workout' },
  { id: 6, url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop', category: 'gym' },
  { id: 7, url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop', category: 'equipment' },
  { id: 8, url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop', category: 'workout' }
];

export const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'info@ironfitness.com',
  address: '2450 Muscle Avenue, Strength District, CA 90210',
  hours: {
    weekdays: '5:00 AM - 11:00 PM',
    weekends: '6:00 AM - 10:00 PM'
  },
  social: {
    facebook: 'https://facebook.com/ironfitness',
    instagram: 'https://instagram.com/ironfitness',
    twitter: 'https://twitter.com/ironfitness',
    youtube: 'https://youtube.com/ironfitness'
  }
};
