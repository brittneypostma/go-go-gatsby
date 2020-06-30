import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const labels = `block uppercase tracking-wide text-white text-xs font-bold mb-2`
const inputs = `appearance-none block w-full bg-white text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <h1>Contact Me</h1>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          data-netlify="true"
          name="contact"
          action="/thank-you"
          className="w-100 center"
        >
          <input
            className={inputs}
            type="hidden"
            name="bot-field"
            aria-label="hidden field"
          />
          <input
            className={inputs}
            type="hidden"
            name="form-name"
            value="contact"
            aria-label="hidden field"
          />
          <label className={labels}>
            Name
            <input
              className={inputs}
              type="text"
              name="name"
              id="name"
              aria-label="name"
              required
            />
          </label>
          <label className={labels}>
            Email
            <input
              className={inputs}
              type="email"
              name="email"
              id="email"
              aria-label="email"
              required
            />
          </label>
          <label className={labels}>
            Subject
            <input
              className={inputs}
              type="text"
              name="subject"
              id="subject"
              aria-label="subject"
            />
          </label>
          <label className={labels}>
            Message
            <textarea
              className={inputs}
              name="message"
              id="message"
              rows="5"
              aria-label="message"
              required
            />
          </label>
          <div className="flex justify-between">
            <input
              className="btn bg-black text-white hover:bg-red hover:text-white active:bg-dark-red"
              type="reset"
              value="Clear"
              aria-label="clear form"
            />

            <input
              className="btn bg-teal text-white hover:bg-light-teal hover:text-white active:bg-dark-teal"
              type="submit"
              value="Submit"
              aria-label="submit form"
            />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
