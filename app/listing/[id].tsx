import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ListingType } from "@/types/listingType";
import listingData from "@/data/destination.json";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const listing: ListingType = (listingData as ListingType[]).find(
    (item) => item.id === id
  );

  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.listingLocationTxt}>{listing.location}</Text>
          </View>
          <View style={styles.highlightWrapper}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="time" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Duration</Text>
                <Text style={styles.highlightTxtVal}>
                  {listing.duration} Days
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <FontAwesome5
                  name="users"
                  size={18}
                  color={Colors.primaryColor}
                />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Person</Text>
                <Text style={styles.highlightTxtVal}>{listing.duration}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="star" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Rating</Text>
                <Text style={styles.highlightTxtVal}>{listing.rating}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.listingDetails}>{listing.description}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.footerBtn}>
          <Text style={styles.footerBtnTxt}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  contentWrapper: {
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listingName: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  listingLocationTxt: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
  highlightWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  highlightIcon: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",
  },
  highlightTxt: {
    fontSize: 12,
    color: "#999",
  },
  highlightTxtVal: {
    fontSize: 14,
    fontWeight: "600",
  },
  listingDetails: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 38,
    width: width,
  },
  footerBtn: {
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  footerBtnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
