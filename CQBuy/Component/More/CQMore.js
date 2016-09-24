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
    Platform,
    ScrollView,
    Image
} from 'react-native';

//引入外部组件
var MoreCell = require('./CQMoreCell');


var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNav()}
                <ScrollView>
                    <View
                        style={{marginTop:20}}
                    >
                        <MoreCell
                            title="扫一扫"
                        />
                    </View>

                    <View
                        style={{marginTop:20}}
                    >
                        <MoreCell
                            title="省流量模式"
                            isSwitch = {true}
                        />

                        <MoreCell
                            title="消息提醒"
                        />

                        <MoreCell
                            title="邀请好友使用吗团"
                        />

                        <MoreCell
                            title="情况缓存"
                            rightTitle = "1.99M"

                        />


                    </View>


                    <View style={{marginTop:20}}>
                        <MoreCell
                            title="问卷调查"
                        />
                        <MoreCell
                            title="支付帮助"
                        />
                        <MoreCell
                            title="网络诊断"
                        />
                        <MoreCell
                            title="关于码团"
                        />
                        <MoreCell
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <MoreCell
                            title="精品应用"
                        />
                    </View>





                </ScrollView>


            </View>
        );
    },
    renderNav(){
        return(
            <View
                style={styles.navOutViewStyle}
            >
                <Text
                    style={{color:'white',fontSize:20,fontWeight:'bold'}}
                >
                    更多
                </Text>

                <TouchableOpacity
                    onPress={()=>{alert('点了!')}}
                    style={styles.rightViewStyle}
                >
                    <Image
                        source={{uri:'icon_mine_setting'}}
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


    }

});

// 输出组件类
module.exports = More;

