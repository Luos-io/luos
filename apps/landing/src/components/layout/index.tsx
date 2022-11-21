import Image from 'next/image';
import { Header, NavbarItemTypes } from '@packages/ui';

import { Link, NextLinkComposed } from 'components/link';

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
        Link={({ href, target, className, children, ...other }) => (
          <NextLinkComposed to={href} target={target} className={className} {...other}>
            {children}
          </NextLinkComposed>
        )}
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
            ],
          },
        ]}
        enableLightingButton
      />
      {children}
    </div>
  );
};
export default Layout;
