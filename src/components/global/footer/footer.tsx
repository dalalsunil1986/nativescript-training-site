import * as React from 'react';
import Link from 'gatsby-link';
import { ProgressLogo } from '../svg-logos/progress';
import { NativeScriptingLogo } from '../svg-logos/nativescripting';
import { NStudioLogo } from '../svg-logos/nstudio';
import { NuviousLogo } from '../svg-logos/nuvious';
import { getNSTrainingLogo } from '../svg-logos/ns-training1';
import { PHYSICAL_ADDRESS_ONE_LINE } from '../../../constants/constants';

interface FooterProps {
  siteName: string;
}

export const Footer: React.StatelessComponent<FooterProps> = (
  props: FooterProps
) => {
  return (
    <footer className="theme-footer">
      <div className="container">
        <div className="top-footer row">
          <div className="col-sm-3 col-xs-12 footer-list">
            <h6>Our Partners</h6>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-6">
                <ul>
                  <li>
                    <a href="https://www.progress.com/" target="_blank">
                      {ProgressLogo}
                    </a>
                  </li>
                  <li>
                    <a href="https://nstudio.io/" target="_blank">
                      {NStudioLogo}
                    </a>
                  </li>
                  <li>
                    <a href="https://nativescripting.com" target="_blank">
                      {NativeScriptingLogo}
                    </a>
                  </li>
                  <li>
                    <a href="http://www.nuvious.com/" target="_blank">
                      {NuviousLogo}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-6" />
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 footer-logo-widget">
            <div className="wrapper">
              <div className="logo">
                <Link to="/">{getNSTrainingLogo('#6664D4', '#6664D4')}</Link>
              </div>
              <p>
                NativeScript Training provides expert NativeScript training,
                code reviews, and mentoring to both individuals and businesses.
                Our partners provide best in class professional services,
                consulting, implementation, and team augmentation in mobile and
                cloud.
              </p>
              <ul>
                <li>
                  <i className="flaticon-stopwatch" /> Monday - Saturday 7am-5pm
                  EST
                </li>
                <li>
                  <i className="flaticon-map-line" />{' '}
                  {PHYSICAL_ADDRESS_ONE_LINE}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-xs-12 footer-news">
            <h6>Latest Partner Articles</h6>
            <ul>
              <li>
                <a
                  href="https://nativescripting.com/posts/how-to-add-shadows-in-ios"
                  target="_blank"
                >
                  How to Add Shadows in iOS
                </a>
                <div className="date">September 22, 2019</div>
              </li>

              <li>
                <a
                  href="https://nativescripting.com/posts/google-login-with-oauth2-in-nativescript"
                  target="_blank"
                >
                  Google Login with OAuth2 in NativeScript
                </a>
                <div className="date">September 14, 2019</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <p>Copyright &copy; {new Date().getFullYear()} Nuvious</p>
          <p>
            <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
