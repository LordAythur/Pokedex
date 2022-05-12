import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CustomButton(props) {

    const {text, color, displayColor, name, setTextParent, image, ...restProps} = props

    return (
        <Button 
            style={styles.button}
            onPress={()=> setTextParent(image)}
            title={text}
            color={color}
            accessibilityLabel={text}
        />
    )       
}

const styles = StyleSheet.create({
    button: {
        
    }
});