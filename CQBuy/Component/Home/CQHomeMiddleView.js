import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//引入外部的组件
var CommonView = require('./CQHomeCommentView');

//引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({
    render(){
      return(
          <View
            style={MiddleStyle.containerStyle}
          >
              {/*左边*/}
              {this.renderLeftView()}
              {/*右边*/}
              <View>
                 {this.renderRightView()}
              </View>
          </View>

      )
    },

    renderLeftView(){
        //拿到对应的数据
        var data = TopMiddleData.dataLeft[0];
        return(
            <TouchableOpacity
                onPress={()=>{alert('KS')}}
            >
                <View
                    style={MiddleStyle.leftViewStyle}
                >
                    <Image
                        source={{uri:data.img1}}
                        style={MiddleStyle.leftImageStyle}
                    />
                    <Image
                        source={{uri:data.img2}}
                        style={MiddleStyle.leftImageStyle}
                    />
                    <Text
                        style={{color:'gray'}}
                    >
                        {data.title}
                    </Text>
                    <View
                        style={{flexDirection:'row',marginTop:5}}
                    >
                        <Text
                            style={{color:'blue',marginRight:5}}
                        >
                            {data.price}
                        </Text>

                        <Text
                            style={{color:'orange',backgroundColor:'yellow'}}
                        >
                            {data.sale}

                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
        )

    },

    renderRightView(){
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        for (var i = 0;i < rightData.length;i++){
            var data = rightData[i];
            itemArr.push(
                <CommonView
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                    key={i}

                />
            )
        }
        return itemArr;
    }
});

const MiddleStyle = StyleSheet.create({
    containerStyle:{
        marginTop:15,
        flexDirection:'row'
    },

    leftViewStyle:{

        width:width * 0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
        justifyContent:'center'


    },

    leftImageStyle:{
        width:120,
        height:30,
        resizeMode:'contain'

    },


})

module.exports = HomeMiddleView;



