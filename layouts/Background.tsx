import {StyleSheet} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

export function Background(): JSX.Element {

    return (
        <LinearGradient
            colors={[ '#fcb045', 'black', 'black']}
            style={styles.gradient}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    gradient: {
        position: "absolute",
        zIndex:0,
        width: '100%',
        height: '100%'
    },
});