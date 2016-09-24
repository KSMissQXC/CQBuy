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


var CommonView = React.createClass({
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
            //下级界面的url
            tplurl:'',
            //回调函数
            callBackClickCell:null
        }
    },

    render(){
      return(
          <TouchableOpacity
              onPress={() => this.clickCell(this.props.tplurl)}
          >
              <View
                style={CommonStyle.containerStyle}
              >
                  {/*左边*/}
                  <View>
                      <Text
                        style={[{color:this.props.titleColor},CommonStyle.titleStyle]}
                      >
                          {this.props.title}
                      </Text>
                      <Text
                          style={CommonStyle.subTitleStyle}
                      >
                          {this.props.subTitle}
                      </Text>


                  </View>
                  {/*右边*/}
                  <Image
                      source={{uri:this.props.rightIcon}}
                      style={{width:64,height:43,resizeMode:'contain'}}
                  />
              </View>
          </TouchableOpacity>
      )


    },

    //点击了cell
    clickCell(data){
        if (this.props.callBackClickCell == null) return;
        this.props.callBackClickCell(data);


    },










});

const CommonStyle = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white',
        width:width * 0.5 - 1,
        height:59,
        marginBottom:1,
        marginRight:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        flexWrap:'wrap',
        // flex:1

    },

    titleStyle:{
        fontSize:18,
        fontWeight:'bold'

    },
    subTitleStyle:{
        color:'gray'
    },


});

module.exports = CommonView;
