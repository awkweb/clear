import React from 'react'

const SignUp = () => {
  return (
    <form
      name="signup"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="signup" />
      <label hidden>
        Don't fill this out if you're human:
        <input type="hidden" name="bot-field" />
      </label>

      <div id="join-waitlist">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit">Join waitlist</button>
      </div>
    </form>
  )
}

export default SignUp
