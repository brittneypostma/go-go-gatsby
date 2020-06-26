import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact">
        <fieldset>
          <legend>Contact</legend>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            data-netlify="true"
            name="contact"
            action="/thank-you"
          >
            <input type="hidden" name="bot-field" aria-label="hidden field" />
            <input
              type="hidden"
              name="form-name"
              value="contact"
              aria-label="hidden field"
            />
            <label>
              Name
              <input type="text" name="name" id="name" aria-label="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" aria-label="email" />
            </label>
            <label>
              Subject
              <input
                type="text"
                name="subject"
                id="subject"
                aria-label="subject"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                id="message"
                rows="5"
                aria-label="message"
              />
            </label>
            <div className="btns">
              <input type="reset" value="Clear" aria-label="clear form" />
              <input type="submit" value="Submit" aria-label="submit form" />
            </div>
          </form>
        </fieldset>
      </div>
    </Layout>
  )
}

export default Contact
