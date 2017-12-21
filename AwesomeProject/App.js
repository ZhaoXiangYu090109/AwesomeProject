/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TabBarIOS,
} from 'react-native';
import MoviewTalk from './appflie/Components/MoviewTalk';
import USBox from './appflie/Components/USBox';
import Featured from './appflie/Components/Featured';


const  REQUEST_URL ='https://api.douban.com/v2/movie/top250';
 export default class AwesomeProject extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'featured'
        };

    }



    render(){

    	
        return(
            <TabBarIOS>
                <TabBarIOS.Item systemIcon={'featured'}
                                selected={this.state.selectedTab==='featured'}
                                onPress={()=>{
                                    this.setState({
                                        selectedTab:'featured'
                                    });


                                }}>

                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item systemIcon={'most-viewed'}
                                selected={this.state.selectedTab==='us_box'}
                                onPress={()=>{
                                    this.setState({
                                        selectedTab:'us_box'
                                    });
                                    // this.state.selectedTab = 'us_box'
                                }}>
                    <USBox/>
                </TabBarIOS.Item>

            </TabBarIOS>


        );
    }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);










