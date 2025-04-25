"use client";

import { useState } from "react";
import Image from "next/image";
import { RefreshCw } from "lucide-react";
import EditableText from "./editable-text";
import { Button } from "@/components/ui/button";

// Sample data for AI regeneration
const headlines = [
  "Transform Your Digital Experience Today",
  "Elevate Your Online Presence",
  "Innovate, Create, Dominate",
  "Unlock Your Business Potential",
  "Redefine What's Possible Online",
];

const subheadlines = [
  "Powerful solutions designed to help your business thrive in the digital landscape.",
  "Streamline your workflow and boost productivity with our cutting-edge platform.",
  "Join thousands of satisfied customers who have revolutionized their online strategy.",
  "Custom solutions tailored to meet your unique business challenges and goals.",
  "Stay ahead of the competition with our innovative and scalable technology.",
];

const images = [
  "/assets/digital.webp",
  "/assets/presense.png",
  "/assets/innovate.jpg",
  "/assets/leadership.webp",
  "/placeholder.svg?height=600&width=600&text=Technology",
];

export default function HeroSection() {
  const [headline, setHeadline] = useState(headlines[0]);
  const [subheadline, setSubheadline] = useState(subheadlines[0]);
  const [imageSrc, setImageSrc] = useState(images[0]);

  const regenerateContent = () => {
    const randomHeadline =
      headlines[Math.floor(Math.random() * headlines.length)];
    const randomSubheadline =
      subheadlines[Math.floor(Math.random() * subheadlines.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    setHeadline(randomHeadline);
    setSubheadline(randomSubheadline);
    setImageSrc(randomImage);
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <EditableText
              value={headline}
              onChange={setHeadline}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            />

            <EditableText
              value={subheadline}
              onChange={setSubheadline}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl"
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={regenerateContent}
                className="flex items-center gap-2 border-slate-300 dark:border-slate-700"
              >
                <RefreshCw className="h-4 w-4" />
                Regenerate with AI
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt="Hero illustration"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
