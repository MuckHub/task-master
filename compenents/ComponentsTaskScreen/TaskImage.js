import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';

export default function TaskImage() {
  return (
    <View>
      <Image
        onPress={() => console.log('onPress()')}
        source={{
          uri:
            'file:///var/mobile/Containers/Data/Application/15CB1467-9B29-4362-A1C4-0B0424D838F9/Library/Caches/ExponentExperienceData/%2540anonymous%252Ftask-master-9d97f193-7077-4ee3-ab50-dea3878bdbc3/ImagePicker/6C2D4A01-13F6-4690-A8DD-6FCF1A997092.jpg',
        }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
