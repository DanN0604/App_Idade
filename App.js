import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {


  let [anoNasc, setanoNasc] = useState('');
  let [anoAtual, setanoAtual] = useState('');
  let [idade, setIdade] = useState('');

  function CalcularIdade (){

    let vidade = parseInt(anoAtual) - parseInt(anoNasc);
    
    setIdade(vidade);

    alert('Sua idade é: ' + idade);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Aplictivo Idade </Text>

      <TextInput
        style={styles.campo}
        placeholder="Digite o ano de nascimento "
        keyboardType="numeric"
        onChangeText={setanoNasc}
      />
      <TextInput
        style={styles.campo}
        placeholder="Digite o ano atual "
        keyboardType="numeric"
        onChangeText={setanoAtual}
      />
      

      <TouchableOpacity style={styles.botao} onPress={CalcularIdade}>
        <Text style={styles.textBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: '#228B22',
  },
  campo: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFD700',
    padding: 10,
  },
  textBotao: {
    fontSize: 25,
  },
});
