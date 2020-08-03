import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/*Header Logo */}
          <View style={[styles.subContainer, {flex: 1.5, backgroundColor:'pink'}]}>
            <Image source={require('./src/img/Logo.png')} style={styles.logo}/>
          </View>
          {/*Login-Form*/}
          <View style={[styles.subContainer, {flex: 1}]}>

          </View>
          {/*Login with Facebook*/}
          <View style={[styles.subContainer, {flex: 1.5, flexDirection: 'row'}]}>
            <Image source={require('./src/img/IconFacebook.png')} style={styles.facebookIcon} />
            <Text style={styles.facebookText}>Login with Facebook</Text>
          </View>
          {/*Footer*/}
          <View style={[styles.subContainer, {flex: 0.5, flexDirection: 'row'}]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height:100,
    width:200,
  },
  facebookIcon:{
    height:30,
    width:30
  },
  facebookText: {
    fontSize: 18,
    marginLeft: 20
  },
  footerText:{

  },
  footerLink:{

  },
});

export default App;
