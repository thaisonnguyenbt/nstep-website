import React, { ReactElement } from 'react';
import EmailSvg from 'resources/inlineSvgs/email.inline.svg';
import PhoneSvg from 'resources/inlineSvgs/phone.inline.svg';

interface FooterTalkWithProps {
  question: string;
  description: string;
}

const FooterTalkWith: React.FunctionComponent<FooterTalkWithProps> = ({
  question,
  description,
}: FooterTalkWithProps): ReactElement => {
  return (
    <div className="max-w-[35rem] md:mt-12">
      <h1 className="max-w-[28.75rem] text-xl md:text-[3rem] leading-[1.1] font-semibold">
        {question}
      </h1>
      <div className="mt-4 md:mt-9 font-lato text-base md:text-2xl leading-normal">
        {description}
      </div>
    </div>
  );
};

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
    <>
      <h5 id="contactus" className="text-sm uppercase font-semibold leading-normal-12 tracking-[0.25rem]">
        {title}
      </h5>
      <div className="mt-5 flex items-center">
        <div className="white-icon w-3 md:w-5">
          <EmailSvg />
        </div>
        <div className="mb-1 ml-[0.875rem] font-bold text-lg md:text-2xl leading-normal-12">
          {email}
        </div>
      </div>
      <div className="mt-1 flex items-center">
        <div className="white-icon w-3 md:w-[1.125rem] md:mr-[0.125rem]">
          <PhoneSvg />
        </div>
        <div className="mb-1 ml-[0.875rem] font-bold text-lg md:text-2xl leading-normal-12">
          {phone}
        </div>
      </div>
    </>
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
    <div className="mt-8 md:mt-16 flex text-base leading-normal-12">
      {companies.map((company, index) => (
        <div key={`company-${index}`} className="ml-14 first-of-type:ml-0 ">
          <div className="font-bold">{company.name}</div>
          <div className="mt-2 font-lato font-normal text-white text-opacity-72">
            {company.address}
          </div>
          <div className="font-lato font-normal text-white text-opacity-72">
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
    <div className="w-full border-t border-white border-opacity-[0.16]">
      <div className="py-6 text-sm font-lato font-normal leading-snug text-white text-opacity-72">
        {copyright}
      </div>
    </div>
  );
};
const talkWith: FooterTalkWithProps = {
  question: 'Have a project? Let’s talk.',
  description:
    'Talk with Leslie or Cameron and see how we can help your business grow.',
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
const FooterLight: React.FunctionComponent = (): ReactElement => {
  return (
    <footer className="md:h-[45rem] text-white bg-red-primary">
      <div className="container relative px-8 mx-auto">
        <div className="pt-6 md:pt-[10.25rem] flex flex-col md:flex-row justify-between">
          <FooterTalkWith {...talkWith} />
          <div className="mt-6 md:mt-0 mb-6 md:mb-32 p-8 md:p-12 bg-gray-primary">
            <FooterContact {...contact} />
            <FooterCompany companies={companies} />
          </div>
        </div>
        <FooterBottomLine copyright={copyRight} />
      </div>
    </footer>
  );
};

export default FooterLight;
