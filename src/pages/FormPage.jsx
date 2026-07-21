import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "kids",
    name: "Kids & Teens Summer Program",
    badge: "Fun, fundamentals, and confidence-building",
    ages: "Ages 6–12",
    schedule: "July 13 – August 28, 2026 | Mon–Fri | 9:30am – 12:00pm",
    fee: "₦250,000",
    includes: ["T-shirt", "Certificate", "Weekly parent progress update"],
    highlights: [
      "Dribbling, passing, shooting, and defense fundamentals",
      "Small-sided games, contests, and relay challenges",
      "Teamwork, respect, discipline, and character growth",
      "A fun first step into structured basketball training",
    ],
    requiresGuardian: true,
  },
  {
    id: "elite",
    name: "Elite Summer Program",
    badge: "For aspiring high-performance players",
    ages: "Ages 13–18",
    schedule: "July 13 – August 28, 2026 | 9:30am – 12:00pm daily",
    fee: "₦280,000",
    includes: ["Jersey", "Performance report", "Tryout-based placement"],
    highlights: [
      "Advanced ball-handling and shooting off movement",
      "Speed, agility, jump training, and athletic recovery",
      "Basketball IQ through film study, spacing, and decision-making",
      "Scrimmages and highlight clips for player exposure",
    ],
    requiresGuardian: false,
  },
];

const steps = [
  "Choose the age range that fits your child or teen",
  "Complete the matching registration form below",
  "Submit your details and payment confirmation to secure your spot",
  "Receive confirmation and program details from the academy team",
];

const requirements = [
  "Full name and age",
  "Parent or guardian details for under-18 players",
  "WhatsApp-friendly contact number and email",
  "Program selection and medical waiver",
  "Payment confirmation or transaction ID",
];

const initialFormState = {
  fullName: "",
  age: "",
  phone: "",
  email: "",
  ageRange: "",
  parentName: "",
  parentPhone: "",
  program: "",
  medicalWaiver: false,
  medicalInfo: "",
  paymentMethod: "",
  paymentDetails: "",
  tryoutSchedule: "",
  notes: "",
  receiptFileName: "",
};

