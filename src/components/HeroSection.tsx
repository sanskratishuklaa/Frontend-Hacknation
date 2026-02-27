import { useEffect, useRef, useState } from "react";

// Typing animation hook (must be top-level)
import { useEffect as useEffectReact, useState as useStateReact } from "react";
function useTypingEffect(text, speed = 60, delay = 400) {
  const [displayed, setDisplayed] = useStateReact("");
  useEffectReact(() => {
    let timeout;
    let idx = 0;
    setDisplayed("");
    const start = () => {
      timeout = setTimeout(function type() {
        setDisplayed((prev) => prev + text[idx]);
        idx++;
        if (idx < text.length) {
          timeout = setTimeout(type, speed);
        }
      }, delay);
    };
    start();
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return displayed;
}

// TypingText component for the animated line (must be top-level)
function TypingText({ text }) {
  const typed = useTypingEffect(text, 60, 400);
  return (
    <span>
      {typed}
      <span className="inline-block w-2 h-6 align-middle animate-blink bg-foreground/80 ml-0.5 rounded-sm" style={{verticalAlign: '2px'}} />
    </span>
  );
}
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 100000, suffix: "+", label: "Participants" },
  { value: 500, suffix: "+", label: "Hackathons" },
  { value: 10000, suffix: "+", label: "Projects" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = count >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count;

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
        {display}{suffix}
      </div>
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            National Innovation Platform — Now Live
          </div>


          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
            Empowering Innovation
            <br />
            <span className="gradient-text">
              Across the Nation
            </span>
          </h1>



          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Manage, Participate, and Judge Hackathons Seamlessly — a unified platform for students, organizers, mentors, judges, and administrators.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-neon-cyan text-primary-foreground font-semibold text-base hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2">
              Join Hackathon
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-base hover:border-primary/40 transition-all duration-300 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Explore Hackathons
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating cards */}
        <div className="hidden lg:block absolute top-1/3 left-8 floating">
          <div className="glass-card p-4 rounded-xl w-48">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
              <span className="text-primary text-sm">🏆</span>
            </div>
            <p className="text-xs text-muted-foreground">Winner Announced</p>
            <p className="text-sm font-semibold text-foreground">Team Innovators</p>
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 right-12 floating-delayed">
          <div className="glass-card p-4 rounded-xl w-44">
            <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center mb-2">
              <span className="text-secondary text-sm">📊</span>
            </div>
            <p className="text-xs text-muted-foreground">Projects Submitted</p>
            <p className="text-sm font-semibold text-foreground">2,847 today</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
