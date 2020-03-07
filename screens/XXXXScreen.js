import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import IconsAntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Left, Right, Row } from 'native-base'
import { PieChart } from 'react-native-chart-kit'
import { LineChart } from 'react-native-chart-kit'
// import * as ART from '@react-native-community/art'
// import Pie from 'react-native-pie'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class XXXXScreen extends React.Component {
  render () {
    const dataPie = [
      {
        name: 'Seoul',
        population: 49.16,
        color: '#147aea',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      },
      {
        name: 'Toronto',
        population: 20.15,
        color: '#2e2c50',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      },
      {
        name: 'Beijing',
        population: 10.42,
        color: '#9c99ad',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      },
      {
        name: 'New York',
        population: 9.99,
        color: '#db5742',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      },
      {
        name: 'Moscow',
        population: 10.28,
        color: '#f0c05b',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      }
    ]
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 3, // optional, default 3
      barPercentage: 0.5
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.borders}>
            <View style={{ flexDirection: 'row' }}>
              <Left>
                <Text style={styles.fontLgBold}>Month Performance</Text>
              </Left>
              <Right>
                <Text style={styles.labelBlue}>+6.51%</Text>
              </Right>
            </View>
            <Text style={styles.fontLgGray}>IFL Rank #762</Text>
            <PieChart
              data={dataPie}
              width={deviceWidth}
              height={220}
              chartConfig={chartConfig}
              accessor='population'
              backgroundColor='transparent'
              paddingLeft={deviceWidth / 4}
              hasLegend={false}
            />
            {/* <Pie
            radius={70}
            innerRadius={40}
            series={[10, 20, 30, 40]}
            colors={['#f00', '#0f0', '#00f', '#ff0']}
          /> */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View style={styles.AlginCenterLabel}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.circleS1}></View>
                  <Text>{dataPie[0].population}</Text>
                </View>
                <Icons name='space-shuttle' style={{ fontSize: 28 }}></Icons>
                <Text>Commodities</Text>
              </View>
              <View style={styles.AlginCenterLabel}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.circleS2}></View>
                  <Text>{dataPie[1].population}</Text>
                </View>
                <Icons name='space-shuttle' style={{ fontSize: 28 }}></Icons>
                <Text>Aerospace</Text>
                <Text>& Defence</Text>
              </View>
              <View style={styles.AlginCenterLabel}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.circleS3}></View>
                  <Text>{dataPie[2].population}</Text>
                </View>
                <Icons name='space-shuttle' style={{ fontSize: 28 }}></Icons>
                <Text>Technology</Text>
                <Text>& Media</Text>
              </View>
              <View style={styles.AlginCenterLabel}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.circleS4}></View>
                  <Text>{dataPie[3].population}</Text>
                </View>
                <Icons name='space-shuttle' style={{ fontSize: 28 }}></Icons>
                <Text>Retail</Text>
              </View>
            </View>
          </View>
          <View style={styles.borders}>
            <Text style={styles.fontLgBold}>Your Month Performance</Text>
            <View style={{ flexDirection: 'row' }}>
              <Left>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/avatar.png')}
                    style={styles.logo}
                  />
                  <Text style={{ flexDirection: 'row' }}>
                    <Icons name='usd' style={{ fontSize: 28 }} />
                    <Text style={styles.labelWhite}>1000</Text>
                  </Text>
                </View>
              </Left>
              <Right style={{ marginRight: 15 }}>
                <Text style={styles.labelBlue}>+6.51%</Text>
              </Right>
            </View>
          </View>
          <View style={styles.grayBack}>
            <View style={styles.whiteBoard}>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  flexDirection: 'row'
                }}
              >
                <Text style={styles.fontMdGray}>5h ago</Text>
                <Ionicons name='ios-flag' style={styles.flag}></Ionicons>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../assets/avatar.png')}
                  style={styles.logoSm}
                />
                <Text style={styles.fontMdBlack}>Hunter Berg </Text>
                <Text style={styles.fontMdGray}>closed </Text>
                <Text style={styles.fontMdBlack}>#cspr</Text>
              </View>

              <View style={styles.detailboard}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.fontLgBold}>Casper Sleep</Text>
                    <Text>$9.06->$9.35</Text>
                  </View>
                  <Right>
                    <Text style={styles.labelBlue}>+3.20%</Text>
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
                    width={deviceWidth * 0.7} // from react-native
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <View>
                    <Text style={styles.fontMdGray}> Holding period 1 day</Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Ionicons
                        name='ios-arrow-dropup-circle'
                        style={styles.iconArrowBl}
                      ></Ionicons>
                      <Text>BUY position</Text>
                    </View>
                  </View>
                  <Right>
                    <Image
                      source={require('../assets/avatar2.png')}
                      style={styles.logoSm}
                    />
                  </Right>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <View style={styles.like}>
                  <Icons name='heart' style={styles.flag}></Icons>
                  <Text style={styles.fontMdGray}>Like</Text>
                </View>
                <View style={styles.like}>
                  <MaterialIcons
                    name='mode-comment'
                    style={styles.flag}
                  ></MaterialIcons>
                  <Text style={styles.fontMdGray}>Comment</Text>
                </View>
                <View style={styles.like}>
                  <MaterialIcons
                    name='screen-share'
                    style={styles.flag}
                  ></MaterialIcons>
                  <Text style={styles.fontMdGray}>Share</Text>
                </View>
              </View>
            </View>
            <View style={styles.whiteBoard}>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  flexDirection: 'row'
                }}
              >
                <Text style={styles.fontMdGray}>5h ago</Text>
                <Ionicons name='ios-flag' style={styles.flag}></Ionicons>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../assets/avatar.png')}
                  style={styles.logoSm}
                />
                <Text style={styles.fontMdBlack}>Hunter Berg </Text>
                <Text style={styles.fontMdGray}>closed </Text>
                <Text style={styles.fontMdBlack}>#cspr</Text>
              </View>
              <View style={styles.detailboard}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.LabelBl}>
                    <Ionicons
                      name='ios-arrow-dropup-circle'
                      style={styles.iconArrow}
                    ></Ionicons>
                    <Text style={{ color: 'white' }}>BUY</Text>
                  </View>
                  <Text>10% position</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <View>
                    <Text style={styles.fontLgBold}>
                      Vertex Pharmaceuticals
                    </Text>
                    <Text>$239.64</Text>
                  </View>
                  <Right>
                    <Image
                      source={require('../assets/avatar2.png')}
                      style={styles.logoSm}
                    />
                  </Right>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <View style={styles.like}>
                  <Icons name='heart' style={styles.flag}></Icons>
                  <Text style={styles.fontMdGray}>Like</Text>
                </View>
                <View style={styles.like}>
                  <MaterialIcons
                    name='mode-comment'
                    style={styles.flag}
                  ></MaterialIcons>
                  <Text style={styles.fontMdGray}>Comment</Text>
                </View>
                <View style={styles.like}>
                  <MaterialIcons
                    name='screen-share'
                    style={styles.flag}
                  ></MaterialIcons>
                  <Text style={styles.fontMdGray}>Share</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
    padding: deviceHeight / 80,
    margin: 5,
    width: deviceWidth * 0.97,
    marginTop: deviceHeight / 80,
    overflow: 'hidden'
  },
  fontLgBold: {
    fontWeight: 'bold',
    fontSize: 19
  },
  fontLgGray: {
    fontSize: 17,
    color: '#868e9a'
  },
  circleS1: {
    height: 10,
    width: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#147aea',
    marginHorizontal: 5
  },
  circleS2: {
    height: 10,
    width: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#2e2c50',
    marginHorizontal: 5
  },
  circleS3: {
    height: 10,
    width: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#9c99ad',
    marginHorizontal: 5
  },
  circleS4: {
    height: 10,
    width: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#db5742',
    marginHorizontal: 5
  },
  circleS4: {
    height: 10,
    width: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#f0c05b',
    marginHorizontal: 5
  },
  AlginCenterLabel: {
    justifyContent: 'center',
    width: deviceWidth * 0.23,
    alignItems: 'center'
  },
  logo: {
    borderRadius: deviceWidth / 14,
    width: deviceWidth / 7,
    height: deviceWidth / 7,
    borderColor: '#d1d0d0',
    borderWidth: 4,
    margin: deviceHeight / 80,
    overflow: 'hidden'
  },
  logoSm: {
    borderRadius: deviceWidth / 18,
    width: deviceWidth / 9,
    height: deviceWidth / 9,
    borderColor: '#d1d0d0',
    borderWidth: 4,
    margin: deviceHeight / 80,
    overflow: 'hidden'
  },
  labelWhite: {
    fontWeight: 'bold',
    fontSize: 20
  },
  fontMdBlack: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  fontMdGray: {
    fontSize: 16,
    color: '#868e9a'
  },
  labelBlue: {
    backgroundColor: '#3edd96',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 3,
    overflow: 'hidden',
    color: 'white'
  },
  grayBack: {
    backgroundColor: '#e5e4e9',
    padding: 5,
    width: deviceWidth * 0.97,
    marginVertical: 10
  },
  flag: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#868e9a'
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth * 0.28,
    justifyContent: 'center'
  },
  whiteBoard: {
    backgroundColor: 'white',
    marginVertical: 3,
    paddingVertical: 5
  },
  detailboard: {
    borderColor: '#f0f0f3',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
    marginLeft: deviceWidth / 7,
    marginRight: 5,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    padding: 5,
    paddingLeft: 10
  },
  LabelBl: {
    backgroundColor: 'black',
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  iconArrow: { color: 'white', fontSize: 18, marginRight: 5 },
  iconArrowBl: { color: 'black', fontSize: 18, marginRight: 5 }
})

export default XXXXScreen
