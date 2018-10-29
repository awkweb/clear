import React, { Component } from 'react'

import Layout from '../components/layout'
import Card from '../components/card'
import SignUp from '../components/signup'

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Card />
        <div id="content">
          <h1>Clear is a credit card designed for you.</h1>
          <ul>
            <li>
              <strong>$15k limit.</strong> Just show us your offer letter.
            </li>
            <li>
              <strong>AI-powered rewards.</strong> Zero fees.
            </li>
            <li>
              <strong>Contactless.</strong> Tap to pay – that's it.
            </li>
          </ul>
          <SignUp />
        </div>
      </Layout>
    )
  }
}
