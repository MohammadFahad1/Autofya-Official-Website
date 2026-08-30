import React from "react";
import Image from "next/image";

interface AutofyaLogoProps {
  className?: string;
  height?: number;
  showTagline?: boolean;
}

export default function AutofyaLogo({
  className = "",
  height = 42,
}: AutofyaLogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/logo.jpeg"
        alt="Autofya - Software • AI • Automation"
        width={180}
        height={height}
        priority
        className="h-10 sm:h-11 w-auto object-contain"
      />
    </div>
  );
}
