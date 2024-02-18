import React from 'react'
import { View, Text } from 'react-native'
import repositories from '../data/repositories'

const ReposList = () => {
    retuen (
        <View>
            {
                repositories.map( repo => (
                    <View key={repo.id}>

                    </View>
                ))
            }
        </View>
    )
}