import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

//引入外部的json数据
var TopMenu = require('../../LocalData/TopMenu.json');

//引入外部的组件
var TopListV = require('./CQHomeTopListView');



var HomeTopView = React.createClass({

    getInitialState(){
        return{
            activePage : 0
        }


    },

    render(){
        return(
            <View
                style={HomeHeadStyle.containerStyle}
            >
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}

                >
                    {this.renderScrollItem()}
                </ScrollView>

                {/*页码部分*/}
                <View
                    style={HomeHeadStyle.indicatorViewStyle}
                >
                    {this.renderIndicator()}


                </View>


            </View>

        )

    },

    onScrollAnimationEnd(e){

        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        this.setState({
            activePage:currentPage
        })

    },

    renderIndicator(){
        var indicatorArr = [];
        var style;
        for (var i = 0 ;i <2;i++){
            style = (i === this.state.activePage) ? {color : 'orange'} : {color : 'gray'}
            indicatorArr.push(
                <Text
                    key={i}
                    style={[{fontSize:25},style]}
                >
                    &bull;

                </Text>
            )

        }
        return indicatorArr;


    },



    renderScrollItem(){
        var itemArr = [];
        var dataArr = TopMenu.data;
        for (var i= 0 ; i < dataArr.length;i++){
           itemArr.push(
                <TopListV
                    key={i}
                    dataArr={dataArr[i]}
                />
           );
            
        }
        return itemArr;

    }



});

const HomeHeadStyle = StyleSheet.create({

    containerStyle:{
        backgroundColor:'white',
        

    },
    indicatorViewStyle:{

        flexDirection:'row',

        justifyContent:'center'

    }

});

module.exports = HomeTopView;



