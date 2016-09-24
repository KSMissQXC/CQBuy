/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

//常量
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

/**----导入外部的组件类---**/
var HomeDetail = require('./CQHomeDetail');
var TopView = require('./CQHomeTopView');
var MiddleView = require('./CQHomeMiddleView');
var MiddleBottomView = require('./CQHomeMiddleBottomView');
var ShopCenter = require('./CQHomeShopCenter');

var GeustYouLike = require('./CQHomeGeustYouLike');



var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNav()}

                <ScrollView>
                    {/*头部的View*/}
                    <TopView />
                    {/*中间的内容*/}
                    <MiddleView/>
                    {/*中间的下半部分内容*/}
                    <MiddleBottomView
                        popTopHome = {(data) => this.pushToDetail(data)}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        
                    />

                    {/*猜你喜欢*/}
                    <GeustYouLike />


                </ScrollView>




            
            </View>
        );
    },


    // 跳转到二级界面
    pushToDetail(){
        this.props.navigator.push(
            {
                component: HomeDetail, // 要跳转的版块
                title:'详情页'
            }
        );
    },

    renderNav(){
        return(
            <View
                style={styles.navBarStyle}
            >
                {/*左边*/}
                <TouchableOpacity
                    onPress={()=>{this.pushToDetail()}}
                >
                    <Text
                        style={{color:'white'}}
                    >
                        广州
                    </Text>
                </TouchableOpacity>

                {/*中间*/}
                <TextInput
                    placeholder = "输入商圈,品类,商家"
                    style={styles.navInputStyle}
                />

                {/*右边*/}
                <View
                    style={styles.navRightStyle}
                >
                    <TouchableOpacity
                        onPress={()=>{alert('点击了')}}
                    >
                        <Image
                            source={{uri:'icon_homepage_message'}}
                            style={styles.navRightImageStyle}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{alert('点击了')}}
                    >
                        <Image
                            source={{uri:'icon_homepage_scan'}}
                            style={styles.navRightImageStyle}
                        />
                    </TouchableOpacity>

                </View>

            </View>

        )



    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navBarStyle:{

        height:Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'



    },
    navInputStyle:{

        width:width * 0.7,
        height:Platform.OS == 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop:Platform.OS == 'ios' ? 18 : 0,

        //设置圆角
        borderRadius:17,
        paddingLeft:10


    },
    navRightStyle:{
        flexDirection:'row',
        height:64,
        alignItems:'center'

    },
    navRightImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24
    }
});

// 输出组件类
module.exports = Home;
