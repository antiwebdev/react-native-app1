import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FansyCard from './components/FansyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <FlatCards />
        <ElevatedCard/>
        <FansyCard/>
        <ContactList/>
        <ActionCard/>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
