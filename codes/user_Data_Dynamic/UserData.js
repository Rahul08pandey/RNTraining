import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import UserModal from './UserModal';

const UserData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState([
    {
      userName: 'Rahul',
      hobbies: [{name: 'Cycling'}, {name: 'Video Games'}],
    },
    {
      userName: 'Aman',
      hobbies: [{name: 'Walking'}, {name: 'Dancing'}],
    },
  ]);

  const handleAddUser = (userName, hobbies) => {
    const newUser = {
      userName,
      hobbies: hobbies.map(hobby => ({name: hobby.name})),
    };
    setUserData(prevUsers => [...prevUsers, newUser]);
    //   setModalVisible(false);
  };

  const addUser = () => {
    setModalVisible(true);
  };

  const renderHobbies = ({item}) => (
    <View style={{marginLeft: 10}}>
      <Text style={{fontSize: 20}}> {item.name}</Text>
    </View>
  );

  const renderUser = ({item, index}) => (
    <View
      style={{
        borderColor: 'grey',
        borderWidth: 5,
        marginBottom: 10,
        backgroundColor: '#dddddd',
      }}>
      <Text style={styles.userTxt}>Name: {item.userName}</Text>
      <Text style={styles.userTxt}>Hobbies:</Text>

      <FlatList
        key={index}
        data={item.hobbies}
        keyExtractor={(hobby, index) => String(index)}
        renderItem={renderHobbies}></FlatList>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text style={styles.heading1}>UserHobbies</Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.heading2}>User and their hobbies:</Text>
        <FlatList
          data={userData}
          keyExtractor={(index, item) => String(index)}
          // keyExtractor={user => user.userName}
          renderItem={renderUser}></FlatList>
      </View>
      <View style={styles.subContainer3}>
        <TouchableOpacity style={styles.btn} onPress={addUser}>
          <Text style={styles.btnTxt}>Add more user</Text>
        </TouchableOpacity>
      </View>
      <UserModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddUser={handleAddUser}
      />
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },

  subContainer1: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },

  heading1: {
    fontSize: 55,
    color: 'green',
    fontFamily: 'PlaypenSans-Bold',
    textDecorationLine: 'underline',
  },

  subContainer2: {
    flex: 0.8,
    // backgroundColor: 'green',
  },

  heading2: {
    fontSize: 30,
    color: 'red',
    fontFamily: 'DancingScript-Regular',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  subContainer3: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },

  btn: {
    // flex: 1,
    width: '40%',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'orange',
  },

  btnTxt: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  userTxt: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'GreyQo-Regular',
    // textDecorationLine: 'underline',
  },
});
