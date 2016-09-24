import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

var MineCell = React.createClass({
    //外界传入初始化值
    getDefaultProps(){
        return{
            leftIconName:'',
            leftTitle:'',
            rightIconName:'',
            rightTitle:''
        }
    },

    render(){
      return(
          <TouchableOpacity
              activeOpacity={0.5}
          >
              <View
                style={styles.containerStyle}
              >
                  {/*左边*/}
                  <View
                    style={styles.leftViewStyle}
                  >
                      <Image
                          source={{uri:this.props.leftIconName}}
                          style={styles.leftImageStyle}
                      />

                      <Text
                        style={styles.leftTitleStyle}
                      >
                          {this.props.leftTitle}
                      </Text>
                  </View>
                  {/*右边*/}
                  <View
                    style={styles.rightViewStyle}
                  >
                      {this.rightSubView()}

                  </View>





              </View>



          </TouchableOpacity>
      )

    },

    rightSubView(){
        return(
            <View
                style={{flexDirection:'row',alignItems:'center'}}
            >
                {this.renderRightContent()}
                <Image
                    source={{uri:'icon_cell_rightArrow'}}
                    style={{width:8,height: 13,marginRight:8,marginLeft:5}}
                />

            </View>

        )
    },

    renderRightContent(){
        if (this.props.rightIconName.length == 0){
            return(
                <Text
                    style={{color:'gray'}}
                >
                    {this.props.rightTitle}
                </Text>
            )
        }else {
            return(
                <Image
                    source={{uri:this.props.rightIconName}}
                    style={{width:24,height:13}}
                />
            )
        }
    }




});

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:Platform.OS == 'ios' ? 40 : 36,

        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5


    },

    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8


    },

    leftImageStyle:{
        width:24,
        height:24,
        marginRight:6,
        borderRadius:12

    },

    leftTitleStyle:{
        fontSize:18

    },
    rightViewStyle:{

    }


});

module.exports = MineCell;



