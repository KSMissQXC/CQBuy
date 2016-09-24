/**
 * Created by cq on 16/9/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,//判断当前运行的版本
    Navigator
} from 'react-native';

//导入外部的组件
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/CQHome');
var Shop = require('../Shop/CQShop');
var Mine = require('../Mine/CQMine');
var More = require('../More/CQMore');

//创建函数
var Main = React.createClass({
    //初始化函数
    getInitialState(){
        return{
            selectedTab:'home'
        }
    },

    render(){
        return(
            <TabNavigator>

                {/*首页*/}
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home',Home,'首页')}
                {/*商家*/}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop',Shop,'商家')}
                {/*我的*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine',Mine,'我的')}
                {/*更多*/}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more',More,'更多')}




            </TabNavigator>


        )
    },

    //创建每一个TabBarItem
    renderTabBarItem(title,iconName,selectedIconName,seletedTab,component,componentName){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === seletedTab}
                title={title}
                renderIcon={() => <Image source={{uri:iconName}}
                style={mainStyle.iconStyle}
                 />}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}}
                style={mainStyle.iconStyle} />}
                onPress={() => this.setState({ selectedTab: seletedTab })}
                selectedTitleStyle = {mainStyle.selecteTitleStyle}

            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                     configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
              }}
                     renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}

                />

            </TabNavigator.Item>
        )


    }










});


//设置样式
const mainStyle = StyleSheet.create({
    iconStyle:{
        width:30,
        height:30
    },
    selecteTitleStyle:{
        color:'orange'
    }

});

//输出类
module.exports = Main;





