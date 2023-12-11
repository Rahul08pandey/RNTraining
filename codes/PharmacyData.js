import {React, useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PharmacyModal from './PharmacyModal';

const PharmacyList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allPharmacyData, setAllPharmacyData] = useState([
    {
      pharmacyName: 'Medicine1',
      medicineCategory: [
        {
          medicineCategoryType: 'CategoryType1',
          medicineNames: [{name: 'Name1'}, {name: 'Name2'}],
        },
      ],
    },
    {
      pharmacyName: 'Medicine2',
      medicineCategory: [
        {
          medicineCategoryType: 'CategoryType2',
          medicineNames: [{name: 'Name1'}, {name: 'Name2'}],
        },
      ],
    },
  ]);

  const addMore = () => {
    setModalVisible(true);
  };

  const handleAddPharmacyData = pharmacyData => {
    setAllPharmacyData(prevData => [...prevData, pharmacyData]);
    // console.log('PHARMACYDATA', allPharmacyData);
    setModalVisible(false);
  };

  const renderMedicine = ({item, index}) => (
    // console.log('item1', item);
    <View
      style={{
        borderColor: 'grey',
        borderWidth: 5,
        marginBottom: 10,
        backgroundColor: '#dddddd',
      }}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
        {item.pharmacyName}
      </Text>
      <FlatList
        data={item.medicineCategory}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderMedicineCategory}
      />
    </View>
  );

  const renderMedicineCategory = ({item}) => (
    <View style={{marginLeft: 20}}>
      <Text style={styles.userTxt}> - {item.medicineCategoryType}</Text>
      <FlatList
        data={item.medicineNames}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderMedicineNames}
      />
    </View>
  );

  const renderMedicineNames = ({item, index}) => (
    <View style={{marginLeft: 50}}>
      <Text style={{fontSize: 20}}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text style={styles.heading1}>Pharmacy Data</Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.heading2}>Medicines and their Types :</Text>
        <FlatList
          data={allPharmacyData}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderMedicine}
        />
      </View>
      <View style={styles.subContainer3}>
        <TouchableOpacity style={styles.btn} onPress={addMore}>
          <Text style={styles.btnTxt}>Add more user</Text>
        </TouchableOpacity>
      </View>
      <PharmacyModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddUser={handleAddPharmacyData}
      />
    </View>
  );
};

export default PharmacyList;

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
    fontSize: 42,
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






// import {React, useState} from 'react';
// import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import PharmacyModal from './PharmacyModal';

// const PharmacyList = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [allPharmacyData, setAllPharmacyData] = useState([
//     {
//       pharmacyName: 'Medicine1',
//       medicineCategory: [
//         {
//           medicineCategoryType: 'CategoryType1',
//           medicineNames: [{name: 'Name1'}, {name: 'Name2'}],
//         },
//       ],
//     },
//     {
//       pharmacyName: 'Medicine2',
//       medicineCategory: [
//         {
//           medicineCategoryType: 'CategoryType2',
//           medicineNames: [{name: 'Name1'}, {name: 'Name2'}],
//         },
//       ],
//     },
//   ]);

//   const addMore = () => {
//     setModalVisible(true);
//   };

//   const handleAddPharmacyData = pharmacyData => {
//     setAllPharmacyData(prevData => [...prevData, pharmacyData]);
//     // console.log('PHARMACYDATA', allPharmacyData);
//     setModalVisible(false);
//   };

//   const renderMedicine = ({item, index}) => (
//     // console.log('item1', item);
//     <View
//       style={{
//         borderColor: 'grey',
//         borderWidth: 5,
//         marginBottom: 10,
//         backgroundColor: '#dddddd',
//       }}>
//       <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
//         {item.pharmacyName}
//       </Text>
//       <FlatList
//         data={item.medicineCategory}
//         keyExtractor={(item, index) => String(index)}
//         renderItem={renderMedicineCategory}
//       />
//     </View>
//   );

//   const renderMedicineCategory = ({item}) => (
//     <View style={{marginLeft: 20}}>
//       <Text style={styles.userTxt}>{item.medicineCategoryType}</Text>
//       <FlatList
//         data={item.medicineNames}
//         keyExtractor={(item, index) => String(index)}
//         renderItem={renderMedicineNames}
//       />
//     </View>
//   );

//   const renderMedicineNames = ({item}) => (
//     <View style={{marginLeft: 50}}>
//       <Text style={{fontSize: 20}}> {item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.subContainer1}>
//         <Text style={styles.heading1}>Pharmacy Data</Text>
//       </View>
//       <View style={styles.subContainer2}>
//         <Text style={styles.heading2}>Medicines and their Types :</Text>
//         <FlatList
//           data={allPharmacyData}
//           keyExtractor={(item, index) => String(index)}
//           renderItem={renderMedicine}
//         />
//       </View>
//       <View style={styles.subContainer3}>
//         <TouchableOpacity style={styles.btn} onPress={addMore}>
//           <Text style={styles.btnTxt}>Add more user</Text>
//         </TouchableOpacity>
//       </View>
//       <PharmacyModal
//         isVisible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onAddUser={handleAddPharmacyData}
//       />
//     </View>
//   );
// };

// export default PharmacyList;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'black',
//   },

//   subContainer1: {
//     flex: 0.15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: 'green',
//   },

//   heading1: {
//     fontSize: 42,
//     color: 'green',
//     fontFamily: 'PlaypenSans-Bold',
//     textDecorationLine: 'underline',
//   },

//   subContainer2: {
//     flex: 0.8,
//     // backgroundColor: 'green',
//   },

//   heading2: {
//     fontSize: 30,
//     color: 'red',
//     fontFamily: 'DancingScript-Regular',
//     textDecorationLine: 'underline',
//     marginBottom: 10,
//   },

//   subContainer3: {
//     flex: 0.05,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: 'blue',
//   },

//   btn: {
//     // flex: 1,
//     width: '40%',
//     borderWidth: 2,
//     borderRadius: 10,
//     backgroundColor: 'orange',
//   },

//   btnTxt: {
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
//   userTxt: {
//     fontSize: 22,
//     color: 'black',
//     fontFamily: 'GreyQo-Regular',
//     // textDecorationLine: 'underline',
//   },
// });
