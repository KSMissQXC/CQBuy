
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

var HeaderV = require('./CQHomeHeaderView');

var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenter = React.createClass({
    getDefaultProps(){
        return{
            popToHomeView:null
        }
    },

    render(){
        return(
            <View
                style={styles.containerStyle}
            >
                <HeaderV
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
                />
                {/*下部分*/}
                {/*下部分*/}
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true} // 横向
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>




            </View>
        )
    },

    // 返回下部分所有的Item
    renderAllItem(){
        // 定义组件数组
        var itemArr = [];
        // 取出数据
        var shopData= Home_D5.data;
        // 遍历
        for (var i=0; i<shopData.length; i++){
            // 取出单个数据
            var data = shopData[i];
            // 创建组件装入数组
            itemArr.push(
                <ShopCenterItem
                    shopImage = {data.img}
                    shopSale = {data.showtext.text}
                    shopName = {data.name}
                    detailurl = {data.detailurl}
                    key={i}
                    popTopShopCenter = {(url)=>this.popTopHome(url)}
                />
            );
        }
        // 返回
        return itemArr;
    },

    popTopHome(url){
        // 判断
        if (this.props.popToHomeView == null) return;

        // 执行回调函数
        this.props.popToHomeView(url);
    }








});

// 每一个商场
var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage: '',
            shopSale:'',
            shopName: '',
            detailurl: '',
            popTopShopCenter: null
        }
    },

    render(){
        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri: this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    clickItem(url){
        // 判断
        if (this.props.detailurl == null) return;

        // 执行回调函数
        this.props.popTopShopCenter(url);
    }

});



const styles = StyleSheet.create({
    containerStyle:{
        marginTop:15

    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8
    },

    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10
    },

    itemViewStyle:{
        margin:8
    },

    shopSaleStyle:{
        // 绝对定位
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:2
    },

    shopNameStyle:{
        textAlign:'center',
        marginTop:5
    }

});

module.exports = ShopCenter;
