import React from 'react';
import { BusinessReview } from './BusinessReview/BusinessReview';
import FooterLinkSection from './FooterLinkSection/FooterLinkSection';
import classes from './FooterNavigation.module.css';

const linkSections = [
  {
    sectionId: 'link-section-0001',
    sectionHeader: 'Company',
    links: [
      {
        id: 'company-link-00001',
        text: 'About CarWorld',
        url: '/aboutCarworld',
      },
      {
        id: 'company-link-00002',
        text: 'Our Team',
        url: '/ourTeam',
      },
      {
        id: 'company-link-00003',
        text: 'Press',
        url: '/press',
      },
      {
        id: 'company-link-00004',
        text: 'Investor Relations',
        url: '/investor-relations',
      },
      {
        id: 'company-link-00005',
        text: 'Price Trends',
        url: '/price-trends',
      },
      {
        id: 'company-link-00006',
        text: 'Mobile',
        url: '/mobile',
      },
      {
        id: 'company-link-00007',
        text: 'Blog',
        url: '/blog',
      },
      {
        id: 'company-link-00008',
        text: 'Careers',
        url: '/careers',
      },
    ],
  },
  {
    sectionId: 'link-section-0002',
    sectionHeader: 'For Dealers',
    links: [
      {
        id: 'fordealers-link-00001',
        text: 'Dealer Signup',
        url: '/dealersignup',
      },
      {
        id: 'fordealers-link-00002',
        text: 'Dealer Resources',
        url: '/dealer-resources',
      },
    ],
  },
  {
    sectionId: 'link-section-0003',
    sectionHeader: 'Terms',
    links: [
      {
        id: 'terms-link-00001',
        text: 'Do Not Sell My Personal Information',
        url: '/terms/personalinformation',
      },
      {
        id: 'terms-link-00002',
        text: 'Terms of Use',
        url: '/terms/termsofuse',
      },
      {
        id: 'terms-link-00003',
        text: 'Privacy',
        url: '/terms/privacy',
      },
      {
        id: 'terms-link-00004',
        text: 'Interest-Based Ads',
        url: '/terms/interest-based-ads',
      },
      {
        id: 'terms-link-00005',
        text: 'Security',
        url: '/terms/security',
      },
    ],
  },
  {
    sectionId: 'link-section-0004',
    sectionHeader: 'Help',
    links: [
      {
        id: 'help-link-00001',
        text: 'Help',
        url: '/help',
      },
      {
        id: 'help-link-00002',
        text: 'Contact Us',
        url: '/contactus',
      },
      {
        id: 'help-link-00003',
        text: 'Buying a Car During Coronavirus',
        url: '/covid-19',
      },
      {
        id: 'help-link-00004',
        text: 'Delivery',
        url: '/delivery',
      },
    ],
  },
];

const FooterNavigation = () => {
  const year = new Date().getFullYear();

  return (
    <div className={classes.FooterNav}>
      <div className={classes.FooterLinks}>
        {linkSections.map((section) => (
          <FooterLinkSection
            header={section.sectionHeader}
            links={section.links}
            key={section.sectionId}
          />
        ))}
      </div>
      <BusinessReview />
      <span>© {year} CarWorld, Inc., All Rights Reserved.</span>
    </div>
  );
};

export default FooterNavigation;
