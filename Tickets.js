import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = () => {
  const ticketItem = ({item}) => {
    return (
      <View style={styles.tickets}>
        <View>
          <Image source={item.image} style={styles.img} />
        </View>
        <View>
          <Text style={styles.tickettitle}>{item.event}</Text>
          <Text style={styles.ticketshortdescription}>
            {item.shortDescription}
          </Text>
          <Text
            styles={styles.ticketdescription}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {item.description}
          </Text>
          <Text style={styles.ticketshortdescription}>
            {' '}
            Price: {item.price}
          </Text>
          <Text style={styles.ticketbutton}>GET TICKET</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={globoTickets}
        renderItem={ticketItem}
        keyExtractor={item => item.eventId}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  tickets: {
    flexDirection: 'column',
  },
  image: {
    height: 180,
    width: '100%',
  },
  tickettitle: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ticketshortdescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
  },
  ticketdescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    paddingTop: 15,
  },
  ticketbutton: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 5,
  },
});

export default Tickets;
