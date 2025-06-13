// 'use client';

// // import { Geist, Geist_Mono } from "next/font/google";
// import { usePathname } from "next/navigation";
// import "./globals.css";
// import Header from "../app/components/Header";
// import Footer from "../app/components/Footer";
// import FloatingWhatsApp from "../app/components/FloatingWhatsApp";
// import { CartProvider } from '../context/CartContext';

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const isAdmin = pathname?.startsWith("/admin");

//   if (isAdmin) {
//     return (
//       <html lang="fr">
//         <body className={`${geistSans.variable} ${geistMono.variable}`}>
//           {children}
//         </body>
//       </html>
//     );
//   }

//   return (
//     <html lang="fr">
//      <head>
//   <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
//   <link rel="preconnect" href="https://fonts.googleapis.com" />
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//   <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
// </head>
//       {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
//       <body className="antialiased">
//         {/* Le CartProvider doit envelopper tout le contenu de l'application */}
//         <CartProvider>
//           <Header />
//           <main className="min-h-screen">{children}</main>
//           <Footer />
//           <FloatingWhatsApp />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }
'use client';

import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import FloatingWhatsApp from "../app/components/FloatingWhatsApp";
import { CartProvider } from '../context/CartContext';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return (
      <html lang="fr">
        <body className="antialiased">
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
