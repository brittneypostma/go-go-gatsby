import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles/contact.css"

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
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <div className="btns">
              <input type="reset" value="Clear" />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </fieldset>
      </div>
    </Layout>
  )
}

export default Contact
