"use client";

import { useState } from "react";
import { HAMPSHIRE_CITIES } from "@/lib/constants";

const MAP_WIDTH = 600;
const MAP_HEIGHT = 500;

const LAT_MIN = 50.72;
const LAT_MAX = 51.35;
const LNG_MIN = -1.55;
const LNG_MAX = -0.7;

function project(lat: number, lng: number) {
  const x = ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * MAP_WIDTH;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_HEIGHT;
  return { x, y };
}

const HAMPSHIRE_BOUNDARY = `
  M ${project(51.15, -1.55).x} ${project(51.15, -1.55).y}
  C ${project(51.3, -1.4).x} ${project(51.3, -1.4).y},
    ${project(51.33, -1.2).x} ${project(51.33, -1.2).y},
    ${project(51.32, -1.1).x} ${project(51.32, -1.1).y}
  C ${project(51.33, -0.95).x} ${project(51.33, -0.95).y},
    ${project(51.3, -0.78).x} ${project(51.3, -0.78).y},
    ${project(51.28, -0.73).x} ${project(51.28, -0.73).y}
  C ${project(51.18, -0.74).x} ${project(51.18, -0.74).y},
    ${project(51.05, -0.78).x} ${project(51.05, -0.78).y},
    ${project(50.95, -0.82).x} ${project(50.95, -0.82).y}
  C ${project(50.87, -0.88).x} ${project(50.87, -0.88).y},
    ${project(50.82, -0.95).x} ${project(50.82, -0.95).y},
    ${project(50.78, -1.0).x} ${project(50.78, -1.0).y}
  C ${project(50.74, -1.05).x} ${project(50.74, -1.05).y},
    ${project(50.76, -1.12).x} ${project(50.76, -1.12).y},
    ${project(50.78, -1.18).x} ${project(50.78, -1.18).y}
  C ${project(50.8, -1.3).x} ${project(50.8, -1.3).y},
    ${project(50.82, -1.42).x} ${project(50.82, -1.42).y},
    ${project(50.88, -1.5).x} ${project(50.88, -1.5).y}
  C ${project(50.95, -1.52).x} ${project(50.95, -1.52).y},
    ${project(51.05, -1.54).x} ${project(51.05, -1.54).y},
    ${project(51.15, -1.55).x} ${project(51.15, -1.55).y}
  Z
`;

export default function HampshireMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Serving All of Hampshire
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our BOHS-qualified surveyors and licensed removal teams cover every
            major town and city across Hampshire. Select a location to learn
            more.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="w-full h-auto"
              role="img"
              aria-label="Interactive map of Hampshire showing service coverage areas"
            >
              {/* Hampshire boundary */}
              <path
                d={HAMPSHIRE_BOUNDARY}
                fill="#e8f0fe"
                stroke="#1e3a5f"
                strokeWidth="2"
              />

              {/* City markers */}
              {HAMPSHIRE_CITIES.map((city) => {
                const { x, y } = project(city.lat, city.lng);
                const isHovered = hoveredCity === city.name;
                return (
                  <a
                    key={city.name}
                    href={`/hampshire/areas-we-cover#${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulse ring on hover */}
                    {isHovered && (
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    )}
                    {/* Dot */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? "7" : "5"}
                      fill={isHovered ? "#f59e0b" : "#1e3a5f"}
                      className="transition-all duration-200"
                    />
                    {/* Label */}
                    <text
                      x={x}
                      y={y - 12}
                      textAnchor="middle"
                      className="text-xs font-semibold select-none pointer-events-none"
                      fill={isHovered ? "#1e3a5f" : "#374151"}
                    >
                      {city.name}
                    </text>
                  </a>
                );
              })}
            </svg>
          </div>
        </div>

        {/* City quick links */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {HAMPSHIRE_CITIES.map((city) => (
            <a
              key={city.name}
              href={`/hampshire/areas-we-cover#${city.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3 py-1.5 text-sm bg-white border border-border rounded-full text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              {city.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
