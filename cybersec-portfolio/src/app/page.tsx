"use client";

import { Github, Shield, Search, Terminal, Radar, Cpu, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-dvh font-sans cyber-gradient">
      <header className="container-px py-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-cyan-500/15 ring-1 ring-cyan-400/30 grid place-items-center">
              <Shield className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm text-white/60">Cybersecurity Analyst</p>
              <h1 className="text-lg font-semibold tracking-tight">Your Name</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-3 text-sm">
            <Link className="btn" href="#projects">Projects</Link>
            <Link className="btn" href="#skills">Skills</Link>
            <Link className="btn" href="#experience">Experience</Link>
            <Link className="btn" href="#contact">Contact</Link>
            <a className="btn btn-secondary" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="container-px py-14 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <motion.h2
                initial="hidden"
                animate="show"
                variants={fadeIn}
                className="text-3xl md:text-5xl font-bold tracking-tight"
              >
                Defending systems with intelligence and rigor
              </motion.h2>
              <p className="mt-4 text-white/70 md:text-lg">
                I investigate, hunt, and prevent threats across cloud and on‑prem estates. My
                work spans blue team engineering, incident response, and adversary emulation to
                continuously improve detection and response.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className="btn btn-primary">View projects</a>
                <a href="#contact" className="btn">Get in touch</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="card p-5">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Radar className="h-5 w-5" />
                  <span className="font-semibold">Threat Hunting</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Hypothesis-driven hunts in EDR, SIEM, and network telemetry.
                </p>
              </div>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-violet-300">
                  <Terminal className="h-5 w-5" />
                  <span className="font-semibold">Incident Response</span>
                </div>
                <p className="mt-2 text-sm text-white/70">Rapid triage, forensics, and containment playbooks.</p>
              </div>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Search className="h-5 w-5" />
                  <span className="font-semibold">Detection Engineering</span>
                </div>
                <p className="mt-2 text-sm text-white/70">Analytics, rules, and tuning for high‑signal detections.</p>
              </div>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-violet-300">
                  <Cpu className="h-5 w-5" />
                  <span className="font-semibold">Cloud Security</span>
                </div>
                <p className="mt-2 text-sm text-white/70">IAM hardening, CSPM, and workload protections.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container-px py-16 md:py-24">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold">Highlighted projects</h3>
            <p className="text-white/70">Case studies with code, detections, and reports.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Adversary Emulation Lab",
                desc: "ATT&CK‑mapped emulation plans and corresponding detections.",
                link: "#",
              },
              {
                title: "Cloud Threat Detections",
                desc: "KQL/Sigma rules for Azure and AWS control planes.",
                link: "#",
              },
              {
                title: "IR Playbook Automation",
                desc: "SOAR workflows for containment and evidence collection.",
                link: "#",
              },
            ].map((p) => (
              <a key={p.title} href={p.link} className="card p-5 group">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold tracking-tight">{p.title}</h4>
                  <Link2 className="h-4 w-4 text-white/50 group-hover:text-white/80" />
                </div>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="container-px py-16 md:py-24">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold">Core skills</h3>
            <p className="text-white/70">Tools, methods, and domains I use.</p>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              "Threat hunting",
              "Detection engineering",
              "Digital forensics",
              "EDR/SIEM (Sentinel, Splunk)",
              "Network analysis",
              "Malware triage",
              "Purple teaming",
              "Red team ops",
              "Cloud security (AWS/Azure)",
            ].map((s) => (
              <li key={s} className="card px-4 py-3">{s}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="container-px py-16 md:py-24">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h3>
          <div className="space-y-4">
            {[
              {
                role: "Security Analyst",
                org: "Company A",
                time: "2023 — Present",
                points: [
                  "Built detections reducing mean time to detect by 40%",
                  "Led IR for cloud account compromise across 3 regions",
                ],
              },
              {
                role: "SOC Analyst",
                org: "Company B",
                time: "2021 — 2023",
                points: [
                  "Operationalized threat hunting backlog and reporting",
                  "Maintained EDR with robust response playbooks",
                ],
              },
            ].map((e) => (
              <div key={e.role} className="card p-5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{e.role} — {e.org}</p>
                  <span className="text-white/60 text-sm">{e.time}</span>
                </div>
                <ul className="list-disc pl-5 mt-2 text-white/80 text-sm space-y-1">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container-px py-16 md:py-24">
          <div className="card p-6">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="text-white/70 mt-1 text-sm">
              Available for roles and consulting. Prefer secure channels. PGP available upon request.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="mailto:you@example.com">Email</a>
              <a className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container-px py-10 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Your Name — Cybersecurity Portfolio</p>
      </footer>
    </div>
  );
}
