import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, Image } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

export default function cameraScreen() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ flex: 1 }}
        type={type}
        ref={camRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buttonCamera}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.buttonText}>Cambiar</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={styles.buttonCapturedPhoto} onPress={takePicture}>
        <FontAwesome name="camera" size={50} color="black" />
      </TouchableOpacity>

      {
        capturedPhoto &&
        <Modal animationType="slide"
          transparent={false}
          visible={open}>
          <View style={styles.viewModal}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => setOpen(false)}>
              <FontAwesome name="window-close" size={25} color="black" />
            </TouchableOpacity>
            <Image style={{ width: '100%', height: '80%', borderRadius: 20 }} source={{ uri: capturedPhoto }} />
          </View>
        </Modal>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonCamera: {
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  buttonText: {
    fontSize: 20,
    marginBottom: 15,
    color: 'white'
  },
  buttonCapturedPhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    height: 50
  },
  buttonModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  viewModal:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }

});