import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>GENERIC.JS Hier steht eine Überschrift</h2>
            <p>Test 1.</p>
            <p>Test 2.</p>
            <h2>Test 3</h2>
            <p>Und adas auch ncoh</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
