import React from 'react';
import Container from './Container';
import Logo from './Logo';
import { footerData, companyData } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-[#F2EBDE] py-8 rounded-t-3xl">
      <Container>
        <div className='flex flex-wrap justify-between items-center'>
          {/* Column 1: Logo */}
          <div className='w-full md:w-auto mb-4 md:mb-0'>
            <Logo />
          </div>

          {/* Column 2: App */}
          <div className='w-full md:w-auto mb-4 md:mb-0'>
            <h3 className="text-[#232E26] text-lg font-semibold mb-2">App</h3>
            <ul className="text-[#232E26]">
              {footerData.map(({ _id, title, href }) => (
                <li key={_id} className="mb-1">
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className='w-full md:w-auto'>
            <h3 className="text-[#232E26] text-lg font-semibold mb-2">Company</h3>
            <ul className="text-[#232E26]">
              {companyData.map(({ _id, title, href }) => (
                <li key={_id} className="mb-1">
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
