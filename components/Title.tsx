import {StyleSheet, Text, View} from "react-native";


type TitleProps = {
    title: string;
    color: string;
    pos: "center" | "top";
}


export default function Title(props: TitleProps): JSX.Element {
const {title, color, pos} = props

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: color}]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        marginBottom:10
    },
    title: {
        fontSize: 30,
        fontWeight: "900",
        textTransform: 'capitalize'
    }
});