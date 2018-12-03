import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {
  
    constructor() {
      super();
      this.state = {
        text: "when disubmit, the text here should ganti :)",
        inputan: "---"
      }
    }

 render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.tulisan}>
          <Text>{this.state.text}</Text>
        </View>
        
        <View style={styles.inputan}>
      
          <TextInput
            style={styles.textinputan}
            placeholder='type Here...'
            onChangeText={(inputan) => this.setState({inputan})}  
          ></TextInput>
      
          <Button
            style={styles.submit}
            title="Submit"
            color="#00AA00"
            onPress={(text) => this.setState({text: this.state.inputan})}
          ></Button>
      
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  },
  tulisan: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputan: {
    margin: 10,
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: "row"
  },
  textinputan: {
    flex: 1,
    borderColor: '#555'
  },
  submit: {
    flex: 0.25,
  }

});
