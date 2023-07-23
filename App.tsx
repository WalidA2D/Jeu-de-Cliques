/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

class App extends Component {
  state = {
    count: 0,
    isGameStarted: false,
    remainingTime: 5,
  };

  timer: NodeJS.Timeout | null = null;

  startGame = () => {
    this.setState({
      count: 0,
      isGameStarted: true,
      remainingTime: 5,
    });

    this.updateTime();
  };

  updateTime = () => {
    this.timer = setTimeout(() => {
      this.setState(
        (prevState) => ({
          remainingTime: prevState.remainingTime - 1,
        }),
        () => {
          if (this.state.remainingTime === 0) {
            this.endGame();
          } else {
            this.updateTime();
          }
        }
      );
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.setState({
      isGameStarted: false,
    });
  };

  handleTap = () => {
    if (this.state.isGameStarted) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  };

  render() {
    const { count, isGameStarted, remainingTime } = this.state;

    if (!isGameStarted) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Jeu de Cliques</Text>
          <Text style={styles.finalScore}>Score final : {count}</Text>
          <TouchableOpacity style={styles.button} onPress={this.startGame}>
            <Text style={styles.buttonText}>Commencer une nouvelle partie</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <TouchableWithoutFeedback onPress={this.handleTap}>
        <View style={styles.container}>
          <Text style={styles.title}>Jeu de Cliques</Text>
          <Text style={styles.counter}>Compteur : {count}</Text>
          <Text style={styles.remainingTime}>Temps restant : {remainingTime} secondes</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Couleur de fond
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Couleur du texte
  },
  finalScore: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333', // Couleur du texte
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333', // Couleur du texte
  },
  remainingTime: {
    fontSize: 18,
    color: '#333', // Couleur du texte
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3498db', // Couleur du bouton
    padding: 10,
    borderRadius: 5, // Pour rendre le bouton arrondi
  },
  buttonText: {
    color: '#fff', // Couleur du texte du bouton
    fontSize: 16,
  },
});

export default App;



/*import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;*/
