import React, {Component} from 'react';
import { Switch,ScrollView,TouchableOpacity,StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const CK_enzyme =
  <LineChart data={{
          labels:["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"],
          datasets:[{data:[80,60,70,75,90,100]}]
        }}
        width = {Dimensions.get("window").width}
        height = {220}
        yAxisInterval = {1}
        yAxisSuffix = "kda"
        chartConfig = {{
          backgroundColor :"#e26a05",
          backgroundGradientForm:'#fb8c00',
          backgroundGradientTo:"#90f8f9",
          decimalPlaces:2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(200, 255, 255, ${opacity})`,
          style:{borderRadius:16},
          propsForDots:{r:"6",strokeWidth:"2",stroke:"#ffa726"}
        }}
        bezier
        style = {{marginVertical: 10,borderRadius:16}}/>

const BodyState = [
  {
    title: 'Current CK-enzyme Value = 100',
    content: CK_enzyme,
  },
  {
    title: 'RMS : High Risk',
  },
  {
    title: 'Dangerous!!',
  },
  {
    title: 'Suggestions:Reduce training volume',
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text>{section.content}</Text>
      </Animatable.View>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
          <Accordion
            align="bottom"
            activeSections={activeSections}
            sections={BodyState}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2e3',
    paddingTop: Constants.statusBarHeight,
  },

  header: { 
    backgroundColor: '#F5FCFF',
    padding: 30,
    marginVertical: 30,
    marginHorizontal: 5,
    borderRadius:20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
  },

})