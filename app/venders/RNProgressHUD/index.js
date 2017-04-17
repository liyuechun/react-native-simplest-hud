'use strict';


import React, { Component,PropTypes } from 'react';
import {  
    Image,
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';

import tweenState from 'react-tween-state';
import styles from './styles';
import images from './images';

var SPIN_DURATION = 1000;

const RNProgressHUDMixin = base => class extends base {
    constructor(props){
      super(props);
      this.state = {
        is_hud_visible: false
      };
    }

    showHUD = () => {
      this.setState({
        is_hud_visible: true
      });
    }

    hideHUD = () => {
      this.setState({
        is_hud_visible: false
      });
    }

    static childContextTypes = {
      showHUD: PropTypes.func.isRequired,
      hideHUD: PropTypes.func.isRequired
    }

    getChildContext() {
      return {
        showHUD: this.showHUD,
        hideHUD: this.hideHUD
      };
    }
}


var RNProgressHUD = React.createClass({
  mixins: [tweenState.Mixin],

  contextTypes: {
    showHUD: React.PropTypes.func.isRequired,
    hideHUD: React.PropTypes.func
  },

  statics: {
    Mixin: RNProgressHUDMixin
  },

  propTypes: {
    isVisible: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string,
    overlayColor: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      color: '#000',
      overlayColor: 'rgba(0, 0, 0, 0)',
      isVisible: false
    };
  },

  getInitialState() {
    return {
      rotate_deg: 0
    };
  },

  componentDidMount() {
    this._rotateSpinner();

    this.interval = setInterval(() => {
      this._rotateSpinner();
    }, SPIN_DURATION);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  _rotateSpinner() {
    this.tweenState('rotate_deg', {
      easing: tweenState.easingTypes.linear,
      duration: SPIN_DURATION,
      endValue: this.state.rotate_deg === 0 ? 360 : this.state.rotate_deg + 360
    });
  },


  render() {
    if (!this.props.isVisible) {
      return <View />;
    }

    
    let deg = Math.floor(
      this.getTweeningValue('rotate_deg')
    ).toString() + 'deg';

    return (
      <TouchableHighlight
        key="MBProgressHUD"
        style={styles.overlay}
        underlayColor="rgba(0, 0, 0, 0.11)"
        activeOpacity={1}
      >
        <View
          style={[styles.container, {
            left: this.getTweeningValue('left')
          }]}
        >
          <Image
            style={[styles.spinner, {
              backgroundColor: this.props.color,
              transform: [
                {rotate: deg}
              ]
            }]}
            source={{
              uri: 'data:image/png;base64,' + images['1x'],
              isStatic: true
            }}
          >
            <View style={styles.inner_spinner}>
            </View>
          </Image>
        </View>
      </TouchableHighlight>
    );
  }
});


module.exports = RNProgressHUD;
