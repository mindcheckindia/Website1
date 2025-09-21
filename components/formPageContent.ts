// This constant holds the complete HTML for the Tally form page.
// It is designed with a clean, light theme for maximum readability and a professional user experience.
export const formHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Join the Beta | Mind Path Lab</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;700&display=swap" rel="stylesheet">
    
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              background: '#F8FAFC', // Slate 50
              surface: '#FFFFFF',    // White
              accent: { 
                DEFAULT: '#2DD4BF', // Teal 400
                dark: '#14B8A6',   // Teal 500
              },
              textPrimary: '#0F172A',   // Slate 900
              textSecondary: '#475569', // Slate 600
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Outfit', 'sans-serif'],
            }
          },
        },
      };
    </script>
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background-color: #F8FAFC; /* bg-background */
        color: #0F172A; /* text-textPrimary */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* A subtle pattern for a more premium feel */
        background-image: radial-gradient(#E2E8F0 1px, transparent 1px);
        background-size: 20px 20px;
      }
    </style>
</head>
<body class="bg-background">
    <div class="flex flex-col min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
        <main class="w-full max-w-2xl mx-auto bg-surface rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-200">
            <header class="text-center mb-8">
                <div class="inline-block">
                    <!-- The logo's text fill colors have been updated for the light theme -->
                    <svg width="260" height="42" viewBox="0 0 260 42" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <title>Mind Path Lab Logotype</title>
                        <defs>
                          <linearGradient id="logoFillGradient" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0%" stopColor="#38BDF8" /><stop offset="100%" stopColor="#0284C7" /></linearGradient>
                          <linearGradient id="logoStrokeGradient" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0%" stopColor="#BEF264" /><stop offset="100%" stopColor="#84CC16" /></linearGradient>
                        </defs>
                        <g transform="translate(-12.4, -11.4) scale(1.8)">
                          <path d="M16 24V12C16 12 16 8 20 8C24 8 24 12 24 12" stroke="url(#logoStrokeGradient)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                          <path d="M16 12C16 12 16 8 12 8C8 8 8 12 8 12" stroke="url(#logoStrokeGradient)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                          <path d="M24 24H8C8 24 10 28 16 28C22 28 24 24 24 24Z" fill="url(#logoFillGradient)" />
                        </g>
                        <text x="42" y="18" fontFamily="Outfit, sans-serif" fontSize="18" fontWeight="700" fill="#0F172A">Mind Path Lab</text>
                        <text x="42" y="35" fontFamily="Outfit, sans-serif" fontSize="10.5" fontWeight="400" fill="#475569">Mental wellness, simplified.</text>
                      </svg>
                </div>
                <h1 class="text-4xl md:text-5xl font-extrabold text-textPrimary mt-6 tracking-tight">Join the Private Beta</h1>
                <p class="mt-2 text-lg text-textSecondary">You're one step away from your personalized wellness blueprint.</p>
            </header>
            
            <div class="rounded-lg overflow-hidden">
                <!-- 
                  The Tally form's embed URL is updated with new colors for the light theme.
                  textColor is now dark, and buttonColor is a high-contrast teal.
                -->
                <iframe
                  data-tally-src="https://tally.so/embed/mRpDBl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&textColor=0F172A&buttonColor=14B8A6"
                  loading="lazy"
                  width="100%"
                  height="280"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  title="Mind Path Lab Registration Form"
                ></iframe>
            </div>
        </main>
        
        <footer class="mt-12 text-center text-sm text-textSecondary/80">
            <p>&copy; ${new Date().getFullYear()} Mind Path Lab. All rights reserved.</p>
        </footer>
    </div>

    <script>
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    </script>
</body>
</html>
`