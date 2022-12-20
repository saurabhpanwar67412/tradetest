import * as React from 'react';
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet} from 'react-native-paper';

const Separator = () => {
    return <View style={Platform.OS === "android" ? styles.separator : null} />;
  }

const BrandSelect = () => {

    const ONE_SECOND_IN_MS = 1000;
  
    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      2 * ONE_SECOND_IN_MS,
      3 * ONE_SECOND_IN_MS
    ];
  
    const PATTERN_DESC =
      Platform.OS === "android"
        ? "wait 1s, vibrate 2s, wait 3s"
        : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={[styles.header, styles.paragraph]}>Please choose the brand</Text>
        <View>
        <Button icon="camera" mode="contained" 
        title="Learn More"
        color="#25D366"
         onPress={() => console.log('Pressed')}>
        </Button>
        </View>
        <Separator />
           </SafeAreaView>
    );
  }




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: 44,
      padding: 8
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    },
    paragraph: {
      margin: 24,
      textAlign: "center"
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: "#737373",
      borderBottomWidth: StyleSheet.hairlineWidth
    }
  });

export default BrandSelect;