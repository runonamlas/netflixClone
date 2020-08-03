import React, {useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Input, Button, CheckBox}  from './src/components';
const { width, height } = Dimensions.get('window')


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setShowPassword] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex:1, backgroundColor:'#000000'}}>
          {/*Header Logo */}
          <View style={[styles.logoContainer, {flex: 1.5}]}>
            <Image source={require('./src/img/Logo.png')} style={styles.logo}/>
          </View>
          {/*Login-Form*/}
          <View style={[styles.subContainer, {flex: 4}]}>
            <Text style={{ fontSize: 32, color:'#ffffff', fontWeight:'bold', marginBottom:25}}>Sign In</Text>
            <Input
              placeholder={'Email or phone number'}
              value={username}
              onChangeText={username => setUsername(username)}
            />
            <Input
              placeholder={'Password'}
              secureTextEntry={isShowPassword}
              keyboardType={'numeric'}
              value={password}
              onChangeText={password => setPassword(password)}
            />
            <Button
              text={'Sign In'}
              onPress={() => {
                console.log('Username: ', username, ', Password: ', password);
              }}
            />

            <View style={{
              flexDirection: 'row',
              width: width * 0.9,
              marginBottom: 40,
              marginTop: 15,
              justifyContent: 'space-between'
            }}>
              <CheckBox
                text='Remember me'
                status={isShowPassword}
                onPress={() => setShowPassword(!isShowPassword)}
              />
              <TouchableOpacity>
                <Text style={{ fontSize: 16, marginLeft: 15, color:'#979797'}}>Need help?</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*Login with Facebook*/}
          <View style={[styles.facebookContainer, {flex: 1.2}]}>
            <Image source={require('./src/img/IconFacebook.png')} style={styles.facebookIcon} />
            <Text style={styles.facebookText}>Login with Facebook</Text>
          </View>
          {/*Footer*/}
          <View style={[styles.footerContainer, {flex: 1}]}>
            <Text style={styles.footerText}>New to Netflix? </Text>
            <Text style={styles.footerLink}>Sign up now. </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    justifyContent: 'center',
    paddingLeft:20
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems:'flex-start',
    paddingLeft:9

  },
  logo:{
    justifyContent: 'space-between',
    height:50,
    width:150,
  },
  facebookIcon:{
    height:20,
    width:20
  },
  facebookText: {
    fontSize: 14,
    marginLeft: 14,
    color:'#737373'
  },
  facebookContainer: {
    flexDirection: 'row',
    paddingBottom:12,
    alignItems:'flex-end',
    justifyContent:'flex-start',
    paddingLeft:20,
  },
  footerContainer: {
    paddingTop:20,
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingLeft:20,
  },
  footerText:{
    color:'#737373',
    fontSize:18,
  },
  footerLink:{
    color:'#ffffff',
    fontSize:18,
  },
});

export default App;
