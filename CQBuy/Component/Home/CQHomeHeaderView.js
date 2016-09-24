
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var HeaderV = React.createClass({
    getDefaultProps(){
        return{
            leftIcon: '',
            leftTitle: '',
            rightTitle: ''
        }
    },
    render(){
        return(
            <TouchableOpacity
                onPress={()=>{alert('KS')}}
            >
                <View
                    style={HeaderStyle.containerStyle}
                >
                    {/*左边*/}
                    <View
                        style={HeaderStyle.leftStyle}
                    >
                        <Image
                            source={{uri:this.props.leftIcon}}
                            style={{width:23,height: 23,marginRight:5}}

                        />
                        <Text
                            style={{fontSize:17}}
                        >
                            {this.props.leftTitle}

                        </Text>
                    </View>
                    {/*右边*/}
                    <View
                        style={HeaderStyle.rightStyle}
                    >
                        <Text
                            style={{color:'gray'}}
                        >
                            {this.props.rightTitle}
                        </Text>
                        <Image
                            source={{uri:'icon_cell_rightArrow'}}
                            style={{width:8,height:13,marginRight:8,marginLeft:5}}
                        />

                    </View>


                </View>

            </TouchableOpacity>


        )
    }



});

const HeaderStyle = StyleSheet.create({
    containerStyle:{
        height:44,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5

    },
    leftStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8

    },
    rightStyle:{
        flexDirection:'row',
        alignItems:'center'

    }

});

module.exports = HeaderV;