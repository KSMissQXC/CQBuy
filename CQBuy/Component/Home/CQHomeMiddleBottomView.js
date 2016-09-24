import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//导入外部的json数据
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');

//引入外部的组件
var CommonView = require('./CQHomeCommentView');

var BottomView = React.createClass({
    getDefaultProps(){
      return{
          popTopHome:null
      }
    },

    render(){
        return(
            <View
                style={BottomStyle.containerStyle}
            >
                {/*上半部分*/}
                <View
                    style={BottomStyle.topViewStyle}
                >
                </View>

                <View>
                {/*下半部分*/}
                <View
                    style={BottomStyle.bottomViewStyle}
                >
                    {this.renderBottomItem()}

                </View>
                </View>


            </View>
        )

    },

    //下部分所有的组件
    renderBottomItem(){
        var itemArr = [];
        var dataArr = Home_D4.data;
        for (var i = 0; i < dataArr.length;i++){
            var itemData = dataArr[i];
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(data)}

                />
            )
        }
        return itemArr;
    },

    popToTopView(data){
        this.props.popTopHome(data);
    },
    
    // 处理图像的尺寸
    dealWithImgUrl(url){
        if (url.search('w.h') == -1){ // 没有找到,正常返回
            return url;
        }else{
            return url.replace('w.h', '120.90');
        }
    }




});

var BottomStyle = StyleSheet.create({

    containerStyle:{
        marginTop:15,

    },
    topViewStyle:{

    },
    bottomViewStyle:{

        flexDirection:'row',
        flexWrap:'wrap'

    }

});

module.exports = BottomView;