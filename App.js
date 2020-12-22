import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  Alert,
} from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '2',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '3',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '4',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '5',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '6',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '7',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '8',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '9',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
  {
    id: '10',
    name: 'This is the name of plan',
    tag: 'And this is the tag',
    content:
      'Content is exactly I want to do to complete the plan... Just do it.',
  },
];

const Item = ({name, tag, content, onPress, onLongPress}) => (
  <Pressable
    onPress={onPress}
    onLongPress={onLongPress}
    style={({pressed}) => [
      {
        backgroundColor: pressed ? '#A5CAD225' : 'white',
      },
      {flexDirection: 'row', borderRadius: 10, marginVertical: 8},
    ]}>
    <View
      style={{
        backgroundColor: '#A5CAD2',
        width: 10,
        marginRight: 5,
        borderTopLeftRadius: 45,
        borderBottomLeftRadius: 45,
      }}></View>
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 4}}>
        {name}
      </Text>
      <Text
        style={{
          fontStyle: 'italic',
          fontSize: 12,
          color: '#A5CAD2',
          marginBottom: 4,
        }}>
        - {tag} -
      </Text>
      <Text style={{fontSize: 16, marginBottom: 4}}>{content}</Text>
    </View>
  </Pressable>
);

const App = () => {
  const [newName, setNewName] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newContent, setNewContent] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [curItem, setCurItem] = useState('');
  // const [selectedId, setSelectedId] = useState(null);

  const myAlert = (ID) =>
    Alert.alert(
      'XÓA KẾ HOẠCH?',
      'Bạn chắc chắn muốn xóa kế hoạch  này chứ?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel');
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log(ID);
            let formData = new FormData();
            formData.append('ID', ID);

            fetch('http://192.168.43.225/api/delete.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data; ',
              },
              body: formData,
            })
              .then(() => {
                console.log('Deleted');
                // setShowInfoModal(false);
              })
              .catch((err) => {
                console.log(err);
                // setShowInfoModal(false);
              });

            // GET method

            // fetch(`http://192.168.43.225/api/deleteNew.php?ID=${ID}`, {
            //   method: 'GET',
            //   headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            //   },
            //   // body: formData,
            // })
            //   .then(() => {
            //     console.log('Deleted');
            //     // setShowInfoModal(false);
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //     // setShowInfoModal(false);
            //   });
          },
        },
      ],
      {cancelable: false},
    );

  const getData = async () => {
    try {
      // myPhoneIP: 192.168.43.225
      const response = await fetch('http://192.168.43.225/api/getAll.php');
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const renderItem = ({item}) => {
    // const curItem = item.ID;
    return (
      <Item
        name={item.Name}
        tag={item.Tag}
        content={item.Content}
        onLongPress={() => {
          myAlert(item.ID);
        }}
        onPress={() => {
          console.log(item.ID);
          setShowInfoModal(true);
          setCurItem(item);
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 45,
        }}>
        <Text style={{fontSize: 24, fontStyle: 'italic'}}>-- MY PLANS --</Text>
      </View>

      <View
        style={{
          backgroundColor: '#A5CAD2',
          height: 2,
          borderRadius: 1,
          marginHorizontal: 18,
          marginBottom: 4,
        }}></View>

      <Modal
        animationType="slide"
        transparent={false}
        onShow={() => {}}
        visible={showInfoModal}
        onRequestClose={() => {}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginHorizontal: '5%',
            borderRadius: 12,
            marginTop: '45%',
            paddingVertical: 12,
            paddingHorizontal: 8,
            backgroundColor: '#A5CAD225',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              fontStyle: 'italic',
              marginBottom: 8,
            }}>
            -- UPDATE --
          </Text>
          <TextInput
            onChangeText={(text) => setNewName(text)}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              marginBottom: 8,
            }}
            placeholderTextColor="#A5CAD2"
            placeholder={curItem.Name}
          />
          <TextInput
            onChangeText={(text) => setNewTag(text)}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              marginBottom: 8,
            }}
            placeholderTextColor="#A5CAD2"
            placeholder={curItem.Tag}
          />
          <TextInput
            onChangeText={(text) => setNewContent(text)}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              marginBottom: 8,
            }}
            placeholderTextColor="#A5CAD2"
            placeholder={curItem.Content}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#A5CAD225' : '#A5CAD245',
                },
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '49%',
                  height: 36,
                  borderRadius: 8,
                },
              ]}
              onPress={() => {
                setShowInfoModal(false);
              }}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#A5CAD275' : '#A5CAD2',
                },
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '49%',
                  height: 36,
                  borderRadius: 8,
                },
              ]}
              onPress={() => {
                let formData = new FormData();
                formData.append('ID', curItem.ID);
                formData.append('Name', newName);
                formData.append('Tag', newTag);
                formData.append('Content', newContent);

                fetch('http://192.168.43.225/api/update.php', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'multipart/form-data; ',
                  },
                  body: formData,
                })
                  .then(() => {
                    console.log('Update OK');
                    setShowInfoModal(false);
                  })
                  .catch((err) => {
                    console.log(err);
                    setShowInfoModal(false);
                  });
              }}>
              <Text>Update</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={false}
        visible={showAddModal}
        onRequestClose={() => {}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginHorizontal: '5%',
            borderRadius: 12,
            marginTop: '45%',
            paddingVertical: 12,
            paddingHorizontal: 8,
            backgroundColor: '#A5CAD225',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              fontStyle: 'italic',
              marginBottom: 8,
            }}>
            -- NEW PLAN --
          </Text>
          <TextInput
            onChangeText={(text) => setNewName(text)}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              marginBottom: 8,
            }}
            placeholderTextColor="#A5CAD2"
            placeholder={'Name...'}
          />
          <TextInput
            onChangeText={(text) => setNewTag(text)}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              marginBottom: 8,
            }}
            placeholderTextColor="#A5CAD2"
            placeholder={'Tag...'}
          />
          <TextInput
            onChangeText={(text) => setNewContent(text)}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              marginBottom: 8,
            }}
            placeholderTextColor="#A5CAD2"
            placeholder={'Content...'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#A5CAD225' : '#A5CAD245',
                },
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '49%',
                  height: 36,
                  borderRadius: 8,
                },
              ]}
              onPress={() => {
                setShowAddModal(false);
              }}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#A5CAD275' : '#A5CAD2',
                },
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '49%',
                  height: 36,
                  borderRadius: 8,
                },
              ]}
              onPress={() => {
                let formData = new FormData();
                formData.append('Name', newName);
                formData.append('Tag', newTag);
                formData.append('Content', newContent);

                fetch('http://192.168.43.225/api/insert.php', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'multipart/form-data; ',
                  },
                  body: formData,
                })
                  .then(() => {
                    console.log('OK');
                    setShowAddModal(false);
                  })
                  .catch((err) => {
                    console.log(err);
                    setShowAddModal(false);
                  });

                // GET method

                // let formData = new FormData();
                // formData.append('Name', newName);
                // formData.append('Tag', newTag);
                // formData.append('Content', newContent);

                // // Name=test&Tag=test&Content=test
                // let myString = `http://192.168.43.225/api/insertNew.php?Name=${newName}&Tag=${newTag}&Content=${newContent}`;

                // fetch(myString, {
                //   method: 'GET',
                //   headers: {
                //     Accept: 'application/json',
                //     'Content-Type': 'application/json',
                //   },
                // })
                //   .then(() => {
                //     console.log('OK');
                //     setShowAddModal(false);
                //   })
                //   .catch((err) => {
                //     console.log(err);
                //     setShowAddModal(false);
                //   });
              }}>
              <Text>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <FlatList
        style={{marginHorizontal: 12}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
        // extraData={selectedId}
      />
      <Pressable
        onPress={() => setShowAddModal(true)}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#A5CAD275' : '#A5CAD225',
          },
          {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
            borderRadius: 30,
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
          },
        ]}>
        {({pressed}) => (
          <Text
            style={{
              color: pressed ? 'white' : '#A5CAD2',
              fontSize: 32,
            }}>
            +
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default App;
