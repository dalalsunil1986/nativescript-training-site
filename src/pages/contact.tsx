import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ContactComponent } from '../components/contact/contact.component';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';
import { MainLayout } from '../layouts/MainLayout';
import { InstantBooking } from '../components/global/InstantBooking/InstantBooking';

interface ContactPageProps {}

export default class extends React.Component<ContactPageProps, any> {
  constructor(props: ContactPageProps) {
    super(props);
  }

  public render() {
    const pageTitle = `Contact Us | NativeScript Training`;

    return (
      <MainLayout>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <InnerBanner
          title="Contact Us"
          subtitle="Get in Touch. We'll get back to you within 24 hours."
          bannerImg="/images/contact/banner.jpg"
        />

        <ContactComponent />
      </MainLayout>
    );
  }
}
