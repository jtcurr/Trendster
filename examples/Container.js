import React, {PropTypes as T} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import GitHubForkRibbon from 'react-github-fork-ribbon'

let GoogleApiWrapper = require('../src/index').GoogleApiWrapper


import styles from './styles.module.css'

export const Container = React.createClass({

  propTypes: {
    children: T.element.isRequired
  },

  contextTypes: {
    router: T.object
  },

  renderChildren: function() {
    const {children} = this.props;
    if (!children) return;

    const sharedProps = {
      google: this.props.google,
      loaded: this.props.loaded
    }
    return React.Children.map(children, c => {
      return React.cloneElement(c, sharedProps, {

      });
    })
  },

  render: function() {
    const {routeMap, routeDef} = this.props;
    const {router} = this.context;

    const c = this.renderChildren();
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <ul>
              {Object.keys(routeMap).map(key => {
                return (
                  <Link to={key}
                        activeClassName={styles.active}
                        key={key}>
                    <li>{routeMap[key].name}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className={styles.content}>
            {c}
          </div>
        </div>
      </div>
    )
  }
})

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAhciEsWzSnzUfMBUMBkdkb6sjjl6Chp1k',
  libraries: ['places','visualization']
})(Container)
