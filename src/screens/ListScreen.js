import React from 'react'
import { Text, StyleSheet, View, FlatList, SafeAreaView, StatusBar } from 'react-native'

const DATA = [
    {
        key: '0',
        name: 'Eric',
        age: '23'
    },
    {
        key: '1',
        name: 'Hannah',
        age: '29'
    },
    {
        key: '2',
        name: 'Jeremy',
        age: '29'
    },
    {
        key: '3',
        name: 'Travis',
        age: '31'
    },
    {
        key: '4',
        name: 'Karol',
        age: '25'
    }
]

const Item = ({ name, age }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{ name } - Age { age }</Text>
    </View>
)

const ListScreen = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name} age={item.age} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                vertical
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 32,
    },
});

export default ListScreen
