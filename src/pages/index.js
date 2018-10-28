import React, { Component } from 'react'

import Layout from '../components/layout'

export default class IndexPage extends Component {
  state = {}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Layout>
        <h1>Clear</h1>
        <form
          name="signup"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="signup" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Email
              <br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button disabled={!this.state.email} type="submit">
              Sign Up
            </button>
          </p>
        </form>
      </Layout>
    )
  }
}
