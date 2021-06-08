import React, { useEffect } from 'react';

import { Fragment } from 'react';
import PageTopImage from '../../../ui/PageTopImage/PageTopImage';
import PageContainer from '../PageContainer/PageContainer';
import bgImage from '../../../../assets/images/backgroundImage1.jpg';
import classes from './PrivacyPolicy.module.scss';

import SideMenu from '../../SideMenu/SideMenu';
import ListLink from '../../../ui/ListLink/ListLink';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - CarWorld';
  }, []);

  return (
    <Fragment>
      <PageTopImage image={bgImage} title='Car World Privacy Policy' />
      <PageContainer>
        <div className={classes.PrivacyPolicy}>
          <SideMenu />
          <div className={classes.PrivacyContent}>
            <h2>CarWorld.com Privacy Policy</h2>
            <p>
              CarWorld, Inc. (“we, us, our”) is providing this “Privacy Policy”
              because we believe in being transparent with respect to the
              information that we collect and use. This Privacy Policy governs
              our collection, use, sale and disclosure of information that is
              reasonably capable of being linked to an individual user (“you”),
              such as name, address, telephone number, and/or email address
              (“personal information”) collected through the CarWorld.com
              website, mobile and other applications owned and operated by us
              (“site”). Please read this Privacy Policy carefully before
              providing us with any personal information. By using the site, you
              consent to the collection, use, sale and disclosure of your
              personal information in the manner described below. This Privacy
              Policy is in accordance with applicable law in place for United
              States of America. Please consult our site for privacy policies
              that may apply to your region.
            </p>
            <h5>
              This site is not intended for use by individuals under the age of
              18.
            </h5>
            <h5>Last Updated: Effective as of April 10, 2021</h5>
            <div className={classes.Contents}>
              <h4>Contents</h4>
              <ol>
                <ListLink link='/' text='Types of Information We Collect' />
                <ListLink link='/' text='How we Collect'>
                  <ol>
                    <ListLink
                      link='/'
                      text='Personal Information You Share With Us'
                    />
                    <ListLink
                      link='/'
                      text='Additional Information Collected When Using Our Site to Buy or Sell A Vehicle'
                    />
                    <ListLink
                      link='/'
                      text='Information Collected When Registering with CarWorld; Subscribing'
                    />
                    <ListLink
                      link='/'
                      text='Automatic Collection of Information'
                    />
                    <ListLink
                      link='/'
                      text='Cookies and other Tracking Technologies'
                    />
                    <ListLink
                      link='/'
                      text='Application And Widgets For Social Media'
                    />
                    <ListLink
                      link='/'
                      text='Information collected from other sources'
                    />
                  </ol>
                </ListLink>
                <ListLink link='/' text='Interest Based Advertising' />
                <ListLink
                  link='/'
                  text='How we Use your Personal Information'
                />
                <ListLink
                  link='/'
                  text='How and With Whom We Share your Personal Information'
                />
                <ListLink link='/' text='Publicly Posted Information' />
                <ListLink link='/' text='Your Choices' />
                <ListLink
                  link='/'
                  text='Storing And Retaining Your Personal Information'
                />
                <ListLink
                  link='/'
                  text='How We Keep Your Personal Information Secure'
                />
                <ListLink link='/' text='For Nicosia Residents' />
                <ListLink
                  link='/'
                  text='Additional Disclosures for Famagusta Residents'
                />
                <ListLink link='/' text='International Transfer' />
                <ListLink link='/' text='Children' />
                <ListLink link='/' text='Changes to our Privacy Policy' />
              </ol>
            </div>
          </div>
        </div>
      </PageContainer>
    </Fragment>
  );
};

export default PrivacyPolicy;
