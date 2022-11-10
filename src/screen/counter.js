import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DecValue, IncValue } from '../action/counterAction'
import overAllReducer from '../reducer/counterReducer'
import { connect } from 'react-redux'
import store from '../store/counterStore'
import { StackActions } from '@react-navigation/native'

class counter extends Component {
    Increase = () => {
        // const { valueReducer, dispatch } = this.props
        // value += 1
        // dispatch(IncValue())
        const { AddValue } = this.props;
        AddValue(1)
    }
    Decrement = () => {
        const { SubValue } = this.props;
        SubValue(1)
    }

    render() {
        const { valueReducer } = this.props
        return (
            <SafeAreaView style={{ top: 180 }}>
                <View style={{ width: 120, height: 120, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30 }}>{valueReducer.Value}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={this.Increase}>
                        <Text>
                            Increase
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.Decrement}>
                        <Text>
                            Decrease
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = {
    AddValue: IncValue,
    SubValue: DecValue
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         AddValue: (value) => {
//             // dispatch({ type: 'Add', payload: value })
//             dispatch(IncValue(value))
//         }
//     }
// }

const mapStateToProps = state => {
    return {
        valueReducer: state.overAllReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);