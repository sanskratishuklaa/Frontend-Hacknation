import { motion } from "framer-motion";
import { Search, Users, Upload, BarChart3, Trophy, Award } from "lucide-react";

const features = [
  { icon: Search, title: "Discover Hackathons", description: "Browse and filter hackathons by theme, location, skill level, and prizes." },
  { icon: Users, title: "Team Formation", description: "Find teammates with complementary skills using our intelligent matching system." },
  { icon: Upload, title: "Project Submission", description: "Submit projects with demos, repos, and documentation in a streamlined portal." },
  { icon: BarChart3, title: "Judge Evaluation", description: "Structured rubric-based scoring with real-time evaluation dashboards." },
  { icon: Trophy, title: "Live Leaderboard", description: "Track rankings in real-time with animated leaderboards and score breakdowns." },
  { icon: Award, title: "Certificates & Results", description: "Auto-generated certificates and detailed result analytics for all participants." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Platform Features</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Everything You Need to <span className="gradient-text">Hack & Win</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive suite of tools designed for every stakeholder in the hackathon ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group glass-card-hover p-6 rounded-xl cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-neon-cyan transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
