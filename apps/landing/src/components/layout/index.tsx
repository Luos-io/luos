import Image from 'next/image';
import { Header, NavbarItemTypes, Footer } from '@packages/ui';
import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header
        logo={
          <Image
            src="/assets/images/logo.webp"
            alt="Luos logo"
            width={200}
            height={37}
            style={{ objectFit: 'contain' }}
          />
        }
        navbar={[
          {
            type: NavbarItemTypes.LINK,
            name: 'Technology',
            href: '/documentation/luos-technology',
          },
          {
            name: 'Resources',
            type: NavbarItemTypes.DROPDOWN,
            items: [
              {
                name: 'Get started',
                type: NavbarItemTypes.LINK,
                href: '/documentation/tutorials/get-started',
              },
              {
                name: 'Tutorials',
                type: NavbarItemTypes.LINK,
                href: '/documentation/tutorials',
              },
              {
                name: 'Documentation',
                type: NavbarItemTypes.LINK,
                href: '/documentation/luos-technology',
              },
              {
                name: 'Troubleshooting',
                type: NavbarItemTypes.LINK,
                href: '/documentation/faq',
              },
              {
                name: 'Blog',
                type: NavbarItemTypes.LINK,
                href: '/documentation/blog',
              },
              {
                name: 'Roadmap',
                type: NavbarItemTypes.LINK,
                href: './roadmap',
              },
            ],
          },
          {
            name: 'Community',
            type: NavbarItemTypes.DROPDOWN,
            items: [
              {
                name: 'Discord',
                type: NavbarItemTypes.LINK,
                href: 'https://discord.gg/luos',
              },
              {
                name: 'Reddit',
                type: NavbarItemTypes.LINK,
                href: 'https://www.reddit.com/r/Luos/',
              },
              {
                name: 'GitHub',
                type: NavbarItemTypes.LINK,
                href: 'https://github.com/luos-io',
              },
            ],
          },
        ]}
        enableLightingButton
      />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
