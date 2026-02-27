import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type UserRole = "participant" | "organizer" | "judge";
type AuthMode = "login" | "signup";

const Auth = () => {
  const [role, setRole] = useState<UserRole>("participant");
  const [mode, setMode] = useState<AuthMode>("login");

  const roleMeta = {
    participant: {
      icon: User,
      title: "Participant Workspace",
      description: "Build, submit, and track your hackathon journey.",
      highlight: "Submission-ready in minutes",
      points: [
        "Project submission timeline",
        "Team collaboration view",
        "Mentor and judge updates",
      ],
    },
    organizer: {
      icon: Users,
      title: "Organizer Workspace",
      description: "Launch events, manage teams, and oversee submissions.",
      highlight: "Operational control, end-to-end",
      points: [
        "Event setup and publishing",
        "Participant onboarding tools",
        "Real-time analytics dashboards",
      ],
    },
    judge: {
      icon: BarChart3,
      title: "Judge Workspace",
      description: "Evaluate projects fairly with guided scoring workflows.",
      highlight: "Structured and bias-aware scoring",
      points: [
        "Rubric-based evaluations",
        "Judge fatigue indicators",
        "Feedback templates and notes",
      ],
    },
  };

  const selectedRoleMeta = roleMeta[role];
  const SelectedRoleIcon = selectedRoleMeta.icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground px-6 py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-secondary/12 blur-[130px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid lg:grid-cols-5 gap-6"
        >
          <section className="lg:col-span-3 glass-card rounded-2xl border border-border/60 p-6 md:p-8 shadow-[0_12px_40px_-20px_hsl(var(--primary)/0.4)]">
            <div className="flex items-start justify-between gap-4 mb-7">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">
                  Access Portal
                </p>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                  {mode === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  Professional access for participants, organizers, and judges with a role-first experience.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Secure
              </div>
            </div>

            <div className="inline-flex w-full sm:w-auto rounded-xl p-1 bg-muted/70 border border-border/60 mb-7">
              <button
                onClick={() => setMode("login")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  mode === "login"
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  mode === "signup"
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-5">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm text-foreground/90">Full name</Label>
                  <Input id="fullName" type="text" placeholder="Enter your full name" className="h-12 rounded-xl border-border/70 bg-background/50" />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-foreground/90">Email address</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-xl border-border/70 bg-background/50 pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-foreground/90">Password</Label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="h-12 rounded-xl border-border/70 bg-background/50 pl-10"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <Label className="text-sm text-foreground/90">Select role</Label>
                <RadioGroup
                  value={role}
                  onValueChange={(value) => setRole(value as UserRole)}
                  className="grid gap-3"
                >
                  <label className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-300 ${
                    role === "participant"
                      ? "border-primary/60 bg-primary/10"
                      : "border-border/70 bg-card/40 hover:border-primary/40"
                  }`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="participant" id="participant" />
                      <div>
                        <span className="text-sm font-medium">Participant</span>
                        <p className="text-xs text-muted-foreground">Build and submit projects</p>
                      </div>
                    </div>
                    <User className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </label>

                  <label className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-300 ${
                    role === "organizer"
                      ? "border-primary/60 bg-primary/10"
                      : "border-border/70 bg-card/40 hover:border-primary/40"
                  }`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="organizer" id="organizer" />
                      <div>
                        <span className="text-sm font-medium">Organizer</span>
                        <p className="text-xs text-muted-foreground">Run and manage hackathons</p>
                      </div>
                    </div>
                    <Users className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </label>

                  <label className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-300 ${
                    role === "judge"
                      ? "border-primary/60 bg-primary/10"
                      : "border-border/70 bg-card/40 hover:border-primary/40"
                  }`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="judge" id="judge" />
                      <div>
                        <span className="text-sm font-medium">Judge</span>
                        <p className="text-xs text-muted-foreground">Evaluate with rubrics</p>
                      </div>
                    </div>
                    <BarChart3 className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </label>
                </RadioGroup>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="inline-flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="accent-[hsl(var(--primary))]" />
                  Keep me signed in
                </label>
                <button type="button" className="text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </button>
              </div>

              <Button
                type="button"
                className="w-full h-12 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow-lg shadow-primary/25"
              >
                {mode === "login" ? "Continue to Dashboard" : "Create Account"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By continuing, you agree to our terms and privacy policy.
              </p>
            </form>
          </section>

          <section className="lg:col-span-2 glass-card rounded-2xl border border-border/60 p-6 md:p-7 shadow-[0_12px_40px_-20px_hsl(var(--secondary)/0.45)]">
            <p className="text-xs uppercase tracking-[0.18em] text-secondary font-semibold mb-3">Role Preview</p>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-5 mb-5">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground">
                  <SelectedRoleIcon className="h-3.5 w-3.5 text-primary" />
                  Active Role
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Optimized
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold mb-1">{selectedRoleMeta.title}</h2>
              <p className="text-muted-foreground mb-4">{selectedRoleMeta.description}</p>

              <div className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-xs text-foreground">
                {selectedRoleMeta.highlight}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {selectedRoleMeta.points.map((point) => (
                <div key={point} className="rounded-xl border border-border/60 bg-muted/35 p-4">
                  <p className="text-sm text-foreground font-medium flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                    <span>{point}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-border/60 bg-muted/35 p-3 text-center">
                <p className="text-lg font-bold">99.9%</p>
                <p className="text-[11px] text-muted-foreground">Uptime</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/35 p-3 text-center">
                <p className="text-lg font-bold">24/7</p>
                <p className="text-[11px] text-muted-foreground">Support</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/35 p-3 text-center">
                <p className="text-lg font-bold">Secure</p>
                <p className="text-[11px] text-muted-foreground">Access</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
              Built for national-scale hackathons with secure login flows and role-aware navigation.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default Auth;
