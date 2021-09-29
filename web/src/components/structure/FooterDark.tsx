import React, { ReactElement } from 'react';
import EmailSvg from 'resources/inlineSvgs/email.inline.svg';
import PhoneSvg from 'resources/inlineSvgs/phone.inline.svg';

interface FooterContactProps {
  title: string;
  email: string;
  phone: string;
}

const FooterContact: React.FunctionComponent<FooterContactProps> = ({
  title,
  email,
  phone,
}: FooterContactProps): ReactElement => {
  return (
    <div className="max-w-sm pt-24 md:pt-[11.25rem]">
      <h5 id="contact-us" className="section-heading mb-5">
        {title}
      </h5>
      <div className="flex items-center">
        <div className="red-icon w-3 md:w-5">
          <EmailSvg />
        </div>
        <div className="mb-1 ml-[0.875rem] font-bold text-lg md:text-2xl leading-normal-12">
          {email}
        </div>
      </div>
      <div className="flex items-center">
        <div className="red-icon w-3 md:w-[1.125rem] md:mr-[0.125rem]">
          <PhoneSvg />
        </div>
        <div className="mb-1 ml-[0.875rem] font-bold text-lg md:text-2xl leading-normal-12">
          {phone}
        </div>
      </div>
    </div>
  );
};
type FooterCompanyProps = {
  companies: {
    name: string;
    address: string;
    contactNumber: string;
  }[];
};

const FooterCompany: React.FunctionComponent<FooterCompanyProps> = ({
  companies,
}: FooterCompanyProps): ReactElement => {
  return (
    <div className="mt-24 md:mt-[7.5rem] mb-8 md:mb-[6.75rem] flex text-base leading-normal-12">
      {companies.map((company, index) => (
        <div key={`company-${index}`} className="ml-14 first-of-type:ml-0 ">
          <div className="font-bold">{company.name}</div>
          <div className="mt-2 font-lato font-normal text-white text-opacity-56">
            {company.address}
          </div>
          <div className="font-lato  font-normal text-white text-opacity-56">
            {company.contactNumber}
          </div>
        </div>
      ))}
    </div>
  );
};

interface FooterBottomLineProps {
  copyright: string;
}

const FooterBottomLine: React.FunctionComponent<FooterBottomLineProps> = ({
  copyright,
}: FooterBottomLineProps): ReactElement => {
  return (
    <div className="md:w-1/2 border-t border-white border-opacity-10">
      <div className="py-6 text-sm font-lato font-normal leading-snug text-white text-opacity-30">
        {copyright}
      </div>
    </div>
  );
};
const contact = {
  title: 'Contact',
  email: 'career@nstep.com.au',
  phone: '1300 505 220',
};
const companies = [
  {
    name: 'Hochiminh, Vietnam',
    address: 'Address',
    contactNumber: 'Contact Number',
  },
  {
    name: 'Sydney, Australia',
    address: 'Address',
    contactNumber: 'Contact Number',
  },
];
const copyRight = 'Copyright © 2021 Nstep. All Rights Reserved.';
const FooterDark: React.FunctionComponent = (): ReactElement => {
  return (
    <footer className="md:h-[43.75rem] text-white bg-image-footer-black-mobile md:bg-image-footer-black bg-[#0c0f18] bg-right-bottom md:bg-center bg-cover xl:bg-contain bg-no-repeat">
      <div className="container relative px-8 mx-auto">
        <FooterContact {...contact} />
        <FooterCompany companies={companies} />
        <FooterBottomLine copyright={copyRight} />
      </div>
    </footer>
  );
};

export default FooterDark;
