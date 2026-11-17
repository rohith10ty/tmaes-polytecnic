# TMAES Polytechnic — Modern Multi-Page Technical Education Website

![TMAES Polytechnic Banner](https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&auto=format&fit=crop&q=80)

**TMAES Polytechnic** (*T.M.A.E. Society's Polytechnic*, Estd. 1984, Karnataka) is a modern, responsive, high-performance Multi-Page Educational Web Application engineered with **React 19**, **Vite**, and **Tailwind CSS**.

Approved by the **All India Council for Technical Education (AICTE), New Delhi** and recognized by the **Directorate of Technical Education (DTE), Govt. of Karnataka** (DTE Institution Code: **145**).

---

## 🏛️ Design Ethos & Specifications

- **Strict 2-Color Minimalist Palette**:
  - **Color 1 (Deep Academic Navy / Slate)**: `#0F172A` — Foundational high-contrast anchor for typography, structural framing, and authoritative academic grounding.
  - **Color 2 (Precision Cobalt / Electric Blue)**: `#2563EB` — Interactive accents, badges, highlights, links, and primary action surfaces.
  - Set against pure `#FFFFFF` and crisp neutral surfaces (`#F8FAFC`, `#F1F5F9`, `#E2E8F0`) for an ultra-clean, minimal aesthetic without visual clutter.
- **Global Typography**: Complete website typography powered by Google Font **Outfit** (`font-family: 'Outfit', sans-serif`).
- **Lenis Smooth Inertial Scroll**: Butter-smooth momentum scrolling integrated via `lenis` across all routes, resetting scroll position instantly on route transitions.
- **Scrollbar Elimination**: System-wide invisible scrollbars across Chrome, Safari, Firefox, Edge, and Opera while retaining 100% natural, fluid mouse wheel and trackpad scroll capability.
- **Custom Geometric Polytechnic Logo & Favicon**:
  - Custom SVG emblem combining an academic shield, engineering hexagon/gear guide, and "T" monogram with ESTD 1984 badge.
  - High-res vector favicon (`/favicon.svg`) configured in `index.html`.

---

## 🚀 Pages & Core Features

### 1. Home Page (`/`)
- **Top Notification Bar**: AICTE / DTE accreditation details, direct admission helplines, and quick student/staff portal access.
- **Glassmorphic Sticky Navbar**: Custom SVG logo, interactive navigation links, global search launcher (`⌘K`), "Apply Online" live pulse button, and mobile drawer.
- **High-Impact Editorial Hero**:
  - Verified accreditation badge.
  - Bold headline and institutional mission.
  - Primary CTAs ("Explore Diploma Courses" and "Apply for Admission 2025–26").
  - Quick discipline picker pills (Computer Science, AI & ML, Mechanical, Civil, Electrical).
  - Real-time statistics strip (40+ Years Legacy, 98.4% Placement Record, 16,000+ Alumni, 45+ Labs).
  - High-fidelity visual showcase with floating placement and accreditation glass cards.
- **Corporate Recruiters Ticker**: 12+ national and multinational recruiters including L&T, Infosys, Bosch, ABB, Schneider, Tata Motors, and Wipro.
- **The TMAES Advantage**: 4 foundational pillars (Industry 4.0 Labs, Placement Cell, DCET Lateral Pathway, Government Scholarships).
- **Featured Diploma Programs**: Responsive card grid with department filters, ratings, fees, seat capacity, and direct apply triggers.
- **Campus Facilities & Labs**: Hi-tech computing labs, 20,000 sq.ft. mechanical workshops, central library, hostels, and sports complex.
- **Student & Alumni Placement Testimonials**: Verified testimonials from alumni currently placed at Infosys, ABB India, L&T, and Bosch Global.
- **Admissions 2025–26 CTA**: High-contrast banner with instant application modal trigger.

### 2. About Us Page (`/about`)
- **Foundational Legacy**: Four decades of technical education history under the patronage of Taralabalu Medical & Arts Education Society.
- **Vision & Mission**: Detailed institutional commitments to technical pedagogy, industry readiness, and ethics.
- **Leadership & Academic Council**: Profiles, qualifications, and messages from the Chief Patron Swamiji, Principal Dr. Veerabhadraiah, Vice Principal Prof. Geetha, and Placement Head Mr. Rajeshwar.
- **Historic Milestones Timeline**: Key institutional milestones from 1984 inception to the 2024 Centre of Excellence in AI & Data.
- **Statutory Disclosures**: AICTE mandatory disclosures and DTE Karnataka accreditation code.

### 3. Diploma Courses Page (`/courses`)
- **Live Search & Filters**:
  - Real-time instant search input matching courses, codes, subjects, and career paths.
  - Category filter tabs: *All Departments*, *Computer Science & IT*, *Core Engineering*, *Emerging Technologies*.
  - Sort dropdown: *Highest Rating*, *Highest Seat Intake*, *Annual Fee (Lowest)*.
  - Active filter count and one-click reset button.
- **Detailed Course Cards**:
  - High-res cover image, course code badge, department, star rating with reviews count.
  - Duration, annual fee, seat intake, top recruiter tags.
  - Quick action buttons: "View Syllabus" and "Apply".

### 4. Course Details Page (`/courses/:id`)
- **Dynamic Route**: Dedicated detail page for all 8 diploma programs:
  1. *Diploma in Computer Science & Engineering*
  2. *Diploma in Artificial Intelligence & Machine Learning*
  3. *Diploma in Mechanical Engineering*
  4. *Diploma in Civil Engineering*
  5. *Diploma in Electrical & Electronics Engineering*
  6. *Diploma in Electronics & Communication Engineering*
  7. *Diploma in Automobile Engineering*
  8. *Diploma in Mechatronics & Industrial Automation*
- **Course Header**: Code, annual fee, intake, duration, student rating.
- **Interactive Tabs**:
  - **Semester Syllabus**: Complete 6-semester breakdown with interactive accordions showing every subject module and practical lab session.
  - **Branch Overview**: Academic vision, industrial relevance, and eligibility.
  - **Learning Outcomes & Careers**: Key graduate competencies and job designations.
  - **Laboratories & Facilities**: Dedicated department labs and apparatus.
  - **HOD & Faculty**: Head of Department credentials, experience, and contact email.
- **Sidebar**: Top recruiters for the branch, admissions counseling helpline, and related courses.
- **Enroll / Apply Modal**: Multi-step application modal pre-filled with the course.

### 5. Admissions Page (`/admissions`)
- **4-Step Admission Procedure**: Application submission, document verification, seat allocation, and enrollment.
- **Eligibility Guidelines**: Detailed criteria for 1st Year (after 10th/SSLC with 35%) and Lateral Entry 2nd Year (for ITI / 12th Vocational).
- **Mandatory Documents Checklist**: SSLC marks cards, TC, study certificates, caste/income certificates.
- **Fee Structure & Scholarships**: Government quota fees, institutional seats, and Karnataka SSP / Pragati scholarship schemes.
- **Admission FAQs**: Accordion addressing common queries regarding DCET, scholarships, and hostel accommodation.

### 6. Contact Us Page (`/contact`)
- **Contact Cards**: Campus address in Hosapete, direct phone helplines, official emails, and office timings.
- **Institutional Contact Directory**: Principal's office, placement cell, and examination section emails.
- **Interactive Contact Form**: Complete validation (name, 10-digit mobile, email, branch preference, message) with instant confirmation toast.
- **Google Maps Integration**: Responsive, interactive map embed focused on the Hosapete campus location with visitor reception guidance.

### 7. Login & Sign Up Pages (`/login`, `/signup`)
- **Role-Based Authentication**: Seamless switching between *Student*, *Faculty / Staff*, and *Applicant 2025* portals.
- **Form Validation**: Email validation, minimum 6-character password rule, password confirmation check, and terms agreement.
- **Password Visibility Toggle**: Interactive eye icon (`Eye` / `EyeOff`) to view or hide passwords.
- **Clean Split Layout**: Left institutional security banner + right authentication console adhering to the 2-color brand palette.

### 8. Global Modals & Utilities
- **Course Search Modal (`⌘K`)**: Global quick-search dialog accessible from any page.
- **Application Modal**: Instant admission application popup with course selector, entry type (1st Year / Lateral), and marks validation.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component architecture |
| **Vite 8** | High-performance bundling and development server |
| **Tailwind CSS 3** | Minimalist utility-first design system |
| **React Router DOM 7** | Client-side routing and deep linking |
| **Lenis** | Smooth inertial scrolling engine |
| **Lucide React** | Clean, minimalist iconography |
| **Google Fonts (Outfit)** | Geometric modern typography |

---

## 💻 Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/rohith10ty/tmaes-polytechnic.git

# 2. Navigate to project folder
cd "education website"

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview -- --port 4173
```

---

## 🌐 Deployment Guidelines

The project includes pre-configured `vercel.json` rewrite rules for zero-configuration static and single-page routing on **Vercel** or **Netlify**:

### Deploying to Vercel
1. Import repository in [Vercel Dashboard](https://vercel.com/new).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Click **Deploy**.

### Deploying to Netlify
1. Connect GitHub repository on [Netlify](https://app.netlify.com).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.
4. Deploy site.

---

## 📜 License
Developed for **TMAES Polytechnic** educational and admissions showcase. Distributed under the MIT License.
