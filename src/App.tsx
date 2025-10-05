'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Database, Globe, Briefcase, Phone, MapPin, Zap, Terminal, Brain, Cpu, Monitor, Shield, Users, Award, Target, TrendingUp } from 'lucide-react';
import { ShootingStars } from './components/ShootingStars';
import { NeonButton } from './components/NeonButton';
import { GlowCard } from './components/GlowCard';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import profileImg from './assets/images/IMG_20250810_102400.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = [
    { name: 'React.js', icon: Monitor, level: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: Code, level: 88, category: 'Language' },
    { name: 'TypeScript', icon: Code, level: 85, category: 'Language' },
    { name: 'Python', icon: Brain, level: 85, category: 'Language' },
    { name: 'Cybersecurity', icon: Shield, level: 82, category: 'Security' },
    { name: 'Node.js', icon: Terminal, level: 80, category: 'Backend' },
    { name: 'Git', icon: Github, level: 85, category: 'Tools' },
    { name: 'DBMS', icon: Database, level: 85, category: 'Database' },
    { name: 'C++', icon: Cpu, level: 90, category: 'Language' },
    { name: 'UI/UX Design', icon: Target, level: 80, category: 'Design' },
    { name: 'REST APIs', icon: Globe, level: 83, category: 'Backend' },
    { name: 'SQL', icon: Database, level: 85, category: 'Database' }
  ];

  const projects = [
    {
      title: 'Myntra WEFORSHE Design Tool',
      description: 'React-based custom design tool with real-time personalization & drag-drop UX for the Myntra WEFORSHE Hackathon.',
      tech: ['React.js', 'JavaScript', 'CSS'],
      github: 'https://github.com/HarshithaShashi',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'ScamScanner App',
      description: 'Mobile app detecting phishing messages with Google ML Kit integration and elderly-friendly accessibility features.',
      tech: ['React Native', 'Firebase', 'Google ML Kit'],
      github: 'https://github.com/HarshithaShashi',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'SmartPeriod App',
      description: 'Comprehensive period tracking app with health insights, mood tracking, and personalized recommendations.',
      tech: ['React Native', 'Firebase', 'JavaScript'],
      github: 'https://github.com/HarshithaShashi',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'Udyami',
      description: 'Multilingual platform supporting local entrepreneurs with business tools and community features.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/HarshithaShashi',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'Gesture Virtual Mouse',
      description: 'Computer vision-based gesture-controlled virtual mouse using hand-tracking algorithms for accessibility.',
      tech: ['Python', 'OpenCV', 'MediaPipe'],
      github: 'https://github.com/HarshithaShashi',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=250&fit=crop',
      featured: false
    },
    {
      title: 'Jigsaw Puzzle Game',
      description: 'Interactive React-based puzzle game with drag-and-drop functionality and advanced piece manipulation.',
      tech: ['React.js', 'JavaScript', 'CSS'],
      github: 'https://github.com/HarshithaShashi',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop',
      featured: false
    }
  ];

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Code Nimbus Solutions Pvt. Ltd',
      period: 'Sep 2024 - Jan 2025',
      description: 'Developed responsive web interfaces using React.js and Vite, optimizing performance by 30% through lazy loading and code splitting. Enhanced UI/UX with Redux state management, contributing to 5+ projects in an Agile environment.',
      achievements: ['30% Performance Boost', '5+ Projects', '20% Faster Rendering'],
      icon: Briefcase
    },
    {
      title: 'Internshala Student Partner',
      company: 'Internshala',
      period: 'Jan 2024 - Sep 2024',
      description: 'Campus Ambassador promoting internship opportunities and career development. Organized tech events and workshops, significantly increasing student engagement and participation in internship programs.',
      achievements: ['Campus Ambassador', 'Tech Events', 'Student Engagement'],
      icon: Users
    },
    {
      title: 'Marketing Core',
      company: 'Onyx E-cell - NIE Mysuru',
      period: 'Oct 2023 - Sep 2024',
      description: 'ONYX is the only E-cell of NIE focused on entrepreneurship and helping students to develop essential skills to become entrepreneurs. Conducted events in various domains like Business, Technology, Innovation, and Finance, providing students with practical experience in different facets of the startup ecosystem.',
      achievements: ['Marketing Strategy', 'Event Management', 'Startup Ecosystem'],
      icon: TrendingUp
    },
    {
      title: 'Creative Core Member',
      company: 'ISSA Club - NIE Mysuru',
      period: 'Aug 2023 - Sep 2024',
      description: 'Led creative initiatives for cybersecurity awareness campaigns and technical events. Organized workshops on web security, ethical hacking, and coordinated tech and non-tech events for student community.',
      achievements: ['Event Leadership', 'Cybersecurity Awareness', 'Community Building'],
      icon: Shield
    }
  ];

  const certifications = [
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google via Coursera',
      status: 'In Progress',
      credentialId: '',
      skills: ['Network Security', 'Incident Response', 'SIEM', 'Risk Management', 'Ethical Hacking'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop'
    },
    {
      title: 'Deloitte Australia - Cyber Job Simulation',
      issuer: 'Forage',
      status: 'Completed',
      credentialId: 'tzcbgNnGduqtYggnc',
      issuedDate: 'Jul 2025',
      skills: ['Cybersecurity Simulation', 'Enterprise Security', 'Risk Assessment', 'Security Frameworks'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
    }
  ];

  const accomplishments = [
    {
      title: 'Myntra WEFORSHE Hackathon',
      description: 'Developed innovative design tool with custom drag-drop functionality',
      type: 'Hackathon',
      year: '2024'
    },
    {
      title: 'SAP Hackfest Participation',
      description: 'Participated in enterprise-level hackathon focusing on business solutions',
      type: 'Hackathon',
      year: '2024'
    },
    {
      title: 'Tech Community Leadership',
      description: 'Led multiple tech events and cybersecurity awareness campaigns',
      type: 'Leadership',
      year: '2023-2024'
    }
  ];

  return (
    <div className="min-h-screen bg-tech-dark text-tech-white relative overflow-x-hidden tech-pattern px-4 sm:px-6 lg:px-8">
      {/* Shooting Stars Background */}
      <ShootingStars />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism-dark border-b border-electric-blue/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-xl text-tech-white font-semibold font-mono"
            >
              &lt;Harshitha /&gt;
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-tech-light-gray hover:text-electric-blue transition-colors duration-300 relative group text-sm font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-tech-purple transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-tech-white hover:text-electric-blue p-2"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism-dark border-b border-electric-blue/20"
          >
            <div className="px-4 sm:px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-tech-light-gray hover:text-electric-blue transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <span className="text-electric-blue font-mono text-sm sm:text-base lg:text-lg mb-4 block">
                console.log("Hello, World!");
              </span>
            </motion.div>
            
{/* Centered name section */}
<div className="flex items-center justify-center w-full my-6">
  <div
    style={{ fontFamily: 'Poppins, sans-serif' }}
    className="font-semibold text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] text-transparent bg-clip-text bg-gradient-to-r from-[#9A5AFF] via-[#C77DFF] to-[#FFB347] tracking-[0.5px] text-center">
    Welcome to My Portfolio
  </div>
</div>

{/* Header section below the name */}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#007CF0] via-[#00DFD8] to-[#7928CA] bg-clip-text text-transparent leading-tight px-4 text-center">
   Harshitha S.Shankar
</h1>

            
            <p className="text-lg sm:text-xl md:text-2xl text-tech-light-gray mb-3 sm:mb-4 leading-relaxed max-w-3xl mx-auto px-4">
              CS Student @ NIE | Cybersecurity & Software Developer
            </p>
            
            <p className="text-base sm:text-lg text-tech-gray mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Passionate about cybersecurity, building secure applications, and crafting digital experiences with modern web technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <NeonButton href="#projects" size="lg" variant="primary" className="w-full sm:w-auto">
                <Terminal className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Projects
              </NeonButton>
              <NeonButton href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Me
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-electric-blue to-tech-purple bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-electric-blue to-tech-purple mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                <ImageWithFallback
                  src={profileImg}
                  alt="Harshitha S. Shankar"
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl object-cover mx-auto lg:mx-0 shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-electric-blue/20 to-tech-purple/20 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-tech-emerald/20 to-electric-blue/20 rounded-2xl -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-tech-white mb-3 sm:mb-4">
                  Building Secure Digital Experiences
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-tech-light-gray mb-4 sm:mb-6">
                  I'm a passionate Computer Science student at <span className="text-electric-blue font-medium">The National Institute of Engineering, Mysuru</span>, 
                  with a CGPA of <span className="text-tech-emerald font-medium">8.5</span> and a strong focus on cybersecurity and software development.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-tech-light-gray mb-4 sm:mb-6">
                  As a <span className="text-tech-purple font-medium">Frontend Developer</span> with experience at Code Nimbus Solutions and 
                  <span className="text-tech-emerald font-medium"> Internshala Student Partner</span>, I specialize in creating secure, responsive, 
                  user-friendly interfaces using modern web technologies while maintaining strong security practices.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-tech-light-gray">
                  Currently pursuing <span className="text-electric-blue font-medium">Google Cybersecurity Professional Certificate</span> and actively 
                  contributing to tech communities through ISSA Club, where I organize cybersecurity awareness campaigns and technical events.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-tech-slate/50">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-electric-blue">30+</div>
                  <div className="text-xs sm:text-sm text-tech-gray">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-tech-purple">8.5</div>
                  <div className="text-xs sm:text-sm text-tech-gray">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-tech-emerald">3+</div>
                  <div className="text-xs sm:text-sm text-tech-gray">Years Coding</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-tech-purple to-tech-emerald bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-tech-purple to-tech-emerald mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {/* Experience Items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlowCard 
                  glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'emerald'} 
                  variant="glass" 
                  className="p-4 sm:p-6 lg:p-8"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-electric-blue to-tech-purple rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                      <experience.icon className="h-8 w-8 sm:h-10 sm:w-10 text-tech-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-xl sm:text-2xl font-semibold text-tech-white mb-2">{experience.title}</h3>
                        <p className="text-electric-blue font-medium mb-1">{experience.company}</p>
                        <p className="text-tech-emerald text-sm">{experience.period}</p>
                      </div>
                      <p className="text-tech-light-gray leading-relaxed mb-4 sm:mb-6">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                        {experience.achievements.map((achievement, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 sm:px-4 sm:py-2 bg-electric-blue/20 border border-electric-blue/30 rounded-full text-xs sm:text-sm text-electric-blue font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}

            {/* Education */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlowCard glowColor="purple" variant="glass" className="p-4 sm:p-6 h-full">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-tech-purple to-electric-blue rounded-xl flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-tech-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-tech-white">Bachelor of Engineering</h3>
                      <p className="text-tech-purple font-medium text-sm sm:text-base">Computer Science & Engineering</p>
                    </div>
                  </div>
                  <p className="text-tech-light-gray mb-2 sm:mb-3">The National Institute of Engineering, Mysuru</p>
                  <p className="text-tech-emerald font-semibold mb-2 sm:mb-3">CGPA: 8.5 / 10.0</p>
                  <p className="text-xs sm:text-sm text-tech-gray">2022 - 2026</p>
                </GlowCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <GlowCard glowColor="emerald" variant="glass" className="p-4 sm:p-6 h-full">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-tech-emerald to-tech-purple rounded-xl flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-tech-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-tech-white">Pre-University</h3>
                      <p className="text-tech-emerald font-medium text-sm sm:text-base">Science Stream</p>
                    </div>
                  </div>
                  <p className="text-tech-light-gray mb-2 sm:mb-3">Vijaya Vittala PU Composite, Mysuru</p>
                  <p className="text-electric-blue font-semibold mb-2 sm:mb-3">Aggregate: 97.6%</p>
                  <p className="text-xs sm:text-sm text-tech-gray">2020 - 2022</p>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-tech-emerald to-electric-blue bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-tech-emerald to-electric-blue mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard 
                  glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'emerald'} 
                  variant="glass" 
                  className="p-4 sm:p-6 text-center h-full"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-electric-blue to-tech-purple rounded-xl flex items-center justify-center">
                    <skill.icon className="h-5 w-5 sm:h-7 sm:w-7 text-tech-white" />
                  </div>
                  <h3 className="font-semibold text-tech-white mb-1 sm:mb-2 text-sm sm:text-base">{skill.name}</h3>
                  <p className="text-xs text-tech-gray mb-3 sm:mb-4 uppercase tracking-wider">{skill.category}</p>
                  <div className="w-full bg-tech-slate/50 rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2">
                    <motion.div
                      className="h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-electric-blue to-tech-purple"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-xs text-tech-light-gray">{skill.level}%</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-electric-blue to-tech-emerald bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-electric-blue to-tech-emerald mx-auto rounded-full"></div>
            <p className="text-tech-light-gray mt-4 sm:mt-6 max-w-2xl mx-auto">
              A showcase of my latest work, featuring innovative solutions with focus on security and modern web technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlowCard 
                  glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'emerald'} 
                  variant="glass" 
                  className="p-4 sm:p-6 h-full group"
                >
                  <div className="mb-4 sm:mb-6 rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-tech-white flex-1">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-electric-blue/20 to-tech-purple/20 border border-electric-blue/30 rounded-full text-xs text-electric-blue font-medium ml-2">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-tech-light-gray mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-tech-slate/50 border border-tech-slate/70 rounded-lg text-xs text-tech-light-gray font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <NeonButton href={project.github} size="sm" variant="outline" className="flex-1">
                      <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">Code</span>
                    </NeonButton>
                    <NeonButton href={project.demo} size="sm" variant="primary" className="flex-1">
                      <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">Demo</span>
                    </NeonButton>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-tech-purple to-electric-blue bg-clip-text text-transparent">
              Certifications & Learning
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-tech-purple to-electric-blue mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Certifications */}
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GlowCard 
                  glowColor={index % 2 === 0 ? 'purple' : 'blue'} 
                  variant="glass" 
                  className="p-4 sm:p-6 lg:p-8 h-full"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-tech-purple to-electric-blue rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-tech-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-tech-white mb-1 sm:mb-2">
                        {certification.title}
                      </h3>
                      <p className="text-tech-purple font-medium mb-2">{certification.issuer}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 justify-center sm:justify-start">
                        <span className={`px-2 py-1 sm:px-3 sm:py-1 ${certification.status === 'Completed' ? 'bg-tech-emerald/20 border border-tech-emerald/30 text-tech-emerald' : 'bg-tech-emerald/20 border border-tech-emerald/30 text-tech-emerald'} rounded-full text-xs font-medium`}>
                          {certification.status}
                        </span>
                        {certification.issuedDate && (
                          <span className="text-xs text-tech-gray">
                            Issued {certification.issuedDate}
                          </span>
                        )}
                      </div>
                      {certification.credentialId && (
                        <p className="text-xs text-tech-light-gray font-mono">
                          Credential ID: {certification.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-tech-light-gray mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {index === 0 ? 
                      'Comprehensive cybersecurity program covering network security, incident response, threat detection, and ethical hacking fundamentals.' :
                      'Completed professional cybersecurity simulation experience focusing on enterprise security practices, risk assessment, and real-world security frameworks.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {certification.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-tech-slate/50 border border-tech-slate/70 rounded-lg text-xs text-tech-light-gray font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Accomplishments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlowCard glowColor="emerald" variant="glass" className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-tech-emerald to-electric-blue rounded-2xl flex items-center justify-center">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-tech-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-tech-white">Key Accomplishments</h3>
                  <p className="text-tech-emerald font-medium text-sm sm:text-base">Hackathons & Leadership</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {accomplishments.map((accomplishment, index) => (
                  <div key={index} className="border-l-2 border-electric-blue/30 pl-3 sm:pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1 sm:mb-2">
                      <h4 className="font-medium text-tech-white text-sm sm:text-base">{accomplishment.title}</h4>
                      <span className="text-xs text-tech-gray">({accomplishment.year})</span>
                    </div>
                    <p className="text-xs sm:text-sm text-tech-light-gray">{accomplishment.description}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-tech-purple to-electric-blue bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-tech-purple to-electric-blue mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg text-tech-light-gray mt-6 sm:mt-8 max-w-2xl mx-auto">
              Ready to collaborate on cybersecurity projects or discuss opportunities? Let's build something secure together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 sm:space-y-10"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-tech-white mb-6 sm:mb-8">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-electric-blue/20 to-tech-purple/20 rounded-2xl flex items-center justify-center border border-electric-blue/20">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-tech-light-gray text-xs sm:text-sm mb-1">Email</p>
                      <a 
                        href="mailto:harshithasshankar5589@gmail.com"
                        className="text-tech-white hover:text-electric-blue transition-colors duration-300 font-medium text-sm sm:text-base break-all"
                      >
                        harshithasshankar5589@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-tech-purple/20 to-tech-emerald/20 rounded-2xl flex items-center justify-center border border-tech-purple/20">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-tech-purple" />
                    </div>
                    <div>
                      <p className="text-tech-light-gray text-xs sm:text-sm mb-1">Phone</p>
                      <a 
                        href="tel:+919880223456"
                        className="text-tech-white hover:text-tech-purple transition-colors duration-300 font-medium text-sm sm:text-base"
                      >
                        +91-9880223456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-tech-emerald/20 to-electric-blue/20 rounded-2xl flex items-center justify-center border border-tech-emerald/20">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-tech-emerald" />
                    </div>
                    <div>
                      <p className="text-tech-light-gray text-xs sm:text-sm mb-1">Location</p>
                      <span className="text-tech-white font-medium text-sm sm:text-base">Mysuru, Karnataka, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/HarshithaShashi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glassmorphism-dark border border-electric-blue/30 rounded-2xl flex items-center justify-center hover:bg-electric-blue/20 hover:border-electric-blue/60 transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-electric-blue group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/harshitha-s-shankar-324935255/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glassmorphism-dark border border-tech-purple/30 rounded-2xl flex items-center justify-center hover:bg-tech-purple/20 hover:border-tech-purple/60 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-tech-purple group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlowCard glowColor="purple" variant="glass" className="p-4 sm:p-6 lg:p-8">
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-tech-light-gray mb-2 sm:mb-3">Full Name</label>
                    <Input 
                      className="w-full bg-tech-slate/30 border-tech-slate/50 text-tech-white focus:border-electric-blue/60 transition-colors duration-300 rounded-xl text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tech-light-gray mb-2 sm:mb-3">Email Address</label>
                    <Input 
                      type="email"
                      className="w-full bg-tech-slate/30 border-tech-slate/50 text-tech-white focus:border-electric-blue/60 transition-colors duration-300 rounded-xl text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tech-light-gray mb-2 sm:mb-3">Message</label>
                    <Textarea 
                      rows={4}
                      className="w-full bg-tech-slate/30 border-tech-slate/50 text-tech-white focus:border-electric-blue/60 transition-colors duration-300 resize-none rounded-xl text-sm sm:text-base"
                      placeholder="Tell me about your project or cybersecurity opportunity..."
                    />
                  </div>
                  <NeonButton type="submit" variant="primary" className="w-full">
                    <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Send Message
                  </NeonButton>
                </form>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-tech-slate/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
            <div>
              <p className="text-tech-gray mb-1 sm:mb-2 text-sm sm:text-base">
                © 2025 Harshitha S. Shankar
              </p>
              <p className="text-tech-light-gray text-xs sm:text-sm">
                Designed & Built with ⚡ and lots of ☕ | Secured with 🔒
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="https://github.com/HarshithaShashi" target="_blank" rel="noopener noreferrer" className="text-tech-gray hover:text-electric-blue transition-colors duration-300">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.linkedin.com/in/harshitha-s-shankar-324935255/" target="_blank" rel="noopener noreferrer" className="text-tech-gray hover:text-tech-purple transition-colors duration-300">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="mailto:harshithasshankar5589@gmail.com" className="text-tech-gray hover:text-tech-emerald transition-colors duration-300">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}