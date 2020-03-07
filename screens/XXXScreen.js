import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import IconsAntDesign from 'react-native-vector-icons/AntDesign'
import { Left, Right, Row } from 'native-base'
import { LineChart } from 'react-native-chart-kit'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class XXXScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      periodValue: 0,
      periodTexts: ['Day', 'Week', 'Month', 'Year', '5Year']
    }
  }
  _handleOnPress (index) {
    this.setState({
      periodValue: index
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: deviceHeight / 50
          }}
        >
          <Icons name='video-camera' style={styles.avatar} />
          <View style={{paddingLeft:20}}>
            <Text style={styles.fontLarge}> STOQEY (STQ)</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.smallFontBlack}> $125.78</Text>
              <IconsAntDesign
                name='caretup'
                style={{
                  fontSize: 20,
                  backgroundColor: 'white',
                  color: '#3edd95',
                  marginTop: 3,
                  marginLeft: 5
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#EAEDED' }}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={styles.fontLargeGray}>$0.44</Text>
              <IconsAntDesign
                name='caretup'
                style={{
                  fontSize: 16,
                  color: '#868e9a',
                  marginTop: 3,
                  marginLeft: 5
                }}
              />
            </View>
            <Text style={styles.smallFontGray}>11.17% {this.state.periodTexts[this.state.periodValue]} Charge</Text>
            <View
              style={{
                paddingVertical: deviceHeight / 80,
                flexDirection: 'row'
              }}
            >
              {this.state.periodTexts.map((periodText, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this._handleOnPress(index)}
                  >
                    {this.state.periodValue === index && (
                      <Text style={styles.roundBtnActive}>{periodText}</Text>
                    )}
                    {this.state.periodValue !== index && (
                      <Text style={styles.roundBtn}>{periodText}</Text>
                    )}
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
          <View>
            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={deviceWidth * 0.9} // from react-native
              height={deviceHeight * 0.4}
              yAxisLabel='$'
              yAxisSuffix='M'
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundGradientFrom: '#1E2923',
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: '#08130D',
                backgroundGradientToOpacity: 0.1,
                color: (opacity = 1) => `rgba(9, 142, 247, ${opacity})`,
                // color:'#abd6f8',
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5
              }}
              // bezier
              style={{
                marginBottom: 8
                // borderRadius: 16,
                // backgroundColor:'white'
              }}
            />
          </View>
        </View>
        <View style={styles.borders}>
          <Left>
            <TouchableOpacity>
              <Text style={styles.labelBlack}>BUY</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity>
              <Text style={styles.labelBlack}>SELL</Text>
            </TouchableOpacity>
          </Right>
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
    justifyContent: 'center',
    marginTop: deviceHeight / 30
  },
  borders: {
    borderColor: '#d1d0d0',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: deviceHeight / 40,
    margin: 5,
    width: deviceWidth * 0.9,
    marginTop: deviceHeight / 20
  },
  avatar: {
    fontSize: 50,
    color: 'white',
    backgroundColor: '#348ffb',
    width: 80,
    height: 80,
    padding: 15,
    borderRadius: 40,
    borderColor: '#d1d0d0',
    borderWidth: 3
  },
  fontLarge: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black'
  },
  fontLargeGray: {
    fontSize: 26,
    color: '#868e9a'
  },
  smallFontBlack: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  smallFontGray: {
    fontSize: 16,
    color: '#868e9a'
  },
  labelBlack: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 5
  },
  roundBtn: {
    padding: 3,
    paddingHorizontal: deviceWidth / 25,
    // width: deviceWidth / 6.5,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ecebef',
    color: '#3b86ec',
    marginHorizontal: 3
  },
  roundBtnActive: {
    paddingVertical: 3,
    paddingHorizontal: deviceWidth / 25,
    // width: deviceWidth / 6.5,
    backgroundColor: '#3b86ec',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3b86ec',
    color: 'white',
    marginHorizontal: 3,
  }
})

export default XXXScreen
