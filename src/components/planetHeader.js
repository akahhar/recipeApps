import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from './text/text'
import { AntDesign } from '@expo/vector-icons';
import { colors, spacing } from '../theme';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing[5],
        paddingBottom: spacing[5],
        borderBottomWidth: 1,
        borderBottomColor: colors.grey
    },
    headerIcon: {
        marginRight: spacing[4]
    }
})

export default function PlanetHeader({ backButton = false }) {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {backButton &&
                <TouchableOpacity style={styles.headerIcon} onPress={() => {
                    navigation.goBack();
                }}>
                    <AntDesign name="left" size={spacing[6]} color={colors.white} />
                </TouchableOpacity>
            }
            <Text preset='h2,uppercase'>The Planet</Text>
        </View>
    )
}
