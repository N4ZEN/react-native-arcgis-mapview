import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ArcGISMapView from 'react-native-arcgis-mapview';

const basemap =
  'https://wsmaldives.maps.arcgis.com/home/item.html?id=116bb92ab58f46098faca9cf9996c14f';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ArcGISMapView
        basemap={basemap}
        style={styles.backgroundStyle}
        onSingleTap={res => {
          console.log('hi');
          console.log(res);
        }}
        onMapDidLoad={() => {
          console.log('Map loaded');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    width: '100%',
    height: '100%',
  },
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

export default App;
