// Mock data for Gold's Gym

export const programs = [
  {
    id: 1,
    title: 'Strength & Conditioning',
    description: 'Build serious strength with scientifically designed programs trusted by professionals worldwide.',
    icon: 'Dumbbell',
    features: ['Progressive Strength', 'Compound Lifts', 'Muscle Power', 'Core Stability']
  },
  {
    id: 2,
    title: 'Bodybuilding & Physique',
    description: 'Classic Gold’s Gym bodybuilding programs focused on muscle size, symmetry, and aesthetics.',
    icon: 'Flame',
    features: ['Muscle Hypertrophy', 'Advanced Split Training', 'Physique Shaping', 'Nutrition Support']
  },
  {
    id: 3,
    title: 'Weight Loss & Transformation',
    description: 'Proven fat-loss programs combining cardio, strength, and nutrition planning.',
    icon: 'TrendingDown',
    features: ['Fat Loss', 'HIIT & Cardio', 'Diet Planning', 'Body Transformation']
  },
  {
    id: 4,
    title: 'Functional Training',
    description: 'Improve mobility, endurance, and athletic performance with functional workouts.',
    icon: 'Zap',
    features: ['Functional Fitness', 'Endurance Training', 'Mobility', 'Athletic Conditioning']
  },
  {
    id: 5,
    title: 'Personal Training',
    description: 'Certified Gold’s Gym trainers offering personalized one-on-one coaching.',
    icon: 'Target',
    features: ['Customized Workouts', '1-on-1 Coaching', 'Goal Tracking', 'Performance Analysis']
  }
];

export const trainers = [
  {
    id: 1,
    name: 'Rahul Verma',
    title: 'Head Fitness Trainer',
    certifications: ['Gold’s Gym Certified', 'NASM-CPT', 'CPR/AED'],
    specialty: 'Strength & Conditioning',
    experience: '11 years',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Amit Singh',
    title: 'Bodybuilding Coach',
    certifications: ['IFBB Certified', 'ACE-CPT', 'Sports Nutrition'],
    specialty: 'Muscle Hypertrophy',
    experience: '9 years',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Neha Sharma',
    title: 'Functional Training Coach',
    certifications: ['NASM-CPT', 'Functional Training Specialist'],
    specialty: 'Functional & Mobility Training',
    experience: '7 years',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Rohit Kumar',
    title: 'Transformation Coach',
    certifications: ['Gold’s Gym Certified', 'PN-1'],
    specialty: 'Weight Loss & Lifestyle Coaching',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop'
  }
];

export const membershipPlans = [
  {
    id: 1,
    name: 'Standard',
    price: 2999,
    period: 'month',
    popular: false,
    features: [
      'Full Gym Access',
      'State-of-the-art Equipment',
      'Locker Facility',
      'Free Wi-Fi',
      'Monthly Fitness Assessment'
    ]
  },
  {
    id: 2,
    name: 'Gold',
    price: 4999,
    period: 'month',
    popular: true,
    features: [
      'Unlimited Gym Access',
      'Group Classes',
      'Certified Trainer Guidance',
      'Nutrition Advice',
      'Weekly Progress Tracking',
      'Steam & Shower Facility'
    ]
  },
  {
    id: 3,
    name: 'Platinum',
    price: 8999,
    period: 'month',
    popular: false,
    features: [
      'All Gold Benefits',
      'Personal Training Sessions',
      'Customized Diet Plan',
      'Body Composition Analysis',
      'Priority Equipment Access',
      'Guest Passes'
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Aman Raj',
    role: 'IT Professional',
    content: 'Gold’s Gym completely changed my fitness journey. The trainers are professional and the environment is extremely motivating.',
    rating: 5,
    transformation: 'Lost 18 kg'
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Entrepreneur',
    content: 'World-class equipment and disciplined training culture. Truly the best gym experience in the city.',
    rating: 5,
    transformation: 'Lean & Fit'
  },
  {
    id: 3,
    name: 'Rohit Mehta',
    role: 'Business Owner',
    content: 'From beginner to confident lifter — Gold’s Gym helped me build strength and consistency.',
    rating: 5,
    transformation: 'Gained strength & muscle'
  },
  {
    id: 4,
    name: 'Sneha Verma',
    role: 'College Student',
    content: 'The trainers guide you properly and keep you motivated every day. Highly recommended!',
    rating: 5,
    transformation: 'Full body transformation'
  }
];

export const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', category: 'gym' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop', category: 'workout' },
  { id: 3, url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop', category: 'gym' },
  { id: 4, url: 'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&h=600&fit=crop', category: 'equipment' },
  { id: 5, url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop', category: 'workout' },
  { id: 6, url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop', category: 'gym' }
];

export const contactInfo = {
  phone: '+91 9XXXXXXXXX',
  email: 'info@goldsgympatna.com',
  address: 'Gold’s Gym, Patna, Bihar',
  hours: {
    weekdays: '5:00 AM - 11:00 PM',
    weekends: '6:00 AM - 10:00 PM'
  },
  social: {
    facebook: 'https://facebook.com/goldsgymindia',
    instagram: 'https://instagram.com/goldsgymindia',
    twitter: 'https://twitter.com/goldsgym',
    youtube: 'https://youtube.com/goldsgym'
  }
};
