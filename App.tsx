import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FansyCard from './components/FansyCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <FlatCards />
        <ElevatedCard/>
        <FansyCard/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
