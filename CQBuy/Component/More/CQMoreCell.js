import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    Switch
} from 'react-native';

var MoreCell = React.createClass({
    //设置外界传入的固定参数
    getDefaultProps(){
        return{
            title:'',
            isSwitch:false,
            rightTitle:''
        }
    },

    getInitialState(){
        return{
            isOn:false
        }
    },

    render(){
        return(
            <TouchableOpacity
                onPress={()=>{alert('点了')}}
            >
                <View
                    style={styles.container}
                >
                    {/*左边*/}
                    <Text
                        style={{marginLeft:8}}
                    >
                        {this.props.title}
                    </Text>

                    {/*右边*/}
                    {this.renderRightView()}


                </View>


            </TouchableOpacity>
        )
    },

    renderRightView(){
        if (this.props.isSwitch){
            return(
                <Switch
                    value={this.state.isOn == true}
                    onValueChange = {()=>{
                        this.setState({
                            isOn: !this.state.isOn
                        })
                    }}
                    style={{marginRight:8}}
                />
            )
        }else {
            return(
                <View
                    style={{flexDirection:'row',alignItems:'center'}}
                >
                    {this.rightTitlet()}
                    <Image
                        source={{uri:'icon_cell_rightArrow'}}
                        style={{width:8,height:13,marginRight:8}}
                    />
                </View>
            )
        }

    },

    rightTitlet(){
        if (this.props.rightTitle.length > 0){
            return(
                <Text
                    style={{color:'gray',marginRight:3}}
                    
                >
                    {this.props.rightTitle}
                    
                </Text>
            )
        }
    }






});

const styles = StyleSheet.create({
    container:{
        height:Platform.OS == 'ios' ? 40:30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },

});

//输出组件
module.exports = MoreCell;