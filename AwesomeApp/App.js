/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Dimensions,  StyleSheet, Text, View} from 'react-native';

// Screenlets
import { LoginScreenlet } from './LiferayScreens';
import { UserPortraitScreenlet } from './LiferayScreens';
import { ImageGalleryScreenlet } from './LiferayScreens';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      logged: false
    }
  }
  
  render() {
    if(this.state.logged) {
      return(
        <View style={styles.container}>
            <UserPortraitScreenlet 
              style={styles.portrait}
              userId={this.state.userId}
            />
            <ImageGalleryScreenlet 
              style={styles.gallery}
              folderId={72155}
              repositoryId={20143}
            />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <LoginScreenlet 
          style={styles.login}
          onLoginSuccess={this._onLoginSuccess.bind(this)}
          theme={"custom"}
        />
      </View>
    );
  }

  _onLoginSuccess(userAttributes) {
    this.setState(previousState => {
      return {
        logged: !previousState.logged,
        userId: parseInt(userAttributes.userId)
      }
    });
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  login:{
    height:300,
    width:300
  },
  portrait:{
    height: 150,
    width: 150
  },
  gallery: {
    height: 500,
    width: width
  }
  
  
});