export function ProgramRegistrationSection() {
  return (
    <section className="bg-slate-950 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-3">
              Program Registration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the next CourtSide Academy summer program
            </h2>
            <p className="text-lg text-slate-300 leading-8 mb-6">
              Choose your age group, complete the registration form online, and secure your place in a structured basketball program built for growth and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/form"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
              >
                Start registration
              </Link>
              <Link
                to="/form"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-400 transition"
              >
                View program forms
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">What you need before you register</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FormPage() {
  const [selectedProgramId, setSelectedProgramId] = useState(programs[0].id);
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const formSectionRef = useRef(null);

  const selectedProgram = programs.find((program) => program.id === selectedProgramId) ?? programs[0];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "age") {
      const ageValue = Number(value);
      const matchedProgram =
        ageValue > 12
          ? programs.find((program) => program.id === "elite")
          : programs.find((program) => program.id === "kids");

      if (matchedProgram) {
        setSelectedProgramId(matchedProgram.id);
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
          ageRange: matchedProgram.ages,
          program: matchedProgram.name,
        }));
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      `New Program Registration`,
      `Full Name: ${formData.fullName}`,
      `Age: ${formData.age}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Program: ${selectedProgram.name}`,
      `Age Range: ${selectedProgram.ages}`,
      `Parent/Guardian: ${formData.parentName || "N/A"}`,
      `Parent/Guardian Phone: ${formData.parentPhone || "N/A"}`,
      `Medical Waiver: ${formData.medicalWaiver ? "Yes" : "No"}`,
      `Medical Notes: ${formData.medicalInfo || "N/A"}`,
      `Payment Confirmation: ${formData.paymentMethod || "N/A"}`,
      `Receipt File: ${formData.receiptFileName || "N/A"}`,
      `Payment Details: ${formData.paymentDetails || "N/A"}`,
      `Tryout Schedule: ${formData.tryoutSchedule || "N/A"}`,
      `Notes: ${formData.notes || "N/A"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/2348100996930?text=${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:alicho@courtsideacademy.ng,monday@courtsideacademy.ng?subject=${encodeURIComponent(`New Program Registration - ${selectedProgram.name}`)}&body=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-black text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-4 w-fit transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Program Registration</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
            Choose the age range that fits your child, fill the matching form, and secure a place in our summer basketball programs.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Select the age range</h2>
          <p className="text-slate-600 mb-6">
            Pick the range that matches your child so you can access the correct registration form.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {programs.map((program) => (
              <button
                key={program.id}
                type="button"
                onClick={() => {
                  setSelectedProgramId(program.id);
                  setFormData((prev) => ({ ...prev, ageRange: program.ages, program: program.name }));
                  setSubmitted(false);
                  formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`rounded-2xl border p-5 text-left transition ${
                  selectedProgramId === program.id
                    ? "border-orange-500 bg-orange-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-orange-300"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">{program.badge}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{program.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{program.ages}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">How registration works</h3>
            <ol className="space-y-3 text-slate-700">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Program details</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">Program:</span> {selectedProgram.name}</p>
              <p><span className="font-semibold text-slate-900">Age range:</span> {selectedProgram.ages}</p>
              <p><span className="font-semibold text-slate-900">Schedule:</span> {selectedProgram.schedule}</p>
              <p><span className="font-semibold text-slate-900">Fee:</span> {selectedProgram.fee}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {selectedProgram.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Registration form</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">{selectedProgram.name}</h3>
            <p className="mt-2 text-slate-600">
              Complete the form below for {selectedProgram.ages}. We will use these details to confirm your place and send the next steps.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-green-700">
              <h4 className="font-semibold">Registration request received</h4>
              <p className="mt-1 text-sm">
                Thank you, {formData.fullName || "participant"}. We have received your registration request for {selectedProgram.name}.
              </p>
            </div>
          ) : (
            <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full name <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Exact age <span className="ml-1 text-red-500">*</span>
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  required
                >
                  <option value="">Select age</option>
                  {Array.from({ length: 16 }, (_, index) => index + 5).map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-slate-500">Choose the exact age and we’ll match the right program automatically.</p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Contact number (WhatsApp preferred) <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08012345678"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
              </div>

              {selectedProgram.requiresGuardian && (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Parent / guardian name <span className="ml-1 text-red-500">*</span>
                    </label>
                    <input
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Parent or guardian full name"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Parent / guardian phone <span className="ml-1 text-red-500">*</span>
                    </label>
                    <input
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="Parent or guardian phone"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Selected age range <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  name="ageRange"
                  value={selectedProgram.ages}
                  readOnly
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600"
                />
              </div>

              <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <label className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    name="medicalWaiver"
                    checked={formData.medicalWaiver}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                    required
                  />
                  <span>I agree to the medical waiver and confirm that I have shared any asthma, injury, or medical concerns relevant to participation.</span>
                </label>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Medical / special note</label>
                <textarea
                  name="medicalInfo"
                  value={formData.medicalInfo}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Mention injuries, allergies, asthma, medical needs, or any information we should know"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Payment confirmation <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="paymentMethod"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    setFormData((prev) => ({
                      ...prev,
                      paymentMethod: file ? file.name : "",
                      receiptFileName: file ? file.name : "",
                    }));
                  }}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
                <p className="mt-2 text-sm text-slate-500">Upload the payment receipt or enter the transaction ID below.</p>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Payment details <span className="ml-1 text-red-500">*</span>
                </label>
                <textarea
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Add bank name, payment reference, amount paid, or any payment notes"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
              </div>

              {selectedProgram.id === "elite" && (
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Tryout schedule</label>
                  <input
                    name="tryoutSchedule"
                    value={formData.tryoutSchedule}
                    onChange={handleChange}
                    placeholder="Preferred tryout date or availability"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  />
                </div>
              )}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Anything else you want us to know?</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Share your goals, interests, or preferred training focus"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
                >
                  Submit registration
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
