import { type InitialProps, close, openHostApp } from "expo-share-extension";
import { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ShareExtension({ images, videos }: InitialProps) {
  const handleOpenHostApp = useCallback(() => {
    if (videos?.length) {
      openHostApp(`/create?videoUrl=${videos[0]}`);
    }
  }, [videos]);

  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "Inter-Black", fontSize: 24, marginBottom: 10 }}
      >
        Media Example
      </Text>
      {images?.length ? (
        <Text
          style={{
            textAlign: "center",
            color: "#313639",
            fontSize: 16,
          }}
        >
          Images: {JSON.stringify(images)}
        </Text>
      ) : null}
      {videos?.length ? (
        <Text
          style={{
            textAlign: "center",
            color: "#313639",
            fontSize: 16,
          }}
        >
          Videos:{JSON.stringify(videos)}
        </Text>
      ) : null}
      <Button title="Open Host App" onPress={handleOpenHostApp} />
      <Button title="Close" onPress={close} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
