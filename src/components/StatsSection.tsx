import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, FolderOpen, Activity } from "lucide-react";

const impactStats = [
  { icon: TrendingUp, value: 500, suffix: "+", label: "Total Hackathons", color: "text-primary" },
  { icon: Users, value: 100000, suffix: "+", label: "Total Participants", color: "text-neon-cyan" },
  { icon: FolderOpen, value: 25000, suffix: "+", label: "Projects Submitted", color: "text-secondary" },
  { icon: Activity, value: 45000, suffix: "+", label: "Active Users", color: "text-neon-purple" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const fmt = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(n >= target ? 0 : 1)}K`;
    return n.toString();
  };

  return <span ref={ref}>{fmt(count)}{suffix}</span>;
}

const StatsSection = () => {
  return (
    <section id="impact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Platform Impact</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Driving <span className="gradient-text">National Innovation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 rounded-xl text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
