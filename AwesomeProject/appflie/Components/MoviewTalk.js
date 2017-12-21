/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import MovieDetail from './MovieDetail'

const  REQUEST_URL ='https://api.douban.com/v2/movie/top250';
class MoviewTalk extends React.Component{

    constructor(props){
        super(props);

        var  movies;

        this.state={

            movies:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2
            }),
        };
        this.fetchData();
        loaded:false
    }

    fetchData(){

        fetch(REQUEST_URL)
            .then(response=>response.json())
            .then(responseData=>{

                this.setState({

                    movies:this.state.movies.cloneWithRows(responseData.subjects),
                    loaded:true
                });

            })
            .done();
    }
    showMovieDetail(movie){
            this.props.navigator.push({

                    title:movie.title,
                component:MovieDetail,
            });

    }

    renderMovieList(movie){
        return(
            <TouchableHighlight
                underlayColor='rgba(34,26,38,0.1)'
                onPress={()=>this.showMovieDetail(movie)}
            >
            <View style={styles.item}>
                <View style = {styles.itemImage}>

                    <Image source={{uri:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg'}}
                           style = {styles.image}

                    />

                </View>
                <View style = {styles.itemContent } >
                    <Text style = {styles.itemHeader}>{movie.title}</Text>
                    <Text style = {styles.itemMeta}>{movie.original_title } ({movie.year})</Text>
                    <Text>
                        <Text style ={styles.redText}>{movie.rating.average }</Text>
                    </Text>

                </View>


            </View>
            </TouchableHighlight>

        );

    }
    render(){
        if (!this.state.loaded)
        {
            return(
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <Text>加载中...</Text>
                    </View>

                </View>

            );
        }


        return(
            <View style = {styles.container}>
                <ListView
                    dataSource = {this.state.movies}
                    renderRow = {
                        this.renderMovieList.bind(this)
                    }

                />
            </View>

        );
    }
}

let styles = StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    item:{
        flexDirection:'row',
        borderBottomWidth:1,//下边的边框
        borderColor:'rgba(100,53,201,0.1)',//边框的颜色
        paddingBottom:6,//下内边距
        paddingTop:6,
        // marginBottom:6,//下外边距
        flex:1,

    },
    itemContent:{
        flex:1,
        marginLeft:13,//左边外边距
        marginTop:6,//上边外边距


    },

    itemImage:{},
    image:{
        width: 99,
        height:138,
        margin:6,

    },

    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6,
    },
    itemMeta:{
        fontSize:16,
        marginBottom:6,
        color:'rgba(0,0,0,0.6)'
    },
    redText:{
        color:'#db2828',
        fontSize:15,
    },
    title :{
        fontSize: 19,
        color:'#6435c9'
    },
    container:{

        backgroundColor:'#eae7ff',
        flex:1,
        paddingTop:64,



    }

});

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

export {MoviewTalk as default};





