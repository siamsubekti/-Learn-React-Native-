import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native';
import { Container, Content, Left, Header, Button } from 'native-base';
import Icon from 'react-native-ionicons';
import MenuItem from '../../../components/MenuItem';
import { TouchableHighlight } from 'react-native-gesture-handler';



class HomeScreen extends Component{

    // static navigationOptions ={
    //     drawerIcon:(
    //         <Image source={require('../../../assets/logo.jpg')} style={{height:24, width:24}}/>
    //     )
    // }
   
    render(){
        return(
            <Container>
                <Header>
                {/* //  navigation={this.props.navigation.openDrawer} icon={<Icon name="menu" />} title="Dashboard">  */}
                    {/* <Left title="Dashboard">
                        <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()}/>
                    </Left> */}
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems: 'center',
                    justifyContent:'center'
                }}>
                  
                    <ImageBackground source={require('../../../images/wallpaper.png')} style={styles.container}>
                        <View style={styles.overlayContainer}>

                            <View style={styles.top}>
                                <Text style={styles.header}>OPERATOR POS </Text>
                            </View>

                            <View style={styles.menuContainer}>
                                
                            <Button transparent onPress={(()=>{alert('scan barcode'); })} style={styles.btn}>
                               <Image source={require('../../../assets/scan-qr-code.png')} style={styles.image}/>
                            </Button>
                            <Button transparent onPress={(()=>{alert('my account'); })} style={styles.btn}>
                               <Image source={require('../../../assets/account.jpg')} style={styles.image}/>
                            </Button>
                            <Button transparent onPress={()=>{this.props.navigation.navigate('ListData')}} style={styles.btn}>
                               <Image source={require('../../../assets/icondocument.png')} style={styles.image}/>
                            </Button>
                            <Button transparent onPress={()=>{this.props.navigation.navigate('Logout')}} style={styles.btn}>
                               <Image source={require('../../../assets/iconLogout.jpg')} style={styles.image}/>
                               {/* <Icon name='barcode-scan'/> */}
                            </Button>
                            </View>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer:{
        flex:1,
        // backgroundColor:'rgba(153,255,0,0.2)'
    },
    top:{
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
    },
    header:{
        color:'#fff',
        fontSize:28,
        borderColor:'#fff',
        borderWidth:2,
        padding:20,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:'rgba(255,255,255, .1)'
    },
    menuContainer:{
        height: '50%',
        flexDirection: 'column',
        flexWrap:'wrap',
        alignContent: 'center'
        
    },
    image:{
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
    },
    btn:{
        width: '40%',
        height: '50%',
        padding: 20,

    }

});
export default HomeScreen;