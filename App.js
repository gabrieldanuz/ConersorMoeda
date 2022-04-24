import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Picker from './src/components/Picker';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>
          Selecione sua Moeda
          </Text>
          <Picker />
      </View>

      <View style={styles.areaValor}>
          <Text style={styles.titulo}>
          Digite um valor para converter em (R$)
          </Text>
          <TextInput 
          style={styles.input}
          placeholder="Ex: 150"
          keyboardType='numeric'
          />
      </View>

        <TouchableOpacity style={styles.botaoArea}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>

      <View style={styles.areaResultado}>
        <Text style={styles.valorConvertido}>
          3 USD
        </Text>
        <Text style={[styles.valorConvertido, {fontSize: 18, margin: 10}]}>
          Corresponde a
        </Text>
        <Text style={styles.valorConvertido}>
          19,90
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    alignItems: 'center',
    paddingTop: 40,
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 1,
  },
  titulo: {
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingBottom: 9,
    paddingTop: 9
  },
  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 8,
    color: '#000'
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#FB4B57',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold'
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  valorConvertido: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000'
  }
});
