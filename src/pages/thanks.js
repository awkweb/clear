import React, { Component } from 'react'

import Layout from '../components/layout'
import Image from '../components/image'

export default class ThanksPage extends Component {
  render() {
    return (
      <Layout>
        <h1>Thanks!</h1>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
      </Layout>
    )
  }
}
