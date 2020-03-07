import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import { Left, Right } from 'native-base'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class XScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pat Muhi</Text>
        <View style={styles.bordersSmall}>
          <Left style={{ marginLeft: 15 }}>
            <Text style={{ flexDirection: 'row' }}>
              <Icons name='usd' style={{ fontSize: 28 }} />
              <Text style={styles.labelWhite}>1000</Text>
            </Text>
          </Left>
          <Right style={{ marginRight: 15 }}>
            <Text style={styles.labelBlue}>+6.51%</Text>
          </Right>
        </View>
        <Image source={require('../assets/avatar.png')} style={styles.logo} />
        <View style={styles.borders}>
          <Left>
            <TouchableOpacity>
              <Text style={styles.labelBlack}>Upload Funds</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity>
              <Text style={styles.labelBlack}>Withdraw Funds</Text>
            </TouchableOpacity>
          </Right>
        </View>
        <View>
          <Text style={styles.smalFontBlod}>Uploads</Text>
          <View style={styles.borders}>
            <Left style={{ marginLeft: 15 }}>
              <Text style={{ flexDirection: 'row' }}>
                <Icons name='usd' style={{ fontSize: 28 }} />
                <Text style={styles.labelWhite}>1000</Text>
              </Text>
            </Left>
            <Right style={{ marginRight: 15 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.labelPending}>Pending</Text>
                <Text style={styles.smalFont}>02/05/2020</Text>
              </View>
            </Right>
          </View>
        </View>
        <View>
          <Text style={styles.smalFontBlod}>Withdraws</Text>
          <View style={styles.borders}>
            <Left style={{ marginLeft: 15 }}>
              <Text style={{ flexDirection: 'row' }}>
                <Icons name='usd' style={{ fontSize: 28 }} />
                <Text style={styles.labelWhite}>100</Text>
              </Text>
            </Left>
            <Right style={{ marginRight: 15 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.labelDone}>Done</Text>
                <Text style={styles.smalFont}>02/05/2020</Text>
              </View>
            </Right>
          </View>
          <View style={styles.borders}>
            <Left style={{ marginLeft: 15 }}>
              <Text style={{ flexDirection: 'row' }}>
                <Icons name='usd' style={{ fontSize: 28 }} />
                <Text style={styles.labelWhite}>50</Text>
              </Text>
            </Left>
            <Right style={{ marginRight: 15 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.labelDone}>Done</Text>
                <Text style={styles.smalFont}>02/05/2020</Text>
              </View>
            </Right>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    padding: deviceHeight / 80
  },
  bordersSmall: {
    borderColor: '#d1d0d0',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: deviceHeight / 80,
    margin: deviceHeight / 80,
    width: deviceWidth * 0.6
  },
  borders: {
    borderColor: '#d1d0d0',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: deviceHeight / 100,
    margin: deviceHeight / 80,
    width: deviceWidth * 0.8
  },
  labelWhite: {
    fontWeight: 'bold',
    fontSize: 20
  },
  labelBlue: {
    backgroundColor: '#3edd96',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 3
  },
  labelBlack: {
    backgroundColor: 'black',
    color: '#ffe500',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5
  },
  logo: {
    borderRadius: deviceWidth * 0.17,
    width: deviceWidth * 0.34,
    height: deviceWidth * 0.34,
    borderColor: '#d1d0d0',
    borderWidth: 4,
    margin: deviceHeight / 80
  },
  smalFontBlod: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  labelPending: {
    backgroundColor: '#e44f4f',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 3,
    color: 'white',
    width: deviceWidth / 6,
    paddingLeft: 10
  },
  labelDone: {
    backgroundColor: '#3edd96',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 3,
    color: 'white',
    width: deviceWidth / 6,
    paddingLeft: 20
  },
  smalFont: {
    fontSize: 10,
    fontWeight: 'bold'
  }
})

export default XScreen
