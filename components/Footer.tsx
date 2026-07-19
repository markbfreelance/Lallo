import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  ExternalLink,
  AlertTriangle,
  Shield,
} from "lucide-react";

const emergencyHotlines = [
  { label: "MDRRMO", number: "[PLACEHOLDER]", icon: AlertTriangle },
  { label: "PNP Lallo", number: "[PLACEHOLDER]", icon: Shield },
  { label: "BFP Lallo", number: "[PLACEHOLDER]", icon: AlertTriangle },
  { label: "Rural Health Unit", number: "[PLACEHOLDER]", icon: Phone },
];

const partnerLinks = [
  { label: "DILG", href: "https://www.dilg.gov.ph/" },
  { label: "Province of Cagayan", href: "https://cagayan.gov.ph/" },
  { label: "Philippine Government Portal", href: "https://www.gov.ph/" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-river-950 text-white">
      {/* Emergency hotlines banner */}
      <div className="bg-flag-red/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-white" />
              <span className="text-sm font-body font-bold tracking-wide uppercase">
                Emergency Hotlines
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {emergencyHotlines.map((h) => (
                <span
                  key={h.label}
                  className="text-xs sm:text-sm font-body text-white/90"
                >
                  <span className="font-semibold">{h.label}:</span> {h.number}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Seal + Address */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-heritage-400/40 bg-heritage-400/10 flex items-center justify-center">
                <span className="font-heading text-heritage-400 text-lg font-bold">
                  L
                </span>
              </div>
              <div>
                <p className="font-heading text-lg font-bold">
                  Municipality of Lallo
                </p>
                <p className="text-xs font-body text-river-300">
                  Province of Cagayan
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm font-body text-river-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-river-400" />
                Municipal Hall, Poblacion, Lallo, Cagayan 3509, Philippines
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-river-400" />
                [PLACEHOLDER — Office Phone]
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-river-400" />
                mayor@lallo.gov.ph
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Tourism", href: "#tourism" },
                { label: "Transparency", href: "#transparency" },
                { label: "Officials", href: "#officials" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-river-300 hover:text-sun-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Hours */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">
              Office Hours
            </h4>
            <div className="space-y-2 text-sm font-body text-river-300">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-river-400" />
                Monday–Friday
              </p>
              <p className="ml-6">8:00 AM – 5:00 PM</p>
              <p className="text-xs text-river-400 mt-2">
                Closed on weekends and national holidays
              </p>
            </div>

            {/* Social */}
            <div className="mt-6">
              <h4 className="font-heading text-base font-semibold mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-river-800/50 flex items-center justify-center hover:bg-river-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Globe className="w-4 h-4 text-river-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Partner Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">
              Government Partners
            </h4>
            <ul className="space-y-2">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-body text-river-300 hover:text-sun-400 transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-river-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body text-river-400">
            © {new Date().getFullYear()} Municipality of Lallo, Cagayan. All
            rights reserved.
          </p>
          <p className="text-[10px] font-body text-river-500/60 italic">
            This is an unofficial demo/template. Not the official government
            website.
          </p>
        </div>
      </div>
    </footer>
  );
}
