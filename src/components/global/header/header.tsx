import * as React from 'react';
import Link from 'gatsby-link';
import { Offering, Course } from '../../../domain/models';
import { MainNav } from '../menu/main-nav';
import { getNSTrainingLogo } from '../svg-logos/ns-training1';
import { CONST_PHONE_NUMBER } from '../../../constants/constants';

interface HeaderProps {
  siteName: string;
  offerings: Offering[];
  courses: Course[];
}

export const Header: React.StatelessComponent<HeaderProps> = (
  props: HeaderProps
) => {
  return (
    <header className="header-wrapper">
      <div className="top-header bg-one">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-xs-12 left-list">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true" /> +{
                      CONST_PHONE_NUMBER
                    }
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-7 col-xs-12 right-list text-right">
              <ul>
                <li>
                  <Link to="/contact">Get Support</Link>
                </li>

                <li>
                  <Link to="/courses">Our Courses</Link>
                </li>

                <li>
                  <ul className="social-icon">
                    <li>
                      <a
                        href="https://www.facebook.com/nativescripting/"
                        className="tran3s"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/nuvious1"
                        className="tran3s"
                        target="_blank"
                      >
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/nuvious"
                        className="tran3s"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-menu-wrapper">
        <div className="container">
          <div className="main-content-wrapper clearfix">
            <div className="logo float-left">
              <Link to="/">{getNSTrainingLogo('#6664D4', '#3C3C3C')}</Link>
            </div>

            <MainNav offerings={props.offerings} courses={props.courses} />
          </div>
        </div>
      </div>
    </header>
  );
};
