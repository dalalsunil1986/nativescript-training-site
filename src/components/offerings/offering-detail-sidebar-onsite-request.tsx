import * as React from 'react';
import { handleFormSubmit } from '../../util/form-utils';

interface OfferingDetailSidebarOnsiteRequestProps {}

interface OfferingDetailSidebarOnsiteRequestState {
  submitted: boolean;
  [key: string]: any;
}

export class OfferingDetailSidebarOnsiteRequestBox extends React.Component<
  OfferingDetailSidebarOnsiteRequestProps,
  OfferingDetailSidebarOnsiteRequestState
> {
  constructor(props: OfferingDetailSidebarOnsiteRequestProps) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  public handleChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }

  public handleSubmit(event: React.FormEvent<EventTarget>) {
    handleFormSubmit(event, this.state).then(() => {
      this.setState({ submitted: true });
    });
  }

  public render() {
    return (
      <div className="sidebar-widget sidebar-contact blog-details-content">
        <h5>Onsite request form</h5>

        {this.state.submitted && (
          <div>Thank you. We will get back to you shortly.</div>
        )}

        {!this.state.submitted && (
          <div className="comment-form ">
            <form
              name="private-request-sidebar"
              method="post"
              onSubmit={e => this.handleSubmit(e)}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div className="">
                <div className="">
                  <input
                    type="hidden"
                    name="form-name"
                    value="private-request-sidebar"
                  />

                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    onChange={e => this.handleChange(e)}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                    onChange={e => this.handleChange(e)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div data-netlify-recaptcha />
                <input
                  className="invisible"
                  name="bot-field"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <button className="theme-solid-button">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
