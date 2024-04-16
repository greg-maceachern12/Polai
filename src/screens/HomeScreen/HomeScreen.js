// HomeScreen.js
import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Modal, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FeedItem from "../../components/FeedItem/FeedItem";
import ExpandedCardModal from "../../components/ExpandedCardModal/ExpandedCardModal";
import styles from "./HomeScreen.styles";
import data from "../../data/feedData";

const HomeScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (item) => {
    setSelectedCard(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModalVisible(false);
  };

  const handleCreateRanking = () => {
    // Handle create new ranking logic
    console.log("Create new ranking");
  };

  const handleFilterOptions = () => {
    // Handle filter options logic
    console.log("Filter options");
  };


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleFilterOptions} style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateRanking} style={styles.createButton}>
          <Ionicons name="add" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <View style={styles.card}>
              <FeedItem item={item} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Modal visible={modalVisible} animationType="fade" transparent>
        <ExpandedCardModal
          item={selectedCard}
          visible={modalVisible}
          onClose={closeModal}
        />
      </Modal>
    </View>
  );
};

export default HomeScreen;
