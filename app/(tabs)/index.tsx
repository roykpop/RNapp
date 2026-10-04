import '@/global.css'
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { Link } from "expo-router";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import images from "@/constants/images"
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from '@/constants/data'
import { icons } from '@/constants/icons'
import { formatCurrency } from '@/lib/utils';
import dayjs from 'dayjs';
import ListHeading from '@/components/ListHeading';
import UpcomingSubscriptionCard from '@/components/UpcomingSubscriptionCard';
import SubscriptionCard from '@/components/SubscriptionCard';
import { useState } from 'react';



const SafeAreaView = styled(RNsafeAreaView);

export default function Index() {

  const [expandedSubscriptionID, setExpandedSubscriptionID] = useState<string | null>(null)

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">


      <View className="flex-1">

        <FlatList
          ListHeaderComponent={() => (
            <>
              <View className='home-header'>
                <View className='home-user'>
                  <Image source={images.avatar} className='home-avatar' />
                  <Text className='home-user-name'>{HOME_USER.name}</Text>
                </View>
                <Image source={icons.add} className='home-add-icon' />
              </View>

              <View className='home-balance-card'>
                <View className='home-balance-card-header'>
                  <Text className='home-balance-label'>Balance</Text>
                </View>
                <View className='home-balance-row'>
                  <Text className='home-balance-amount'>{formatCurrency(HOME_BALANCE.amount)}</Text>
                  <Text className='home-balance-date'>{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
                </View>
              </View>

              <View>
                <ListHeading title='Upcoming' />

                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => (
                    <UpcomingSubscriptionCard {...item} />
                  )}
                  keyExtractor={(item) => (item.id)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={<Text className='home-empty-state'>No Subscriptions yet</Text>}
                />
              </View>

              <ListHeading title="All Subscriptions" />

            </>)}

            
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SubscriptionCard
              {...item}
              expanded={expandedSubscriptionID === item.id}
              onPress={() =>
                setExpandedSubscriptionID((currentID) =>
                  currentID === item.id ? null : item.id
                )} />
          )}
          showsVerticalScrollIndicator={false}
          extraData={expandedSubscriptionID}
          ItemSeparatorComponent={() => <View className='h-4'></View>}
          ListEmptyComponent={() => <Text className='home-empty-state'>No Subs</Text>}
          contentContainerClassName='pb-20'
        />
      </View>



    </SafeAreaView>
  );
}