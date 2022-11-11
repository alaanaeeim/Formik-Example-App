import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 25,
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: 'green',
    marginBottom: 20,
  },
  input: {
    width: width * 0.85,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 25,
  },
  btnContainer: {
    width: width * 0.85,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  submitBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 7,
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  cardUSer: {
    backgroundColor: 'lightgrey',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 25,
  },
  userDetails: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  details: {
    fontSize: 15,
    fontWeight: '500',
    color: 'blue',
    marginVertical: 5,
  },
});

export default styles;
