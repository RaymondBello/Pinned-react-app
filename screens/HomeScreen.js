import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { useState, useRef } from "react";
import styled from "styled-components";
import categoryList from "../categories";
import appContent from "../contentData"; 

function HomeScreen({ navigation }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
    const gamesRef = useRef();

    const changeCategory = (category) => {
        gamesRef.current.scrollToOffset({ x: 0, y: 0 });
        setSelectedCategory(category);
    };

  // Functions to use within the component
  const PinItem = (game) => {
    return (
      
      <Game >
        <GameCover source={game.cover} />
        <GameInfo backgroundColor="#d6e0f0" source={game.description}>
          <GameImage source={game.profile} />
          <GameTitle>
            <Text style={{color:"#393b44",fontSize:16}}>
            {game.teaser}
            </Text>
            <Text style={{color:"#393b44",fontWeight:"bold",fontSize:16}} >
              @{game.title} • {game.createdAt}mins ago
            </Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  };


  return (
    <Animatable.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5B5E6A",
      }}
      animation="fadeInUpBig"
      duration={800}
    >
      <StatusBar barStyle="light-content" />

      {/* <Text>This is the home screen</Text>
      <Button
        title="Go to Profile Screen"
        onPress={() => {
          console.log("Profile screen button pressed");
          navigation.navigate("Profile");
        }}
      /> */}
      

      <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => {
          return (
            <Category key={index} onPress={() => {
              console.log(category)
              changeCategory(category)
            }}>
              <CategoryName
                selected={selectedCategory === category ? true : false}
          
              >
                {category}
              </CategoryName>
              {selectedCategory === category && <CategoryDot/>}
            </Category>
          );
        })}
      </Categories>
      
      <Games
        // data={(game)=>{}}
        data={appContent.filter((game) => {
          return game.category.includes(selectedCategory) || selectedCategory === "All";
        })}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => PinItem(item)}
        ref={gamesRef}
      />
    </Animatable.View>
  );
}

export default HomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px; 
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Categories = styled.ScrollView`
  margin-top: 10px;
  flex-grow: 0;
  position: absolute;
  top: 0;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 0px 18px;
  height: 36px;
  margin-bottom:20px;
`;

const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? "#819ee5" : "#d6e0f0")};
  font-weight: ${(props) => (props.selected ? "700" : "400")};
  font-size: ${(props) => (props.selected ? "21px" : "17px")};
`;

const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #819ee5;
`;

const Games = styled.FlatList`
  margin-top: 50px;
  flex: 1;
`;

const Game = styled.TouchableOpacity`
padding-top:15px;
  
  margin-bottom: 10px;
`;

const GameCover = styled.Image`
  height: 300px;
  width: 100%;
  border-radius:15px;
`;

const GameInfo = styled.View`
  margin: -50px 16px 0 16px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

const GameImage = styled.Image`
  width: 50px;
  height: 40px;
  border-radius: 8px;
`;

const GameTitle = styled.View`
  margin: 0 24px;
`;
