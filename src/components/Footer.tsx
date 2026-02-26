import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: ["Discover Hackathons", "Create Hackathon", "Leaderboard", "Results"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Privacy Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-dark-surface">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Hack<span className="text-primary">Nation</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              India's premier national hackathon management platform. Empowering innovation across every state and institution.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-300 text-muted-foreground">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 HackNation. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">A National Innovation Initiative</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
