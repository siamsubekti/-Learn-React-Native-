// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   TouchableHighlight,
//   TouchableOpacity,
// } from 'react-native';
// import styles from './styles';
// import {Container, Content, Icon, Button} from 'native-base';
// import Header from '../../header/header';
// import Footer from '../../footer/footer';
// import { FlatGrid } from 'react-native-super-grid';
//
// export default class HomeScreen extends Component {
//   onPressButton = () => {
//     this.props.navigation.openDrawer;
//   };
//   render() {
//     const items = [
//       { name: 'SEND', code: '#1abc9c' },
//       { name: 'RECEIVED', code: '#2ecc71' },
//       { name: 'PROFILE', code: '#2ecc71' },
//       { name: 'TRAKING', code: '#2ecc71' },
//       { name: 'TRAKING', code: '#2ecc71' },
//       { name: 'TRAKING', code: '#2ecc71' },
//       { name: 'TRAKING', code: '#2ecc71' },
//       { name: 'TRAKING', code: '#2ecc71' },
//
//
//         ];
//     return (
//       <Container>
//         <Header
//           navigation={this.props.navigation.openDrawer}
//           // a={this.props.navigation.closeDrawer}
//           icon={<Icon name="menu" />}
//           title="Dashboard"
//         />
//
//         <FlatGrid
//             itemDimension={130}
//             items={items}
//             style={styles.gridView}
//             // staticDimension={300}
//             // fixed
//             // spacing={20}
//             renderItem={({ item, index }) => (
//                 <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
//                   <Text style={styles.itemName}>{item.name}</Text>
//                   <Text style={styles.itemCode}>{item.code}</Text>
//                 </View>
//             )}
//         />
//         <Footer />
//       </Container>
//     );
//   }
// }
// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
// import BottomSheet from 'react-native-js-bottom-sheet';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import styles from './styles';
// import Footer from '../../footer/footer';
// export default class Example extends Component {
//   bottomSheet: BottomSheet;
//
//   _onPressButton = () => {
//     this.bottomSheet.open();
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="Open" onPress={this._onPressButton} />
//         <BottomSheet
//           ref={(ref: BottomSheet) => {
//             this.bottomSheet = ref;
//           }}
//           itemDivider={3}
//           backButtonEnabled={true}
//           coverScreen={false}
//           title="Create"
//           options={[
//             {
//               title: 'SEND',
//               icon: (
//                 <MaterialCommunityIcons
//                   name="file-document-box"
//                   color="#2186fa"
//                   size={24}
//                 />
//               ),
//               onPress: () => null,
//             },
//             {
//               title: 'RECEIVED',
//               icon: <Entypo name="spreadsheet" color="#43a047" size={24} />,
//               onPress: () => null,
//             },
//             {
//               title: 'PROFILE',
//               icon: (
//                 <MaterialCommunityIcons name="folder" color="grey" size={24} />
//               ),
//               onPress: () => null,
//             },
//             {
//               title: 'TRAKING',
//               icon: (
//                 <MaterialCommunityIcons
//                   name="google-maps"
//                   color="grey"
//                   size={24}
//                 />
//               ),
//               onPress: () => null,
//             },
//             {
//               title: 'CHATTING',
//               icon: (
//                 <MaterialCommunityIcons name="chat-processing" color="grey" size={24} />
//               ),
//               onPress: () => null,
//             },
//           ]}
//           isOpen={false}
//         />
//
//       </View>
//
//     );
//   }
// }
// import React, {Component} from 'react';
// import {
//   Container,
//   Header,
//   Content,
//   Card,
//   CardItem,
//   Text,
//   Icon,
//   Right,
// } from 'native-base';
// import Footer from '../../footer/footer';
// export default class CardListExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Card>
//             <CardItem>
//               <Icon active name="paper" />
//               <Text>SEND</Text>
//               <Right>
//                 <Icon
//                   name="arrow-forward"
//                   onPress={() =>this.props.navigation.navigate('LoginForm')}/>
//               </Right>
//             </CardItem>
//             <CardItem>
//               <Icon active name="paper-plane" />
//               <Text>RECEIVED</Text>
//               <Right>
//                 <Icon name="arrow-forward" onPress={()=>this.props.navigation.navigate('Fetch')}/>
//               </Right>
//             </CardItem>
//             <CardItem>
//               <Icon active name="navigate" />
//               <Text>Traking</Text>
//               <Right>
//                 <Icon name="arrow-forward" onPress={()=>this.props.navigation.navigate('MyComponent')}/>
//               </Right>
//             </CardItem>
//               <CardItem>
//                   <Icon active name="ios-qr-scanner" />
//                   <Text>SCAN QR</Text>
//                   <Right>
//                       <Icon name="arrow-forward" onPress={()=>this.props.navigation.navigate('MyComponent')}/>
//                   </Right>
//               </CardItem>
//           </Card>
//         </Content>
//         <Footer />
//       </Container>
//     );
//   }
// }
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, CardItem, Icon, Right} from 'native-base';
import {SliderBox} from 'react-native-image-slider-box';
import Footer from '../../footer/footer';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // 'https://source.unsplash.com/1024x768/?nature',
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree",
        require('../../images/cargo_delivery_big.jpg'),
        require('../../images/download.jpg'),
        require('../../images/delivery_package.jpg'),
        require('../../images/cargo_air_small.jpg'),
      ],
    };
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <SliderBox
            images={this.state.images}
            // onCurrentImagePressed={index =>
            //   console.warn(`image ${index} pressed`)
            // }
            autoplay
          />
        </View>
        <CardItem>
          <Icon active name="paper-plane" />
          <Text>RECEIVED</Text>
          <Right>
            <Icon
              name="arrow-forward"
              onPress={() => this.props.navigation.navigate('UsersScreen')}
            />

          </Right>

        </CardItem>
        <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// import React, {Component} from 'react';
// import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// import '../home/app.css';
//
// class App extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       autoplay: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//     };
//     return (
//         <div className="container">
//           <Slider {...settings}>
//             <div><img src={require('../../images/cargo_delivery_big.jpg')} alt="Credit to Joshua Earle on Unsplash"/></div>
//             <div><img src={require('../../images/download.jpg')} alt="Credit to Alisa Anton on Unsplash"/></div>
//             <div><img src={require('../../images/cargo_air_small.jpg')} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
//             <div><img src={require('../../images/cargo_delivery_big.jpg')} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
//             <div><img src={require('../../images/delivery_package.jpg')} alt="Credit to Richard Nolan on Unsplash"/></div>
//             <div><img src={require('../../images/17-512.png')} alt="Credit to Cristina Gottardi on Unsplash"/></div>
//           </Slider>
//         </div>
//     );
//   }
// }
//
// export default App;
