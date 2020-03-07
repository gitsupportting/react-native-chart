import React from 'react'
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import IconsAntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Left, Right, Row } from 'native-base'
import { LineChart } from 'react-native-chart-kit'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class XXScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.borders}>
          <Left>
            <Text
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 10
              }}
            >
              <Text style={styles.largeFont}>8663.58 </Text>
              <Icons name='long-arrow-up' style={styles.largeFont} />
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icons name='usd' style={styles.smallFontGray} />
              <Text style={styles.smallFontGray}> 8663.58</Text>
              <Text style={styles.smallFontGreen}>+1.05%</Text>
            </View>
          </Left>
          <Right style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View>
              <Text style={styles.smallFontGray}>Vol</Text>
              <Text style={styles.smallFontGray}>High</Text>
              <Text style={styles.smallFontGray}>Low</Text>
            </View>
            <View>
              <Text style={styles.smallFontBlack}>370</Text>
              <Text style={styles.smallFontBlack}>916</Text>
              <Text style={styles.smallFontBlack}>159.50</Text>
            </View>
          </Right>
        </View>
        <View
          style={{ borderColor: '#d1d0d0', borderWidth: 1, borderRadius: 5 }}
        >
          <View style={styles.performance}>
            <Left>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Performance
              </Text>
              <Text style={styles.fontNormal}>Profit & Loss</Text>
            </Left>
            <Right>
              <Text
                style={{ fontSize: 25, fontWeight: 'bold', color: '#39dc96' }}
              >
                0.58%
              </Text>
              <Text style={styles.fontNormal}>$6044.77</Text>
            </Right>
          </View>
          <View style={{ alignItems: 'center' }}>
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
              height={deviceHeight * 0.25}
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
        <View style={styles.grayBack}>
          <View>
            <View style={styles.board}>
              <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='md-cash' style={styles.avatarCash} />
                <View>
                  <Text style={styles.fontNormal}> Cash </Text>
                </View>
              </Left>
              <Right
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <Text style={styles.fontNormal}> $940796.00 </Text>
                <Ionicons
                  name='ios-arrow-forward'
                  style={{
                    fontSize: 16,
                    backgroundColor: 'white',
                    color: 'black'
                  }}
                />
              </Right>
            </View>
            <View style={styles.board}>
              <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icons name='video-camera' style={styles.avatar} />
                <View>
                  <Text style={styles.fontNormal}> Cash</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.smallFontBlack1}> $125.78</Text>
                    <IconsAntDesign
                      name='caretup'
                      style={{
                        fontSize: 13,
                        backgroundColor: 'white',
                        color: '#3edd95'
                      }}
                    />
                    <Text style={styles.smallFontGray}> 14.32%</Text>
                  </View>
                </View>
              </Left>
              <Right>
                <Text style={styles.labelBlack}> $0.00 </Text>
                <Text style={styles.smallFontGray}> $0.00 </Text>
              </Right>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                borderBottomColor: '#cccbd5',
                borderBottomWidth: 1,
                marginVertical: 3,
                width: 0.7 * deviceWidth
              }}
            />
          </View>
          <View>
            <View style={styles.board}>
              <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../assets/avatar2.png')}
                  style={styles.avatar}
                />
                <Text style={styles.fontNormal}> Yunji ADR</Text>
              </Left>
              <Right
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <View>
                  <Text style={styles.smallFontBlack1}> $15.50 </Text>
                  <Text style={styles.smallFontGray}> -11.63% </Text>
                </View>
                <IconsAntDesign
                  name='caretup'
                  style={{
                    fontSize: 16,
                    backgroundColor: 'white',
                    color: '#3edd95'
                  }}
                />
              </Right>
            </View>
            <View style={styles.board}>
              <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../assets/avatar2.png')}
                  style={styles.avatar}
                />
                <Text style={styles.fontNormal}> Mxar Technologies</Text>
              </Left>
              <Right
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <View>
                  <Text style={styles.smallFontBlack1}> $15.50 </Text>
                  <Text style={styles.smallFontGray}> -11.63% </Text>
                </View>
                <IconsAntDesign
                  name='caretdown'
                  style={{
                    fontSize: 16,
                    backgroundColor: 'white',
                    color: '#f4412c'
                  }}
                />
              </Right>
            </View>
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
    justifyContent: 'center',
    marginTop: deviceHeight / 30
  },
  borders: {
    borderColor: '#d1d0d0',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: deviceHeight / 80,
    paddingTop: 0,
    margin: 5,
    width: deviceWidth * 0.97
  },
  performance: {
    flexDirection: 'row',
    paddingHorizontal: deviceHeight / 80,
    margin: 3,
    width: deviceWidth * 0.95
  },
  largeFont: {
    fontSize: 28,
    color: '#61b98a'
  },
  smallFontGreen: {
    fontSize: 14,
    color: '#61b98a',
    paddingLeft: 10
  },
  smallFontGray: {
    fontSize: 14,
    color: '#868e9a'
  },
  smallFontBlack: {
    fontSize: 14,
    paddingLeft: 15
  },
  smallFontBlack1: {
    fontSize: 14
  },
  fontNormal: {
    fontSize: 16,
    color: '#3d3d4a'
  },
  grayBack: {
    backgroundColor: '#e5e4e9',
    padding: 5,
    width: deviceWidth * 0.97,
    marginVertical: 10
  },
  board: {
    backgroundColor: 'white',
    padding: deviceHeight / 80,
    marginVertical: 3,
    flexDirection: 'row'
  },
  avatar: {
    fontSize: 28,
    color: 'white',
    backgroundColor: '#348ffb',
    width: 50,
    height: 50,
    padding: 11,
    borderRadius: 25,
    borderColor: '#d1d0d0',
    borderWidth: 3
  },
  avatarCash: {
    fontSize: 28,
    color: 'white',
    backgroundColor: '#9ec787',
    width: 50,
    height: 50,
    padding: 11,
    borderRadius: 25,
    borderColor: '#d1d0d0',
    borderWidth: 3
  },
  labelBlack: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 3,
    borderRadius: 5
  }
})

export default XXScreen
