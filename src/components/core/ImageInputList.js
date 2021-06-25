import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    const scrollView = useRef();
    const scrollEnd = () => {
        scrollView.current.scrollToEnd();
    };
    return (
        <View style={{ justifyContent: 'center', height: 161 }}>
            <ScrollView
                ref={scrollView}
                horizontal
                onContentSizeChange={scrollEnd}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                key={uri}
                                onChangeImage={() => { onRemoveImage(uri) }}
                            />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        marginRight: 5,
        marginLeft: 5,
    },
});

export default ImageInputList;
