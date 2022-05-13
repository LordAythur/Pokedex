import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default function CustomButton(props) {

    const {text, color, setTextParent, image} = props

    return (
        <Button
            onPress={()=> setTextParent(image)}
            title={text}
            color={color}
            accessibilityLabel={text}
        />
    )       
}