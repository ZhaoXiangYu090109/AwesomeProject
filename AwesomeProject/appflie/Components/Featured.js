
import React, { Component } from 'react';
import {
    StyleSheet,
NavigatorIOS,
    Text,
    View,


} from 'react-native';
import MoviewTalk from './MoviewTalk'

class  Featured extends React.Component{

    render(){

        return(

           <NavigatorIOS

               style={styles.container }
               initialRoute={{
                   title:'推荐电影',
                   component:MoviewTalk
               }}
               shadowHidden="true"//去除导航栏下的阴影
               barTintColor='darkslateblue'//导航栏背影的颜色
               titleTextColor='rgba(255,255,255,0.8)'//导航栏标题的颜色
               tintColor='rgba(255,255,255,0.8)'//导航栏上按钮的颜色
               translucent='true'

           />

                );

    }

}let styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container:{

        backgroundColor:'#eae7ff',
        flex:1,




    },

});
export {Featured as default};