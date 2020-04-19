import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
);

const containerStyle = {
    backgroundColor: `#282c34`,
    width: `100%`,
    height: `100%`,
    padding: `2em`,
    margin: `1em`,
};

const contentStyle = {
    color: `#ffffff`,
    fontFamily: `monospace`,
};

const Output = props => (
    <div style={containerStyle}>
        <div style={contentStyle}>
            {props.children}
        </div>
    </div>
);

export default () => (
    <Layout>
      <h1>Hello, world! I'm <span style={{ color: `#3498db` }}>Alex</span>.</h1>
      <h2> > cat about.txt</h2>
      <Output>Building Data Products to make Alexa smarter @ Amazon</Output>
      <h2>> select fact, desc from alex_ddl.info;</h2>
      <Output>
        <table>
            <tr style={{ borderBottom: `2px solid #ABB2BF` }}>
                <th>fact</th>
                <th>desc</th>
            </tr>
            <tr style={{ borderBottom: `2px dashed #ABB2BF` }}>
                <td>Location</td>
                <td>🌲 Seattle, WA</td>
            </tr>
            <tr style={{ borderBottom: `2px dashed #ABB2BF` }}>
                <td>Hobbies</td>
                <td>🇧🇷 BJJ</td>
            </tr>
        </table>
      </Output>
      <h2>> ./site-links</h2>
      <ul style={{ listStyle: `none`, float: `left` }}>
        <ListLink to="/blog/">Blog</ListLink>
      </ul>
    </Layout>
  )
