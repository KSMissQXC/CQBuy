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
    Image,
    WebView,
    Platform
} from 'react-native';


var Shop = React.createClass({

    getInitialState(){

        return{
            detailUrl:'http://www.baidu.com'
        }

    },


    render() {
        return (
            <View style={styles.container}>

                {/*导航条*/}
                {this.renderNav()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri:this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />

            </View>
        );
    },

    renderNav(){
        return(
            <View
                style={styles.navOutViewStyle}
            >
                <TouchableOpacity
                    style={styles.leftViewStyle}
                >
                    <Image source={{uri: 'icon_shop_local'}} style={styles.navImageStyle}/>
                </TouchableOpacity>

                <Text
                    style={{color:'white',fontSize:20,fontWeight:'bold'}}
                >
                    商家
                </Text>

                <TouchableOpacity
                    onPress={()=>{alert('点了!')}}
                    style={styles.rightViewStyle}
                >
                    <Image
                        source={{uri:'icon_shop_search'}}
                        style={styles.navImageStyle}
                    />

                </TouchableOpacity>

            </View>
        )

    },





});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    rightViewStyle:{

        //绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15 : 13

    },

    navOutViewStyle:{
        height:Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'



    },
    navImageStyle:{
        width:Platform.OS == 'ios' ? 28 : 24,
        height:Platform.OS == 'ios' ? 28 : 24,


    },
    leftViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },


});

// 输出组件类
module.exports = Shop;


