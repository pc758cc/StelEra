import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stlera",
  description:
    "Leading manufacturer of industrial valves including gate valves, ball valves, and check valves. ISO certified with 20+ years of experience.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

// import type React from "react";
// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
// import { Analytics } from "@vercel/analytics/next";
// import { Suspense } from "react";
// import Header from "@/components/Header";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Stlera",
//   description:
//     "Leading manufacturer of industrial valves including gate valves, ball valves, and check valves. ISO certified with 20+ years of experience.",
//   generator: "v0.app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         {/* Add header component to layout wrapped in Suspense */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Header />
//         </Suspense>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   );
// }
