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
import { PieChart } from 'react-native-chart-kit'
// import * as ART from '@react-native-community/art'
import Pie from 'react-native-pie'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class XXXXScreen extends React.Component {
  render () {
    const dataPie = [
      {
        // name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F'
        // legendFontSize: 15
      },
      {
        name: 'Toronto',
        population: 2800000,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      },
      {
        name: 'Beijing',
        population: 527612,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      },
      {
        name: 'New York',
        population: 8538000,
        color: '#ffffff',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
      },
      {
        name: 'Moscow',
        population: 11920000,
        color: 'rgb(0, 0, 255)',
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
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5
    }
    return (
      <View style={styles.container}>
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
          {/* <PieChart
            data={dataPie}
            width={deviceWidth * 0.9}
            height={220}
            chartConfig={chartConfig}
            accessor='population'
            backgroundColor='transparent'
            paddingLeft='15'    
            hasLegend={false}    
          /> */}
          <Pie
            radius={70}
            innerRadius={40}
            series={[10, 20, 30, 40]}
            colors={['#f00', '#0f0', '#00f', '#ff0']}
          />
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
    padding: deviceHeight / 80,
    margin: 5,
    width: deviceWidth * 0.97,
    marginTop: deviceHeight / 20
  },
  fontLgBold: {
    fontWeight: 'bold',
    fontSize: 19
  },
  fontLgGray: {
    fontSize: 17,
    color: '#868e9a'
  },
  labelBlue: {
    backgroundColor: '#3edd96',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 3
  }
})

export default XXXXScreen
