import { motion } from "framer-motion";
import { BarChart3, Users, FileText, Shield, TrendingUp, CheckCircle2, Clock, Bell } from "lucide-react";

const dashboards = [
  {
    role: "Participant",
    color: "from-primary to-neon-cyan",
    icon: Users,
    stats: [
      { label: "Enrolled", value: "3", icon: CheckCircle2 },
      { label: "Pending", value: "1", icon: Clock },
      { label: "Alerts", value: "5", icon: Bell },
    ],
    features: ["Enrolled hackathons", "Team status", "Submissions", "Notifications"],
  },
  {
    role: "Organizer",
    color: "from-secondary to-neon-purple",
    icon: FileText,
    stats: [
      { label: "Active", value: "12", icon: TrendingUp },
      { label: "Teams", value: "340", icon: Users },
      { label: "Submissions", value: "189", icon: FileText },
    ],
    features: ["Create hackathons", "Manage participants", "Analytics", "Submissions"],
  },
  {
    role: "Judge",
    color: "from-neon-cyan to-primary",
    icon: BarChart3,
    stats: [
      { label: "Assigned", value: "8", icon: CheckCircle2 },
      { label: "Evaluated", value: "45", icon: BarChart3 },
      { label: "Pending", value: "12", icon: Clock },
    ],
    features: ["Assigned hackathons", "Evaluation panel", "Score submission", "Feedback"],
  },
  {
    role: "Admin",
    color: "from-neon-purple to-secondary",
    icon: Shield,
    stats: [
      { label: "Users", value: "50K", icon: Users },
      { label: "Hackathons", value: "500", icon: TrendingUp },
      { label: "Approvals", value: "23", icon: CheckCircle2 },
    ],
    features: ["System analytics", "User management", "Approvals", "Reports"],
  },
];

const DashboardPreview = () => {
  return (
    <section id="dashboards" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Role-Based Dashboards</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Tailored Experience for <span className="gradient-text">Every Role</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each stakeholder gets a purpose-built dashboard designed for maximum productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboards.map((dash, i) => (
            <motion.div
              key={dash.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card-hover p-6 rounded-xl overflow-hidden relative"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${dash.color}`} />

              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dash.color} flex items-center justify-center`}>
                  <dash.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{dash.role} Dashboard</h3>
                  <p className="text-xs text-muted-foreground">Role-specific view</p>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {dash.stats.map((stat) => (
                  <div key={stat.label} className="bg-muted/50 rounded-lg p-3 text-center">
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2">
                {dash.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
