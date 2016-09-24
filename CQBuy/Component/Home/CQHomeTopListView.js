import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Platform,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70 : 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);




var TopListV = React.createClass({
    getDefaultProps(){
        return{
            dataArr:[]
        }
    },

    getInitialState(){
        //创建数据源
        var ds = new  ListView.DataSource({
           rowHasChanged:(row1,row2) => row1 != row2
        });

        return{
            dataSource : ds.cloneWithRows(this.props.dataArr)
        }
    },

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={TopListStyle.contentViewStyle}
                scrollEnabled={false}
            />
        )
    },

    //具体的cell
    renderRow(rowData){
        return(

            <TouchableOpacity
                onPress={() => {alert('KS')}}
            >
                <View
                    style={TopListStyle.cellStyle}
                >
                    <Image
                        source={{uri:rowData.image}}
                        style={{width:52,height: 52}}
                    />
                    <Text
                        style={TopListStyle.titleStyle}
                    >
                        {rowData.title}

                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

});

const TopListStyle = StyleSheet.create({
    contentViewStyle:{
        //设置主轴的方向
        flexDirection:'row',
        //多个cell在同一行显示不够换行
        flexWrap:'wrap',
        width:width,
        // backgroundColor:'orange'
    },

    cellStyle:{
        width:cellW,
        height:cellH,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin


    },
    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray'
    },


});

module.exports = TopListV;
