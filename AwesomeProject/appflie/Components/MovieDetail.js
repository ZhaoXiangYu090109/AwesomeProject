
import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableHighlight,

} from 'react-native';
// import  Styles from '../Main/Main'

const  REQUEST_URL ='https://api.douban.com/v2/movie/top250';
class MovieDetail extends React.Component{

    render(){
    return(
        <View>
            <View>
                <Text>MovieDetail</Text>
            </View>

        </View>
    );
    }
}
export {MovieDetail as default};