
import { StyleSheet, Text, View, FlatList } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Jogos from "./src/components/jogos";
import Dados from "./dados/dadosJogos.js"


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao Logo="ios-logo-android" texto="Apps" cor="green"
      Logo2 ="film-outline" texto2="Filmes" cor2="lime" ></Botao>
      <Botao Logo="ios-game-controller" texto="Jogos" cor="purple"
      Logo2 ="musical-note" texto2="Musicas" cor2="red" ></Botao>
      <Botao Logo="book-sharp" texto="Livros" cor="orange"
      Logo2 ="newspaper-outline" texto2="Noticias" cor2="blue" ></Botao>
     <View>
       <FlatList
       horizontal={true}
       data = {Dados}
       keyExtractor = {(item) => item.id}
       renderItem = { ({ item }) => (

        <Jogos
        titulo ={item.nome}
        imagem = {item.imagem}
        valor = {item.valor}
        />
       )}

       />
     </View>
     </View>

     
  );
}
