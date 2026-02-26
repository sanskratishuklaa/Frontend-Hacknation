import { motion } from "framer-motion";
import { Calendar, Users, Clock, ArrowRight } from "lucide-react";

const hackathons = [
  { name: "AI for Good Challenge", status: "Live", statusColor: "bg-green-500", participants: 2340, deadline: "Mar 15, 2026", theme: "Artificial Intelligence" },
  { name: "Smart India Hackathon", status: "Upcoming", statusColor: "bg-primary", participants: 5800, deadline: "Apr 1, 2026", theme: "Government Solutions" },
  { name: "Climate Tech Sprint", status: "Live", statusColor: "bg-green-500", participants: 1200, deadline: "Mar 10, 2026", theme: "Climate & Sustainability" },
  { name: "FinTech Innovation Cup", status: "Upcoming", statusColor: "bg-primary", participants: 890, deadline: "May 20, 2026", theme: "Financial Technology" },
  { name: "HealthTech Hackathon", status: "Completed", statusColor: "bg-muted-foreground", participants: 3100, deadline: "Feb 28, 2026", theme: "Healthcare" },
  { name: "CyberSec Challenge", status: "Live", statusColor: "bg-green-500", participants: 760, deadline: "Mar 22, 2026", theme: "Cybersecurity" },
];

const LiveHackathons = () => {
  return (
    <section id="hackathons" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Active Events</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Explore <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join live events or register for upcoming hackathons across the nation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group glass-card-hover p-5 rounded-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{hack.theme}</span>
                <span className={`flex items-center gap-1.5 text-xs font-medium`}>
                  <span className={`w-2 h-2 rounded-full ${hack.statusColor} ${hack.status === 'Live' ? 'animate-pulse' : ''}`} />
                  {hack.status}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {hack.name}
              </h3>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{hack.participants.toLocaleString()}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{hack.deadline}</span>
              </div>

              <button className="w-full py-2.5 rounded-lg bg-muted/50 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-primary/10 group-hover:text-primary">
                {hack.status === "Completed" ? "View Results" : "Register Now"}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveHackathons;
