import {Text, View, StatusBar, TextInput, TouchableOpacity, TouchableHighlight, Alert, ScrollView, FlatList} from 'react-native';
import {styles} from './styles'
import { Produto } from '../../components/Participante';
import { useState } from 'react';

export default function Home(){

  //const participantes = ['Cleiton', 'Maria', 'Ana', 'Gabriel', 'Guilherme', 'Eduardo', 'Gustavo', 'André', 'Alexandro']

  //useState recebe 2 parametros, o que pega o valor e o que usa o valor.
  const [produtos, setProdutos] = useState<String[]>([]);
  const [produtoName, setProdutoName] = useState('')


  function handleProdutoAdd(){
    if(produtoName.trim().length > 0){

      if(produtos.includes(produtoName)){
        setProdutoName('')
        return Alert.alert("Problema", "-> Participante já cadastrado")
      }

      setProdutos([...produtos, produtoName.trimStart()])
      setProdutoName('')
    }else{
       Alert.alert("Problema ao adicionar Participante", "Nome está vazio")
    }

  }

  function handleProdutoRemove(nameProduto: String){
    Alert.alert('Remover', `Deseja remover o produto ${nameProduto}?`, 
    [
      {
        text: 'Sim',
        onPress : () => 
        //prevState é o estado atual da lista, ou seja, pega os dados da lista
        //filter serve para filtrar
        setProdutos(prevState => prevState.filter( partic => partic != nameProduto))
        //igual a setParticipantes.filter( partics => partics != name)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]
    )
  }


    return(
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <Text style={styles.data}>Quarta, 09 de agosto</Text>
      <View style={styles.form}>
      <TextInput style={styles.input}
      placeholder='Nome do produto'
      placeholderTextColor={'#fff'}
      onChangeText={text => setProdutoName(text)}
      value={produtoName}

      />
      <TouchableHighlight style={styles.button} onPress={handleProdutoAdd}>
        <Text style={styles.textButton}>+</Text>
      </TouchableHighlight>
      </View>

      <Text style={styles.titulo}>Produtos</Text>
      {/*
      <ScrollView>
        {
          participantes.map( participant => (
            <Participante key={participant} name={participant} onRemove={handleParticipanteRemove}/>
          ))
        }
      </ScrollView>
      */}

      <FlatList
      data={produtos}
      keyExtractor={item => item}
      renderItem={ ({item}) => (
        <Produto key={item} name={item} onRemove={() => handleProdutoRemove(item)}/>
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmpty}>Não existe produto na sua lista de compras</Text>
      )}
      />


    </View>
    )
}