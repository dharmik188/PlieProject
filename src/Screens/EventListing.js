import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Touchable,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Heart from '../assets/Images/heart.png';
import Back from '../assets/Images/arrow-right.png';
import share from '../assets/Images/share.png';
import Heartoutline from '../assets/Images/heart_outline.png';

const EventsScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [likedEvents, setLikedEvents] = useState({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const toggleLike = (id) => {
    setLikedEvents((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle the current state
    }));
  };

  const fetchEvents = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/events-listing',
        {}, // body (optional)
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 seconds
        },
      );

      console.log('API Response:', response.data.data.events);

      if (
        response.data?.data?.events &&
        Array.isArray(response.data.data.events)
      ) {
        setEvents(response.data.data.events);
      } else {
        setError('No events found.');
      }
    } catch (err) {
      if (err.response) {
        console.error('API Error:', err.response.status, err.response.data);
        setError(`Server error: ${err.response.status}`);
      } else if (err.request) {
        console.error('No response received:', err.request);
        setError('No response from server. Check your internet or server IP.');
      } else {
        console.error('Axios error:', err.message);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const renderEventItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image source={{ uri: item.event_profile_img }} style={styles.image} />
        </View>
        <View style={styles.headerRow}>
          <View style={{ marginLeft: 5 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.eventName}>{item.event_name}</Text>
              <TouchableOpacity>
                <Image
                  source={Back}
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 5,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.dateText}>
                {item.readable_from_date} - {item.readable_to_date}
              </Text>
              <Text style={styles.cityText}>
                {item.city}, {item.country}
              </Text>
            </View>
            <Text style={styles.priceText}>
              €{item.event_price_from} - €{item.event_price_to}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.tagsRow}>
                {item.keywords && item.keywords.length > 0 ? (
                  item.keywords.map((keyword, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{keyword}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.cityText}>No keywords</Text>
                )}
              </View>
              <View style={styles.iconRow}>
                <TouchableOpacity>
                  <Image
                    source={share}
                    style={{ width: 23, height: 23, resizeMode: 'contain' }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleLike(item.id)}>
                  <Image
                    source={likedEvents[item.id] ? Heart : Heartoutline}
                    style={{ width: 23, height: 23, resizeMode: 'contain' }}
                  />
                </TouchableOpacity> 
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading events...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loader}>
        <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
          {error}
        </Text>
        <TouchableOpacity style={styles.retryBtn} onPress={fetchEvents}>
          <Text style={{ color: '#fff' }}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.headerText}>Hello Renzo!</Text>
        <Text style={styles.subHeader}>Are you ready to dance?</Text>
      </View>

      <FlatList
        data={events}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderEventItem}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F2', padding: 16 },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  subHeader: { fontSize: 16, color: '#777', marginBottom: 20, fontWeight: '400' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    borderColor: '#000',
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // shadowOffset: { width: 0, height: 3 },
    // elevation: 4,
  },
  headerRow: {},
  image: { width: 90, height: 90, borderRadius: 8, backgroundColor: '#eee' },
  eventName: { fontSize: 14, fontWeight: '600' },
  dateText: { color: '#888', fontSize: 13, marginVertical: 3 },
  priceText: { color: '#222', fontWeight: '600' },
  cityText: { color: '#555', fontSize: 12 },
  tagsRow: { flexDirection: 'row', marginTop: 8, flexWrap: 'wrap' },
  tag: {
    backgroundColor: '#F2F2F7',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: { fontSize: 12, color: '#333' },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    gap: 15,
  },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  retryBtn: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default EventsScreen;
