"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MlAiDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offeredServices = [
    {
      title: "Data Engineering & Feature Pipelines",
      desc: "Architecting high-throughput ETL/ELT data pipelines, data lakes, and real-time feature stores to prepare raw data for machine learning model training.",
    },
    {
      title: "Custom LLM & Generative AI Solutions",
      desc: "Building domain-specific Large Language Models, fine-tuning open-source models (Llama 3, Mistral), and implementing Retrieval-Augmented Generation (RAG).",
    },
    {
      title: "Computer Vision & Video Analytics",
      desc: "Object detection, facial recognition, automated visual inspection, OCR document processing, and real-time video stream telemetry using OpenCV and YOLO.",
    },
    {
      title: "Natural Language Processing (NLP) & Speech AI",
      desc: "Sentiment analysis, entity recognition, multilingual translation, text summarization, and neural voice synthesis engines.",
    },
    {
      title: "Predictive Analytics & Time-Series Forecasting",
      desc: "Machine learning algorithms for demand forecasting, customer churn prediction, predictive maintenance, financial risk modeling, and anomaly detection.",
    },
    {
      title: "Personalization & Recommendation Engines",
      desc: "Collaborative filtering, deep learning recommendation models, and real-time user behavior personalization for e-commerce and media platforms.",
    },
    {
      title: "Full Lifecycle MLOps & Model Deployment",
      desc: "Containerizing ML models, automating CI/CD retraining pipelines, setup of MLflow tracking, and sub-second GPU inference API deployments.",
    },
    {
      title: "Deep Learning & Neural Network Architecture",
      desc: "Custom Transformer, CNN, and RNN model design tailored for high-dimensional complex datasets, medical imaging, and sensor telemetry.",
    },
    {
      title: "Conversational AI Agents & Intelligent Bots",
      desc: "Autonomous conversational AI agents powered by multi-turn dialogue engines, tool use, and enterprise knowledgebase integrations.",
    },
    {
      title: "AI Ethics, Governance & Model Auditing",
      desc: "Bias mitigation, Explainable AI (XAI) frameworks, compliance auditing, and continuous drift monitoring to ensure ethical model behavior.",
    },
  ];

  const techStack = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "Neural Framework" },
    { name: "Scikit-Learn", category: "ML Algorithms" },
    { name: "OpenAI GPT-4o", category: "Generative AI" },
    { name: "Hugging Face", category: "Transformers & Models" },
    { name: "MLflow", category: "MLOps Tracking" },
    { name: "LangChain", category: "AI Agent Orchestration" },
    { name: "AWS SageMaker", category: "Cloud ML Platform" },
    { name: "Google Vertex AI", category: "Cloud AI Infrastructure" },
    { name: "NVIDIA CUDA", category: "GPU Acceleration" },
  ];

  const industriesList = [
    { name: "FINTECH & BANKING", desc: "Credit scoring models, real-time fraud detection, and algorithmic trading telemetry." },
    { name: "HEALTHCARE & PHARMA", desc: "Medical image diagnostics, drug discovery analytics, and clinical trial prediction." },
    { name: "RETAIL & E-COMMERCE", desc: "Dynamic pricing engines, visual search AI, and personalized recommendation systems." },
    { name: "SUPPLY CHAIN & LOGISTICS", desc: "Demand forecasting, route optimization, and automated warehouse inventory AI." },
    { name: "TELECOMMUNICATIONS", desc: "Network traffic anomaly detection, churn prediction models, and automated customer care bots." },
    { name: "AUTOMOTIVE & MANUFACTURING", desc: "Predictive equipment maintenance, automated visual defect QA, and IoT sensor analytics." },
    { name: "REAL ESTATE & PROPTECH", desc: "Automated property valuation algorithms, virtual staging AI, and tenant analytics." },
    { name: "SOFTWARE PLATFORMS & SAAS", desc: "Embedding copilot features, intelligent search engines, and automated data tagging." },
  ];

  const clientLogos = [
    { name: "Robi", label: "Robi Axiata" },
    { name: "Grameenphone", label: "Grameenphone" },
    { name: "ACI", label: "ACI Limited" },
    { name: "City Bank", label: "The City Bank Ltd" },
    { name: "Unipart", label: "Unipart Group" },
    { name: "MetLife", label: "MetLife Insurance" },
  ];

  const faqs = [
    {
      question: "How can AI and Machine Learning benefit my business?",
      answer:
        "AI and ML automate manual tasks, unlock predictive insights from complex datasets, personalize customer experiences, reduce operational costs, and enable 24/7 autonomous business workflows.",
    },
    {
      question: "What data do I need to start an AI/ML project with Autofya?",
      answer:
        "You don't need a perfect data setup to begin! Autofya's data engineers evaluate your existing data sources (SQL, NoSQL, APIs, CSVs, logs), clean and structure the datasets, build feature pipelines, and identify the optimal ML approach for your business objectives.",
    },
    {
      question: "How does Autofya protect privacy and IP during custom AI model development?",
      answer:
        "Your data and trained model weights remain 100% your proprietary IP. We train custom models inside isolated, SOC2-compliant enterprise cloud environments with strict NDA compliance and zero external model training on your data.",
    },
    {
      question: "How long does it take to deploy a production-ready ML model?",
      answer:
        "A Proof of Concept (PoC) or MVP model is typically delivered within 3 to 6 weeks. Production-ready MLOps pipelines with API integration, continuous retraining, and load testing generally range from 8 to 12 weeks depending on model complexity.",
    },
    {
      question: "What is the difference between AI, Machine Learning, and Deep Learning?",
      answer:
        "Artificial Intelligence (AI) is the broad umbrella of computer systems performing smart tasks. Machine Learning (ML) is a subset of AI where systems learn automatically from data without explicit programming. Deep Learning uses multi-layer neural networks to analyze complex patterns like images, audio, and large language text.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (CYBER CIRCUIT BOARD THEME)               */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Cyber Circuit Background Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="AI ML Cyber Circuit Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D20] via-[#060D20]/95 to-[#0B1A3A]/90 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content Box Overlay */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Enterprise Artificial Intelligence Practice
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    Machine Learning (ML) &amp; <span className="text-[#00a2ad]">Artificial Intelligence (AI)</span>
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Automate processes, predict trends, and empower your business with custom AI &amp; ML solutions engineered by Autofya.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Talk to us</span>
                      <span className="text-xl">→</span>
                    </Link>
                    <a
                      href="#offered-services"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore Services</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Model Training Telemetry Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-5 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                        <span className="ml-2 text-slate-300">Autofya-ML-Trainer.py</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                        99.4% ACCURACY
                      </span>
                    </div>

                    <div className="py-4 space-y-2 text-xs text-slate-300">
                      <p className="text-purple-400">import <span className="text-slate-100">torch, autofya_ml</span></p>
                      <p className="text-slate-400"># Initializing Custom Enterprise Neural Network</p>
                      <p className="text-cyan-300">model = <span className="text-slate-100">autofya_ml.LLMFineTuner(base=&quot;Llama-3-70B&quot;)</span></p>
                      <p className="text-emerald-400"># Training Epoch 50/50 [Loss: 0.0014]</p>
                      <p className="pl-4 text-slate-300">✔ Validation Accuracy: <span className="text-emerald-400 font-bold">99.42%</span></p>
                      <p className="pl-4 text-slate-300">✔ Sub-Second GPU Latency: <span className="text-cyan-300 font-bold">12ms</span></p>
                    </div>

                    <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-center justify-between font-sans">
                      <span>⚡ Custom Model Deployment</span>
                      <span className="font-bold text-emerald-400">MLOps Ready</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OVERVIEW SECTION (2-COLUMN TEXT)                        */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-lg font-bold text-2xl">
                AI
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700 text-base leading-relaxed max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Demystifying AI &amp; ML Integration
                </h3>
                <p>
                  Artificial Intelligence and Machine Learning are no longer futuristic concepts—they are core business drivers. From predictive forecasting to generative AI copilots, machine learning unlocks deep competitive advantages by transforming complex unstructured data into actionable decisions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Autofya AI &amp; ML Engineering
                </h3>
                <p>
                  At Autofya, our machine learning engineers, data scientists, and MLOps architects build tailored AI solutions. We deliver end-to-end capabilities—ranging from data engineering and custom LLM fine-tuning to computer vision, NLP, and enterprise microservices integration.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. OFFERED SERVICES SECTION                                */}
        {/* ========================================================= */}
        <section id="offered-services" className="py-20 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 space-y-4 sticky top-28">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  AI &amp; ML Spectrum
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                  Offered <br />
                  <span className="text-[#00a2ad]">Services</span>
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                <p className="text-slate-600 text-base leading-relaxed">
                  End-to-end artificial intelligence and machine learning solutions engineered for high performance, accuracy, and enterprise scalability.
                </p>
                <div className="pt-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1340] hover:bg-[#15205b] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Talk to AI Specialist</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Offered Services List */}
              <div className="lg:col-span-7 space-y-4">
                {offeredServices.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a2ad] hover:bg-cyan-50/30 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                      ›
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. TECHNOLOGIES WE USE                                    */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Tech Frameworks
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Technologies we use
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00a2ad] shadow-sm hover:shadow-md transition-all text-center space-y-1 group"
                >
                  <p className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-xs font-semibold text-slate-400">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. INDUSTRIES SECTION                                      */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                    Industry Domains
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                    Industries
                  </h2>
                  <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {industriesList.map((ind, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all space-y-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs font-extrabold text-[#0B1340] tracking-wide">
                          {ind.name}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-[11px] leading-relaxed pl-7">
                        {ind.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: AI Engineer Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/hero_ai_engineer.jpg"
                    alt="Autofya AI Engineer Visual"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Applied AI Engineering
                    </p>
                    <p className="text-sm font-semibold">
                      Enterprise Neural Network &amp; Predictive Analytics
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. WHO WE'VE WORKED WITH                                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Global Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Who we&apos;ve worked with
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#00a2ad] transition-all text-center group cursor-default"
                >
                  <p className="text-lg sm:text-xl font-black text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {client.name}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {client.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. FEATURE DEEP-DIVE #1 (TEXT LEFT, GRAPHIC RIGHT)        */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Advanced Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  Custom Model Fine-Tuning &amp; RAG Architecture
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                
                <p className="text-slate-600 text-base leading-relaxed">
                  Generic LLMs often lack context for domain-specific enterprise data. Autofya builds custom Retrieval-Augmented Generation (RAG) pipelines and fine-tunes state-of-the-art open-source LLMs to query your private databases securely.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Domain Knowledge RAG Vector Databases (Pinecone, Qdrant)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Real-Time Predictive Telemetry &amp; Anomaly Detection</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Intelligent Document OCR Extraction (PDFs, Invoices, Contracts)</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/capabilities_digital_trans.jpg"
                    alt="Autofya AI Model Training Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Enterprise RAG Pipeline
                    </p>
                    <p className="text-sm font-semibold">
                      Real-Time Vector Search &amp; Sub-Second Context Retrieval
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. FEATURE DEEP-DIVE #2 (IMAGE LEFT, TEXT RIGHT)        */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/hero_cloud_devops.jpg"
                    alt="Autofya AI Engineering Squad"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Full-Lifecycle MLOps
                    </p>
                    <p className="text-sm font-semibold">
                      Continuous Model Retraining &amp; Drift Monitoring
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Enterprise Governance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  Building Scalable, Enterprise-Grade AI Solutions
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                
                <p className="text-slate-600 text-base leading-relaxed">
                  Moving from an AI prototype to a reliable production system requires rigorous MLOps. Autofya implements containerized inference pipelines, continuous model drift monitoring, Explainable AI (XAI) auditing, and seamless REST/GraphQL API integration with legacy enterprise systems.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Explainable AI (XAI) &amp; Complete Audit Trail Transparency</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Sub-Second Model Inference Latency over Microservice APIs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>SOC2 &amp; GDPR Compliant Enterprise Model Sandboxing</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. LET US HELP YOU WITH YOUR PROJECT BANNER               */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Drive Intelligent Growth
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Let Us Help You With Your AI &amp; ML Project
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                  Connect with Autofya&apos;s machine learning architects to evaluate your data readiness, build custom AI models, or integrate Generative AI into your product.
                </p>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Talk to us</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>

              {/* Team Graphic Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/company_team_group.jpg"
                    alt="Autofya AI & ML Practice Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Autofya AI &amp; ML Practice</p>
                    <p className="text-xs text-slate-300">Data Scientists &amp; MLOps Engineers</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. FAQS SECTION (WITH CONTACT SIDEBAR BOX)               */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Contact Info Sidebar */}
              <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1340] mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Can&apos;t find the answer you&apos;re looking for? Reach out to our AI solution architects directly.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Email Us</span>
                    <a href="mailto:sales@autofya.com" className="text-[#00a2ad] font-semibold hover:underline">
                      sales@autofya.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Call Us</span>
                    <span className="text-[#0B1340] font-semibold">
                      +1 606 773 7443
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="block text-center w-full py-3 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>

              {/* Right Accordion FAQs */}
              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#0B1340] text-base sm:text-lg hover:text-[#00a2ad] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <span className="text-[#00a2ad] font-extrabold text-xl shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
