"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataScienceBusinessIntelligencePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techPartners = [
    { name: "Databricks", logoText: "DATABRICKS PARTNER" },
    { name: "Alteryx", logoText: "ALTERYX ANALYTICS" },
    { name: "Snowflake", logoText: "SNOWFLAKE LAKEHOUSE" },
    { name: "Power BI", logoText: "MICROSOFT POWER BI" },
    { name: "Tableau", logoText: "TABLEAU ENTERPRISE" },
    { name: "Google BigQuery", logoText: "GCP BIGQUERY" },
  ];

  const pipelineSteps = [
    {
      step: "01",
      title: "Data Ingestion & Automated ETL/ELT",
      desc: "Extracting raw structured, semi-structured, and unstructured data from transactional databases, cloud APIs, and IoT sensors.",
      icon: "📥",
    },
    {
      step: "02",
      title: "Data Warehousing & Schema Modeling",
      desc: "Structuring clean data into Snowflake, Databricks, or BigQuery data lakehouses with optimized star/snowflake schemas.",
      icon: "🗄️",
    },
    {
      step: "03",
      title: "Exploratory Data Analysis & Feature Engineering",
      desc: "Statistical profiling, anomaly detection, data cleansing, and domain-specific feature synthesis for machine learning.",
      icon: "⚙️",
    },
    {
      step: "04",
      title: "Predictive ML Model Development",
      desc: "Training custom Transformer, XGBoost, and Deep Learning models for demand forecasting, churn prediction, and risk scoring.",
      icon: "🧠",
    },
    {
      step: "05",
      title: "BI Dashboard Deployment & Action",
      desc: "Deploying real-time interactive Power BI, Tableau, or Looker executive dashboards with automated alert triggers.",
      icon: "📊",
    },
  ];

  const capabilities = [
    "TensorFlow & PyTorch Certified Deep Learning Engineers",
    "AWS Certified Big Data & Machine Learning Specialists",
    "Databricks & Snowflake Data Lakehouse Architects",
    "Microsoft Power BI & Tableau Certified Analysts",
    "Python, R, Julia & Advanced SQL Data Science Experts",
    "Apache Spark, Kafka & Airflow Real-Time Pipeline Developers",
  ];

  const industries = [
    {
      name: "HealthCare & Life Sciences",
      desc: "Predictive patient outcome modeling, clinical trial analytics, and medical image diagnostics.",
      icon: "🏥",
    },
    {
      name: "Retail & E-Commerce",
      desc: "Customer churn prediction, dynamic pricing engines, and personalized recommendation systems.",
      icon: "🛒",
    },
    {
      name: "Manufacturing & Supply Chain",
      desc: "Predictive equipment maintenance, inventory demand forecasting, and yield optimization.",
      icon: "🏭",
    },
    {
      name: "Aerospace & Defense",
      desc: "Sensor telemetry analytics, flight path optimization, and predictive component lifecycle modeling.",
      icon: "✈️",
    },
    {
      name: "Financial Services & Banking",
      desc: "Real-time transaction fraud detection, credit risk scoring, and automated portfolio balancing.",
      icon: "💳",
    },
  ];

  const outcomes = [
    { val: "10X", label: "Faster BI Insight Generation", desc: "Automated data pipelines replace manual Excel reporting with sub-second dashboards." },
    { val: "45%", label: "Reduction in Analytics Costs", desc: "Streamlined cloud data lakehouse storage and query optimization." },
    { val: "98%", label: "Predictive Model Accuracy", desc: "High-precision ML algorithms trained on clean, feature-engineered datasets." },
    { val: "100%", label: "Automated Data Refresh", desc: "Real-time streaming pipeline sync ensuring decision-makers view live data." },
    { val: "24/7", label: "Real-Time Telemetry", desc: "Continuous model drift monitoring, data quality validation, and alert triggers." },
    { val: "3.5X", label: "Average ROI on Data Projects", desc: "Quantifiable bottom-line revenue growth driven by data-backed decision making." },
  ];

  const faqs = [
    {
      q: "How does Autofya help convert raw unstructured data into actionable BI dashboards?",
      a: "Autofya designs modern data lakehouse architectures using Snowflake or Databricks. We build automated ETL pipelines using Apache Spark and Airflow to extract data from legacy databases, CRMs, and APIs, transform and clean it, and load it into interactive Power BI or Tableau dashboards updated in real time.",
    },
    {
      q: "What is the difference between Business Intelligence (BI) and Data Science?",
      a: "Business Intelligence focuses on descriptive and diagnostic analytics—answering 'What happened?' and 'Why did it happen?' using historical dashboards and reports. Data Science focuses on predictive and prescriptive analytics—using machine learning to answer 'What will happen?' and 'What action should we take next?'",
    },
    {
      q: "How do you ensure data governance, security, and privacy during analytics projects?",
      a: "We enforce strict Zero-Trust data governance policies. All sensitive customer PII is anonymized and tokenized at ingestion. Data storage and queries comply fully with SOC-2, ISO 27001, GDPR, and HIPAA standards using role-based access control (RBAC) and AES-256 encryption.",
    },
    {
      q: "Can you deploy predictive ML models directly into our existing application stack?",
      a: "Yes! We containerize machine learning models using Docker and deploy them as high-throughput REST or gRPC APIs (via FastAPI / MLflow) that integrate seamlessly into your web, mobile, or enterprise ERP applications.",
    },
    {
      q: "How do you prevent Machine Learning model drift over time?",
      a: "Autofya implements continuous MLOps telemetry pipelines using Prometheus and MLflow. We monitor incoming data distributions and model prediction accuracy in real time, automatically triggering retraining alerts whenever data drift exceeds predefined thresholds.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1340] text-slate-100 font-sans">
      <Navbar />

      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative pt-32 pb-20 bg-[#0B1340] overflow-hidden border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111A4E] border border-[#00a2ad]/30">
                <span className="w-2 h-2 rounded-full bg-[#00a2ad]"></span>
                <span className="text-xs font-bold tracking-widest text-[#00a2ad] uppercase">
                  ADVANCED ANALYTICS & PREDICTIVE AI
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Data Science &amp; Business Intelligence
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Transform complex structured and unstructured data into actionable executive insights, predictive machine learning models, and real-time interactive dashboards with Autofya.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">10X Faster</div>
                  <div className="text-xs text-slate-300 mt-0.5">BI Insights</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Pipeline Reliability</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">3.5X ROI</div>
                  <div className="text-xs text-slate-300 mt-0.5">Average Value</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-base rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule Data Strategy Call</span>
                  <span>→</span>
                </a>
                <a
                  href="#pipeline"
                  className="px-7 py-3.5 bg-[#111A4E] hover:bg-[#182366] text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Data Pipeline</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual (BI Dashboard Telemetry Mockup) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#111A4E] border border-slate-700/80 rounded-2xl p-5 shadow-2xl space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">autofya-bi-lakehouse-v5.3</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#00a2ad]/20 text-[#00a2ad] text-xs font-semibold rounded">
                    LIVE STREAMING
                  </span>
                </div>

                {/* Dashboard Container inside Mockup */}
                <div className="grid grid-cols-12 gap-4">
                  {/* Left Column: Predictive Sales Analytics */}
                  <div className="col-span-7 bg-[#0B1340] p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Quarterly Predictive Forecast</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
                        98.4% Acc.
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="flex justify-between font-bold text-white text-[11px]">
                          <span>Predicted Revenue</span>
                          <span className="text-[#00a2ad]">$4.2M (+28%)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#00a2ad] h-full w-[84%] rounded-full"></div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white text-[11px]">Customer Churn Risk Alert</div>
                          <div className="text-[10px] text-slate-400">ML Model #408 (High Priority)</div>
                        </div>
                        <span className="text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded text-[10px]">
                          Flagged (14 Users)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Data Lakehouse Health */}
                  <div className="col-span-5 bg-[#060C2C] p-3 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-center pb-2 border-b border-slate-800">
                      <div className="text-xs font-bold text-white">Snowflake Lakehouse</div>
                      <div className="text-[10px] text-[#00a2ad] font-semibold">ETL Sync OK</div>
                    </div>

                    <div className="space-y-2 text-[10px]">
                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">Spark Pipeline</div>
                        <div className="text-emerald-400 font-bold">✓ 2.4M Events/sec</div>
                      </div>

                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">Power BI Sync</div>
                        <div className="text-white font-bold">Sub-Second Refresh</div>
                      </div>

                      <div className="p-2 bg-[#00a2ad]/20 border border-[#00a2ad]/40 rounded text-center">
                        <div className="font-bold text-[#00a2ad]">Databricks Active</div>
                        <div className="text-slate-300 text-[9px]">Model Drift: 0.01%</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 2. OVERVIEW / VALUE PROPOSITION ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
            VALUE CREATION FROM BIG DATA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] leading-snug">
            Turn Raw Enterprise Big Data into Strategic Business Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Data is a strategic asset only if business leaders can extract rapid, accurate insights from it. Autofya helps enterprises build automated data lakehouse pipelines, clean messy data silos, deploy predictive machine learning algorithms, and create interactive executive BI dashboards (Power BI, Tableau, Looker) that empower leadership to make informed decisions faster.
          </p>
        </div>
      </section>

      {/* ----------------- 3. DATA SCIENCE PIPELINE (5-STEP LIFECYCLE) ----------------- */}
      <section id="pipeline" className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              END-TO-END METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Data Science Pipeline
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A structured 5-step data engineering and machine learning pipeline powering enterprise intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-[#00a2ad] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-lg bg-[#0B1340] text-[#00a2ad] font-bold text-sm flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 4. CERTIFICATIONS & TECHNICAL CAPABILITIES ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                TECHNICAL CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Our Certifications &amp; Technical Capabilities
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Our data engineers and data scientists hold industry-leading certifications from AWS, Microsoft, Snowflake, Databricks, and TensorFlow.
              </p>

              <ul className="space-y-3.5 pt-2">
                {capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#0B1340] text-[#00a2ad] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 bg-[#0B1340] rounded-2xl p-8 text-white border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Enterprise Data Stack Standards
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-4 bg-[#111A4E] rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-[#00a2ad] text-sm">ETL &amp; Data Pipeline Orchestration</div>
                  <div>Apache Airflow, Apache Spark, dbt, AWS Glue, Azure Data Factory</div>
                </div>

                <div className="p-4 bg-[#111A4E] rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white text-sm">Cloud Data Lakehouse Platforms</div>
                  <div>Snowflake, Databricks Delta Lake, Google BigQuery, AWS Redshift</div>
                </div>

                <div className="p-4 bg-[#111A4E] rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-[#00a2ad] text-sm">Business Intelligence &amp; Visualization</div>
                  <div>Power BI, Tableau Enterprise, Looker, Apache Superset, Plotly / Dash</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 5. OUR TECHNOLOGY PARTNERS ----------------- */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              ECOSYSTEM PARTNERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
              Our Technology Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {techPartners.map((partner, idx) => (
              <div
                key={idx}
                className="h-16 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 shadow-sm hover:border-[#00a2ad] transition-colors"
              >
                <span className="text-xs font-black text-[#0B1340] tracking-wider text-center">
                  {partner.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. INDUSTRIES WE TRANSFORM ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              VERTICAL ANALYTICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Industries We Transform
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Tailored analytics models and domain-specific data warehouses engineered for high-impact industry verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 hover:border-[#00a2ad] transition-all space-y-4 group"
              >
                <div className="text-4xl">{ind.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. MEASURABLE OUTCOMES ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              QUANTIFIABLE IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Measurable Business Outcomes
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Proven return on investment delivered through automated analytics and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-8 rounded-2xl border border-slate-700/80 space-y-3 hover:border-[#00a2ad] transition-all"
              >
                <div className="text-4xl font-extrabold text-[#00a2ad]">{item.val}</div>
                <h3 className="text-lg font-bold text-white">{item.label}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. FAQ & CONTACT CTA SECTION ----------------- */}
      <section id="contact" className="py-20 bg-[#0B1340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Data Science &amp; BI FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#111A4E] rounded-xl border border-slate-700/80 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 text-base font-bold text-white flex justify-between items-center cursor-pointer hover:text-[#00a2ad] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#00a2ad] text-lg font-bold ml-4">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA Card */}
          <div className="bg-[#111A4E] rounded-3xl p-8 sm:p-12 border border-[#00a2ad]/40 text-center space-y-8 max-w-5xl mx-auto shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                UNLOCK THE POWER OF YOUR DATA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Would Like to Start a Data Project with Us?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with an Autofya senior data architect to discuss custom data pipelines, ML models, or Power BI/Tableau dashboards.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! An Autofya data science architect will contact you shortly.");
              }}
              className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
            >
              <input
                type="text"
                required
                placeholder="Full Name"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <input
                type="email"
                required
                placeholder="Work Email Address"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <input
                type="text"
                required
                placeholder="Company Name"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <select
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-slate-300 text-sm focus:outline-none focus:border-[#00a2ad]"
              >
                <option value="BI">Project Focus: Power BI / Tableau Dashboards</option>
                <option value="Pipeline">Project Focus: Data Lakehouse & ETL</option>
                <option value="ML">Project Focus: Predictive Machine Learning</option>
                <option value="Audit">Project Focus: Big Data Architecture Audit</option>
              </select>
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00a2ad] hover:bg-[#008a94] text-white font-extrabold text-base rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Schedule Data Strategy Call Now
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
