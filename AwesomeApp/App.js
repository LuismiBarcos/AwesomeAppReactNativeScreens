/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform ,StyleSheet ,Dimensions, View} from 'react-native';

//Screenlets
import { LoginScreenlet } from './LiferayScreens'
import { UserPortraitScreenlet } from './LiferayScreens'
import { ImageGalleryScreenlet } from './LiferayScreens'


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          logged: false
        };
        this._onLoginSuccess = this._onLoginSuccess.bind(this);    
    }
    
    render() {
        if(this.state.logged) {
            return (
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
        } else {
            return (
            <View style={styles.container}>
                <LoginScreenlet 
                style={styles.login}
                onLoginSuccess={this._onLoginSuccess} />
            </View>
            );
        }
    }

    //Login success
    _onLoginSuccess(userId) {
        this.setState({
            logged: true,
            userId: parseInt(userId.userId)
        });
    }
}
// const {height, width} = Dimensions.get('window')
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  portrait: {
    height: 150,
    width: 150
  },
  gallery: {
    height: height,
    width: Platform.OS === 'ios' ? width : 450
  },
  login:{
    height:300,
    width:300
  }
});