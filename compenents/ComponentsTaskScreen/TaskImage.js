import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';

export default function TaskImage(props) {
  const img = props.url;

  const img2 =
    'file:///var/mobile/Containers/Data/Application/15CB1467-9B29-4362-A1C4-0B0424D838F9/Library/Caches/ExponentExperienceData/%2540anonymous%252Ftask-master-9d97f193-7077-4ee3-ab50-dea3878bdbc3/ImagePicker/53EE395F-F1D2-4795-BB94-31C11D6057B8.jpg';

  return (
    <View>
      <Image
        onPress={() => console.log('onPress()')}
        source={{

          uri: img,

        }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
