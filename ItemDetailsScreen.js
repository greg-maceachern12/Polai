const ItemDetailsScreen = ({ route }) => {
    const { item } = route.params;
  
    return (
      <View style={styles.detailsContainer}>
        <Image source={item.image} style={styles.detailsImage} />
        <View style={styles.detailsContent}>
          <Text style={styles.detailsType}>{item.type}</Text>
          <Text style={styles.detailsTitle}>{item.title}</Text>
          <Text style={styles.detailsRank}>Rank: {item.rank}</Text>
          <Text style={styles.detailsDate}>{item.date}</Text>
          <Text style={styles.detailsDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };