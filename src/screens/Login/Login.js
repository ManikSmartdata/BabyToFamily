/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from '../../components/InputWithIcon'
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
import {loginUpdate,loginChecking} from './LoginAction';
//import Hr from 'react-native-hr'

var styles = StyleSheet.create({
  container: {
    flex: 0.4,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width.width,
  },
  forgot: {
    alignSelf: "flex-end",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'GothamRounded-Book',
      },
      android: {
        fontSize: 16,
        fontFamily: 'gotham_rounded_book',
      },
    }),
  },
  or: {
    padding: 15,
    backgroundColor: "transparent",
    alignSelf: "center",
    color: '#8F8F8F',
    opacity: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'GothamRounded-Book',
      },
      android: {
        fontSize: 18,
        fontFamily: 'gotham_rounded_book',
      },
    }),
  },
  newuser: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    color: '#969696',
    opacity: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'GothamRounded-Book',
      },
      android: {
        fontSize: 18,
        fontFamily: 'gotham_rounded_book',
      },
    }),
  },
  registeruser: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'GothamRounded-Book',
      },
      android: {
        fontSize: 18,
        fontFamily: 'gotham_rounded_book',
      },
    }),
  },
  forgotContainer: {
    marginRight:20,
  }
});

 class Login extends Component {

  render() {
    console.log("hello",this.props.loading,this.props.auth);
    const {loginUpdate,loginChecking,email,password,loading,auth}=this.props;

    return (
        <View style={{flex:1, flexDirection: 'column', backgroundColor:'white'}}>

         <StatusBar hidden={true} />

         <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} />
         </View>
            <View style={{flex:0.6,width:width/1.55, alignSelf:'center'}}>

            <KeyboardAvoidingView  behavior="padding" style={{flex:1,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center'}}>

          <View style={{flex:0.6,flexDirection:'column', alignItems:'center'}}>

            <View style={{ flex:0.1 }}>
                <InputWithIcon
                  iconName={ require('./Images/Username/user_name.png')}
                  value={email}
                  placeholder="Username"
                  secureTextEntry={false}
                  keyboardType="default"
                  placeholderTextColor="#333333"
                  onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                />
            </View>

              <View style={{flex:0.1, paddingTop: 7}}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={email}
                    placeholder="Password"
                    secureTextEntry={true}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                  />
              </View>

              <View style={{alignSelf: 'flex-end', flex:0.1, paddingRight: 10}}>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </View>

            <View style={{flex:0.1, alignSelf: 'stretch'}}>
              <Button
                buttonStyle={{
                  ...Platform.select({
                    ios: {
                      height: 30,
                    },
                    android: {
                      height: 35,
                       elevation: 3,
                    },
                  }),
                    backgroundColor: '#FF57A5', borderRadius: 5, marginTop: 10,  shadowOpacity: 0.2, shadowOffset:{
                    width: 1,
                    height: 1,
                },}}
                textStyle={{textAlign: 'center', ...Platform.select({
                  ios: {
                    fontFamily: 'GothamRounded-Book',
                  },
                  android: {
                    fontFamily: 'gotham_rounded_book',
                  },
                }),
              }}
                title={`Login`}
              />
            </View>

            <View style={{ flex:0.1, alignSelf: 'center' }}>
              <Text style={styles.or}>or</Text>
            </View>


            <View style={{flex:0.2,marginTop:5, alignSelf:'center', flexDirection: 'row'}}>
                 <View style={{ flex:0.2, alignItems: 'flex-end', marginRight: 1}}>
                 <TouchableHighlight onPress={this._onPressButton}>
                     <Image
                       source={require('./Images/Facebook/facebook.png')}
                     />
                   </TouchableHighlight>
                   </View>
                   <View style={{flex:0.2,alignItems: 'flex-start', marginLeft: 1}}>
                <TouchableHighlight onPress={this._onPressButton}>
                       <Image
                         source={require('./Images/Instagram/instagram.png')}
                       />
               </TouchableHighlight>
               </View>
                 </View>


                 <View style={{flex: 0.3,flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'center'}}>
                      <View style={{flex: 1, justifyContent: 'flex-end'}}>
                      <Text style={styles.newuser}>New User?</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'flex-start', marginLeft: 5}}>
                      <Text style={styles.registeruser}>Register Now</Text>
                      </View>
                    </View>




            </View>
            </KeyboardAvoidingView>

            </View>
       </View>



    );
  }
}
const mapStateToProps=({Login})=>{
  const {email,password,loading,auth}=Login;
  return{
      email,
      password,
      loading,
      auth

}
}
export default connect(mapStateToProps,{loginUpdate,loginChecking})(Login)
