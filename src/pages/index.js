import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Homework2v1 from "../components/homework2v1"
import Homework2v2 from "../components/homework2v2"
import Homework3 from "../components/homework3"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homework Blockfint</h1>

    <Homework2v1/>
    <Homework2v2/>
    <Homework3/>

  </Layout>
)

export default IndexPage 
