import React, {Component} from 'react';
import { ScrollView,TouchableOpacity,StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const Question = [
  {
    title: 'Question1',
    content:'Answer1',
  },
  {
    title: 'Question2',
    content:'Answer2',
  },
  {
    title: 'Question3',
    content:'Answer3',
  },
  {
    title: 'Question4',
    content:'Answer4',
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
        style={[styles.headerBlock, isActive ? styles.active : styles.inactive]}
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
          <Text style = {styles.headerText}>
            Q & A
          </Text>
          <Accordion
            align="bottom"
            activeSections={activeSections}
            sections={Question}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={200}
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
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },

  headerBlock: { 
    backgroundColor: '#F5FCFF',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 5,
    borderRadius:20,
    elevation:15,
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