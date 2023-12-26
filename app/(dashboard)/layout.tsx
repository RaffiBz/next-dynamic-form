import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import Script from "next/script";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '780533077473014');
fbq('track', 'PageView');
      
          `,
        }}
      />
      <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
        <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
          <Logo />
          <div className="flex gap-4 items-center">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </nav>
        <main className="flex w-full flex-grow">{children}</main>
      </div>
    </>
  );
}

export default Layout;
