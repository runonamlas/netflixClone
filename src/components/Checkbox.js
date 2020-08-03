import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const CheckBox = (props) => {
    return(
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={props.onPress}
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor: '#737373',
                    borderWidth: 1.5,
                    borderColor: 'gray',
                    marginRight: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    fontSize:16
                }}>

              {props.status && <Image source={require('../img/tick.png')} style={{width:16, height:16,}}/>}

            </TouchableOpacity>
            <Text style={{ color: '#979797', fontSize:15}}>{props.text}</Text>
        </View>
    );
}

export {CheckBox};
